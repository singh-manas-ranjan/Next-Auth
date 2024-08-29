"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //Validate fields
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { name, email, password } = validatedFields.data;

  //Hash password
  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.BCRYPT_SALT as string)
  );

  //Check if email already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  //Create user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //Generate verification token
  const verificationToken = await generateVerificationToken(email);

  //Send verification email
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};
