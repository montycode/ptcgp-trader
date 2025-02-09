import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email().nonempty("Email es requerido"),
  playerId: z.coerce.number(),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
