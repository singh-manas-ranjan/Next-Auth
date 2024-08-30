import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});
