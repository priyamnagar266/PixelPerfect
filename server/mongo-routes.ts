import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./mongo-storage";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { createHash, randomBytes } from "crypto";
import session from "express-session";
import { IUser } from "./models";
import { z } from "zod";

// Session declaration
declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

// Simple validation schemas
const contactSubmissionSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// Helper function to hash passwords
async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256').update(password + salt).digest('hex');
  return `${hash}.${salt}`;
}

// Helper function to compare passwords
async function comparePasswords(supplied: string, stored: string): Promise<boolean> {
  const [hashed, salt] = stored.split('.');
  const suppliedHash = createHash('sha256').update(supplied + salt).digest('hex');
  return hashed === suppliedHash;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "pixelperfectagencywebsite",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  };

  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user || !(await comparePasswords(password, user.password))) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Auth endpoints
  app.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const user = await storage.createUser({
        ...req.body,
        password: req.body.password // Password will be hashed in the storage service
      });

      req.login(user, (err) => {
        if (err) return next(err);
        // Don't include password in response
        const userObj = user.toObject();
        delete userObj.password;
        res.status(201).json(userObj);
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Error creating user", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: IUser | false) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      req.login(user, (loginErr: any) => {
        if (loginErr) return next(loginErr);
        // Don't include password in response
        const userObj = user.toObject();
        delete userObj.password;
        res.json(userObj);
      });
    })(req, res, next);
  });

  app.post("/api/logout", (req, res) => {
    req.logout((err: any) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    // Don't include password in response
    const userObj = (req.user as IUser).toObject();
    delete userObj.password;
    res.json(userObj);
  });

  // API endpoints
  app.get("/api/services", async (_req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching services", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/portfolio", async (_req, res) => {
    try {
      const portfolio = await storage.getPortfolioItems();
      res.json(portfolio);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching portfolio items", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/team", async (_req, res) => {
    try {
      const team = await storage.getTeamMembers();
      res.json(team);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching team members", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/blog", async (_req, res) => {
    try {
      const blog = await storage.getBlogPosts();
      res.json(blog);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching blog posts", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching testimonials", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(contactData);
      
      // Return success
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid submission data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}