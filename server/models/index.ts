import mongoose, { Schema, Document } from 'mongoose';

// User Interface
export interface IUser extends Document {
  username: string;
  password: string;
  name?: string;
  email?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service Interface
export interface IService extends Document {
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  link: string;
  linkColor: string;
  createdAt: Date;
  updatedAt: Date;
}

// Portfolio Item Interface
export interface IPortfolioItem extends Document {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  overlayColor: string;
  createdAt: Date;
  updatedAt: Date;
}

// Team Member Interface
export interface ITeamMember extends Document {
  name: string;
  position: string;
  image: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// Blog Post Interface
export interface IBlogPost extends Document {
  title: string;
  excerpt: string;
  fullContent?: string;
  image: string;
  category: string;
  categoryBg: string;
  categoryColor: string;
  date: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

// Testimonial Interface
export interface ITestimonial extends Document {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

// Contact Submission Interface
export interface IContactSubmission extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define Schemas
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', required: true }
}, { timestamps: true });

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, required: true },
  icon: { type: String, required: true },
  iconBg: { type: String, required: true },
  iconColor: { type: String, required: true },
  link: { type: String, required: true },
  linkColor: { type: String, required: true }
}, { timestamps: true });

const PortfolioItemSchema = new Schema<IPortfolioItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  overlayColor: { type: String, required: true }
}, { timestamps: true });

const TeamMemberSchema = new Schema<ITeamMember>({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String, required: true },
  socialLinks: [{
    platform: { type: String, required: true },
    url: { type: String, required: true }
  }]
}, { timestamps: true });

const BlogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  fullContent: { type: String },
  image: { type: String, required: true },
  category: { type: String, required: true },
  categoryBg: { type: String, required: true },
  categoryColor: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true }
}, { timestamps: true });

const TestimonialSchema = new Schema<ITestimonial>({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true }
}, { timestamps: true });

const ContactSubmissionSchema = new Schema<IContactSubmission>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

// Create models
export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export const Service = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
export const PortfolioItem = mongoose.models.PortfolioItem || mongoose.model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);
export const TeamMember = mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
export const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
export const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
export const ContactSubmission = mongoose.models.ContactSubmission || mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);