import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "../shared/schema";
import { services } from "./data/services";
import { portfolioItems } from "./data/portfolio";
import { teamMembers } from "./data/team";
import { blogPosts } from "./data/blog";
import { testimonials } from "./data/testimonials";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.get("/api/services", (_req, res) => {
    res.json(services);
  });

  app.get("/api/portfolio", (_req, res) => {
    res.json(portfolioItems);
  });

  app.get("/api/team", (_req, res) => {
    res.json(teamMembers);
  });

  app.get("/api/blog", (_req, res) => {
    res.json(blogPosts);
  });

  app.get("/api/testimonials", (_req, res) => {
    res.json(testimonials);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSubmissionSchema.parse(req.body);
      
      // Here we would normally store in database, but for now use memory storage
      // Create a mock implementation since we're using MemStorage
      const submission = {
        id: Date.now(),
        ...contactData,
        createdAt: new Date(),
      };
      
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
