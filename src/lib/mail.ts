import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onbording@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `<h1>Verify your email</h1><p>Click the link to verify your email.</p><a href="${confirmLink}">Confirm</a>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onbording@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<h1>Reset your password</h1><p>Click the link to reset your password.</p><a href="${resetLink}">Confirm</a>`,
  });
};
