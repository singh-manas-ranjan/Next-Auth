import { Resend } from "resend";
import nodemailer from "nodemailer";

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

//Sending email using nodemailer
export const sendVerificationEmailUsingNodeMailer = async (
  email: string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Verify your email",
      html: `  <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #333;
              margin: 0;
            }
            .content {
              font-size: 16px;
              line-height: 1.5;
              color: #555;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              color: #ffffff;
              background-color: #007bff;
              border-radius: 4px;
              text-decoration: none;
            }
            .button:hover {
              background-color: #0056b3;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #999;
            }
          </style>
        </head>
        <body>
          <div class="container" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div class="header" style="text-align: center; padding-bottom: 20px;">
              <h1 style="color: #333; margin: 0;">Email Verification</h1>
            </div>
            <div class="content" style="font-size: 16px; line-height: 1.5; color: #555; margin-bottom: 20px;">
              <p>Hello,</p>
              <p>Thank you for registering with us. To complete the registration process, please verify your email address by clicking the button below:</p>
              <a href="${confirmLink}" class="button" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; border-radius: 4px; text-decoration: none;">Verify Email</a>
              <p>If you did not register for an account, please ignore this email.</p>
            </div>
            <div class="footer" style="text-align: center; font-size: 12px; color: #999;">
              <p>&copy; 2024 Learnopia. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
};

//Sending password reset email using nodemailer
export const sendPasswordResetEmailUsingNodeMailer = async (
  email: string,
  token: string
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Reset your password",
      html: `
       <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #333;
            }
            .content {
              font-size: 16px;
              line-height: 1.5;
              color: #555;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              color: #ffffff;
              background-color: #007bff;
              border-radius: 4px;
              text-decoration: none;
            }
            .button:hover {
              background-color: #0056b3;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #999;
            }
          </style>
        </head>
        <body>
          <div class="container" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div class="header" style="text-align: center; padding-bottom: 20px;">
              <h1 style="color: #333;">Password Reset Request</h1>
            </div>
            <div class="content" style="font-size: 16px; line-height: 1.5; color: #555; margin-bottom: 20px;">
              <p>Hello,</p>
              <p>We received a request to reset your password. Click the button below to create a new password:</p>
              <a href="${resetLink}" class="button" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; border-radius: 4px; text-decoration: none;">Reset Password</a>
              <p>If you did not request this, please ignore this email.</p>
            </div>
            <div class="footer" style="text-align: center; font-size: 12px; color: #999;">
              <p>&copy; 2024 Learnopia. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
    `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
};
