import { ZodType, z } from "zod";
export type formSchema = {
  username?: string;
  chessElo?: number;
};
export type form1Schema = {
  username?: string;
  chessElo?: number | null | undefined;
};
export type blogSchema = {
  author: string;
  title: string;
  body: string;
};
export const form: ZodType<formSchema> = z.object({
  username: z
    .string()
    .min(5)
    .max(10)
    .nonempty()
    .toLowerCase()
    .regex(/^[a-zA-Z0-9]+$/),
});
export const formReg: ZodType<form1Schema> = z.object({
  username: z
    .string()
    .min(5, "username must contain at least 5 characters")
    .max(10, "username must contain at most 10 characters")
    .nonempty()
    .toLowerCase()
    .regex(/^[a-zA-Z0-9]+$/),
  chessElo: z
    .number()
    .min(100, "chess elo can't be under 100")
    .max(3200, "chess elo can't be more than 3200")
    .nonnegative("can't be negative")
    .nullish(),
});
export const blogForm: ZodType<blogSchema> = z.object({
  author: z.string().nonempty("author can't be empty").toLowerCase(),
  title: z.string().nonempty("title can't be empty").toLowerCase(),
  body: z.string().nonempty("body can't be empty").toLowerCase(),
});
