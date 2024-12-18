import * as z from "zod";

export const AuthFormSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(20),
  phoneNumber: z.string(),
});

export type Tlogin = z.infer<typeof AuthFormSchema>;
