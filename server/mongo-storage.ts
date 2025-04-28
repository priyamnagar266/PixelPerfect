import session from 'express-session';
import { connectToDatabase } from './mongodb';
import { 
  User, Service, PortfolioItem, TeamMember, 
  BlogPost, Testimonial, ContactSubmission,
  IUser, IService, IPortfolioItem, ITeamMember,
  IBlogPost, ITestimonial, IContactSubmission
} from './models';
import { createHash, randomBytes } from 'crypto';
import { promisify } from 'util';
import MongoStore from 'connect-mongo';

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

export interface IStorage {
  // User methods
  getUser(id: string): Promise<IUser | null>;
  getUserByUsername(username: string): Promise<IUser | null>;
  createUser(user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser>;
  
  // Services methods
  getServices(): Promise<IService[]>;
  getService(id: string): Promise<IService | null>;
  
  // Portfolio methods
  getPortfolioItems(): Promise<IPortfolioItem[]>;
  getPortfolioItem(id: string): Promise<IPortfolioItem | null>;
  
  // Team members methods
  getTeamMembers(): Promise<ITeamMember[]>;
  getTeamMember(id: string): Promise<ITeamMember | null>;
  
  // Blog posts methods
  getBlogPosts(): Promise<IBlogPost[]>;
  getBlogPost(id: string): Promise<IBlogPost | null>;
  
  // Testimonials methods
  getTestimonials(): Promise<ITestimonial[]>;
  getTestimonial(id: string): Promise<ITestimonial | null>;
  
  // Contact submissions methods
  createContactSubmission(submission: Omit<IContactSubmission, 'id' | 'createdAt' | 'updatedAt'>): Promise<IContactSubmission>;
  
  // Session store for authentication
  sessionStore: session.Store;
}

export class MongoStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    // Initialize MongoDB session store
    this.sessionStore = MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/webAgency',
      collectionName: 'sessions',
      ttl: 14 * 24 * 60 * 60, // 14 days
      autoRemove: 'native'
    });

    // Ensure database connection
    connectToDatabase().catch(console.error);
  }

  // User methods
  async getUser(id: string): Promise<IUser | null> {
    try {
      return await User.findById(id);
    } catch (error) {
      console.error('Error in getUser:', error);
      return null;
    }
  }

  async getUserByUsername(username: string): Promise<IUser | null> {
    try {
      return await User.findOne({ username });
    } catch (error) {
      console.error('Error in getUserByUsername:', error);
      return null;
    }
  }

  async createUser(userData: any): Promise<IUser> {
    try {
      // Hash the password before storing
      const hashedPassword = await hashPassword(userData.password);
      
      const newUser = new User({
        ...userData,
        password: hashedPassword
      });
      
      return await newUser.save();
    } catch (error) {
      console.error('Error in createUser:', error);
      throw error;
    }
  }

  // Services methods
  async getServices(): Promise<IService[]> {
    try {
      return await Service.find().sort({ title: 1 });
    } catch (error) {
      console.error('Error in getServices:', error);
      return [];
    }
  }

  async getService(id: string): Promise<IService | null> {
    try {
      return await Service.findById(id);
    } catch (error) {
      console.error('Error in getService:', error);
      return null;
    }
  }

  // Portfolio methods
  async getPortfolioItems(): Promise<IPortfolioItem[]> {
    try {
      return await PortfolioItem.find().sort({ createdAt: -1 });
    } catch (error) {
      console.error('Error in getPortfolioItems:', error);
      return [];
    }
  }

  async getPortfolioItem(id: string): Promise<IPortfolioItem | null> {
    try {
      return await PortfolioItem.findById(id);
    } catch (error) {
      console.error('Error in getPortfolioItem:', error);
      return null;
    }
  }

  // Team members methods
  async getTeamMembers(): Promise<ITeamMember[]> {
    try {
      return await TeamMember.find().sort({ name: 1 });
    } catch (error) {
      console.error('Error in getTeamMembers:', error);
      return [];
    }
  }

  async getTeamMember(id: string): Promise<ITeamMember | null> {
    try {
      return await TeamMember.findById(id);
    } catch (error) {
      console.error('Error in getTeamMember:', error);
      return null;
    }
  }

  // Blog posts methods
  async getBlogPosts(): Promise<IBlogPost[]> {
    try {
      return await BlogPost.find().sort({ createdAt: -1 });
    } catch (error) {
      console.error('Error in getBlogPosts:', error);
      return [];
    }
  }

  async getBlogPost(id: string): Promise<IBlogPost | null> {
    try {
      return await BlogPost.findById(id);
    } catch (error) {
      console.error('Error in getBlogPost:', error);
      return null;
    }
  }

  // Testimonials methods
  async getTestimonials(): Promise<ITestimonial[]> {
    try {
      return await Testimonial.find();
    } catch (error) {
      console.error('Error in getTestimonials:', error);
      return [];
    }
  }

  async getTestimonial(id: string): Promise<ITestimonial | null> {
    try {
      return await Testimonial.findById(id);
    } catch (error) {
      console.error('Error in getTestimonial:', error);
      return null;
    }
  }

  // Contact submissions methods
  async createContactSubmission(submission: any): Promise<IContactSubmission> {
    try {
      const newSubmission = new ContactSubmission(submission);
      return await newSubmission.save();
    } catch (error) {
      console.error('Error in createContactSubmission:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const storage = new MongoStorage();