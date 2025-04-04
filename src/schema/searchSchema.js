import { z } from "zod";

export const searchSchema = z.object({
    title: z
      .string()
      .nonempty("Campo obrigatório")
      .refine((value) => !/^\s+$/.test(value), {
        message: "Não é permitido espaços em branco",
      }),
  });