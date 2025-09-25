import { NextResponse } from "next/server";
import { sendMail } from "../_utils/sendEmail";
import { contactTemplate } from "./contactHTML";

export async function POST(req) {
  try {
    const { first_name, last_name, email, subject, message } = await req.json();

    if (!first_name || !email || !subject || !message) {
      throw {
        custom: true,
        message: "Missing required fields",
      };
    }

    const mailOptions = {
      to: "info@hornafricainstitute.co.ke",
      from: email,
      subject: `Contact Form Submission: ${subject}`,
      html: contactTemplate({
        first_name,
        last_name,
        email,
        subject,
        message,
      }),
    };

    await sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
