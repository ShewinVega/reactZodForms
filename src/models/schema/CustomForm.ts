import { z } from "zod";
import { messages } from "../../utils";

export const FormSchema = z
  .object({
    name: z
      .string({
        required_error: messages.name.required,
      })
      .min(3, messages.name.min),
    email: z
      .string({
        required_error: messages.email.required,
      })
      .email(messages.email.valid),
    password: z
      .string({
        required_error: messages.password.required,
      })
      .min(6, messages.password.min),
    confirmPassword: z
      .string({
        required_error: messages.confirmPassword.required,
      })
      .min(6, messages.confirmPassword.min),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: messages.confirmPassword.match,
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof FormSchema>;
