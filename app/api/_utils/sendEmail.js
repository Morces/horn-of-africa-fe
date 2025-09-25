import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "mail.hornafricainstitute.co.ke",
  secure: true,
  port: 465,
  auth: {
    user: "info@hornafricainstitute.co.ke",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages", success);
  }
});

export const sendMail = async (mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", result.messageId);
    return result;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};
