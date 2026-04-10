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
