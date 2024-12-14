import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
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
