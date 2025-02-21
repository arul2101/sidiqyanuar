import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z
    .string({ required_error: "This Field cannot blank!" })
    .min(5, "Field name must be at least 8 characters!"),
  email: z
    .string({ required_error: "This Field cannot blank!" })
    .email({ message: "Email must be valid!" }),
  message: z
    .string({ required_error: "This Field cannot blank!" })
    .min(20, "Field Message must be at least 20 characters!"),
});
