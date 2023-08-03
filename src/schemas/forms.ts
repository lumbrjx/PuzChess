import { ZodType, z } from "zod";
export type formSchema = {
  username?: string;
  chessElo?: string;
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
export const formReg: ZodType<formSchema> = z.object({
  username: z
    .string()
    .min(5, "username must contain at least 5 characters")
    .max(10, "username must contain at most 10 characters")
    .nonempty()
    .toLowerCase()
    .regex(/^[a-zA-Z0-9]+$/),
  chessElo: z.string().max(4).nonempty("chess elo shouldn't be empty"),
});
export const blogForm: ZodType<blogSchema> = z.object({
  author: z.string().nonempty("author can't be empty").toLowerCase(),
  title: z.string().nonempty("title can't be empty").toLowerCase(),
  body: z.string().nonempty("body can't be empty").toLowerCase(),
});
