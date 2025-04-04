import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .nonempty("Campo obrigatório")
    .email("Email inválido"),
  password: z
    .string()
    .nonempty("Campo obrigatório")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});