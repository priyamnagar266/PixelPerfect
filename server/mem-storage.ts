import type { User, InsertUser, Service, PortfolioItem, TeamMember, BlogPost, Testimonial, ContactSubmission, InsertContactSubmission } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";
import { services } from "./data/services";
import { portfolioItems } from "./data/portfolio";
import { teamMembers } from "./data/team";
import { blogPosts } from "./data/blog";
import { testimonials } from "./data/testimonials";

// Create a memory store for sessions
const MemoryStore = createMemoryStore(session);

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

export class MemStorage implements IStorage {
  private users: User[] = [];
  private servicesList: Service[] = [];
  private portfolioList: PortfolioItem[] = [];
  private teamList: TeamMember[] = [];
  private blogList: BlogPost[] = [];
  private testimonialsList: Testimonial[] = [];
  private contactSubmissions: ContactSubmission[] = [];
  private nextId = 1;
  
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
    
    // Pre-populate with the data from the data folder
    this.initializeData();
  }
  
  private initializeData() {
    // Initialize services
    this.servicesList = services.map((service, index) => ({
      ...service,
      id: index + 1
    })) as Service[];
    
    // Initialize portfolio items
    this.portfolioList = portfolioItems.map((item, index) => ({
      ...item,
      id: index + 1
    })) as PortfolioItem[];
    
    // Initialize team members
    this.teamList = teamMembers.map((member, index) => ({
      ...member,
      id: index + 1
    })) as TeamMember[];
    
    // Initialize blog posts
    this.blogList = blogPosts.map((post, index) => ({
      ...post,
      id: index + 1
    })) as BlogPost[];
    
    // Initialize testimonials
    this.testimonialsList = testimonials.map((testimonial, index) => ({
      ...testimonial,
      id: index + 1
    })) as Testimonial[];
    
    // Update the next ID counter
    this.nextId = Math.max(
      this.servicesList.length,
      this.portfolioList.length,
      this.teamList.length,
      this.blogList.length,
      this.testimonialsList.length
    ) + 1;
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const newUser = {
      ...insertUser,
      id: this.nextId++
    } as User;
    
    this.users.push(newUser);
    return newUser;
  }
  
  // Services methods
  async getServices(): Promise<Service[]> {
    return this.servicesList;
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.servicesList.find(s => s.id === id);
  }
  
  // Portfolio methods
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return this.portfolioList;
  }
  
  async getPortfolioItem(id: number): Promise<PortfolioItem | undefined> {
    return this.portfolioList.find(p => p.id === id);
  }
  
  // Team members methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return this.teamList;
  }
  
  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    return this.teamList.find(t => t.id === id);
  }
  
  // Blog posts methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return this.blogList;
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogList.find(b => b.id === id);
  }
  
  // Testimonials methods
  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonialsList;
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsList.find(t => t.id === id);
  }
  
  // Contact submissions methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    // Create a submission that matches the PostgreSQL schema type
    const newSubmission = {
      ...submission,
      id: this.nextId++,
      createdAt: new Date(),
    } as unknown as ContactSubmission;
    
    this.contactSubmissions.push(newSubmission);
    return newSubmission;
  }
}

// Export a singleton instance
export const memStorage = new MemStorage();