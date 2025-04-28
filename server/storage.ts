import { users, services, portfolioItems, teamMembers, blogPosts, testimonials, contactSubmissions } from "@shared/schema";
import type { User, InsertUser, Service, PortfolioItem, TeamMember, BlogPost, Testimonial, ContactSubmission, InsertContactSubmission } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";
import { memStorage } from "./mem-storage";

// Create memory store for fallback
const MemoryStore = createMemoryStore(session);

let usePostgres = true;
let db: any;
let pool: any;
let PostgresSessionStore: any;
let eq: any;

// Try to import PostgreSQL dependencies, but fail gracefully
try {
  const dbModule = require("./db");
  db = dbModule.db;
  pool = dbModule.pool;
  const connectPg = require("connect-pg-simple");
  const drizzleModule = require("drizzle-orm");
  eq = drizzleModule.eq;
  PostgresSessionStore = connectPg(session);
  console.log("PostgreSQL dependencies loaded successfully");
} catch (error) {
  console.error("Failed to load PostgreSQL dependencies:", error);
  console.log("Falling back to in-memory storage");
  usePostgres = false;
}

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services methods
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  
  // Portfolio methods
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: number): Promise<PortfolioItem | undefined>;
  
  // Team members methods
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: number): Promise<TeamMember | undefined>;
  
  // Blog posts methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  
  // Testimonials methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  
  // Contact submissions methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Session store for authentication
  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true 
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Services methods
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }
  
  async getService(id: number): Promise<Service | undefined> {
    const result = await db.select().from(services).where(eq(services.id, id));
    return result[0];
  }
  
  // Portfolio methods
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolioItems);
  }
  
  async getPortfolioItem(id: number): Promise<PortfolioItem | undefined> {
    const result = await db.select().from(portfolioItems).where(eq(portfolioItems.id, id));
    return result[0];
  }
  
  // Team members methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }
  
  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    const result = await db.select().from(teamMembers).where(eq(teamMembers.id, id));
    return result[0];
  }
  
  // Blog posts methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result[0];
  }
  
  // Testimonials methods
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    const result = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return result[0];
  }
  
  // Contact submissions methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
}

// Choose either PostgreSQL storage or in-memory storage
export const storage = usePostgres ? new DatabaseStorage() : memStorage;
