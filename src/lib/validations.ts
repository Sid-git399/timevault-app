import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password is too long"),
});

export const inquirySchema = z.object({
  watchId: z.string().min(1),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about what you're looking for")
    .max(1000, "Message is too long"),
});

export const favoriteSchema = z.object({
  watchId: z.string().min(1),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type InquiryInput = z.infer<typeof inquirySchema>;
export type FavoriteInput = z.infer<typeof favoriteSchema>;
