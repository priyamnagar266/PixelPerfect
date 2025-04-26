import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the Privacy Policy',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const filterSchema = z.object({
  category: z.string()
});

export type FilterValues = z.infer<typeof filterSchema>;
