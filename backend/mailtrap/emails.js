import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { sender, mailtrapClient } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email Sent Successfully", response);
  } catch (error) {
    console.error(`Error sending verification email`, error);
    throw new Error(`Error Sending the verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "a90185cb-ed97-44ef-a92f-3d5d8b5717a6",
      template_variables: {
        name: name,
        company_info_name: "Auth Company",
      },
    });
    console.log("Email Sent Successfully", response);
  } catch (error) {
    console.error("Error Sending welcome email", error);
    throw new Error(`Error sending welcome email : ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("(resetURL)", resetURL),
      category: "Password Reset",
    });
    // console.log("Mailtrap response:", response);
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw new Error(`Error sending password reset email : ${error}`);
  }
};
