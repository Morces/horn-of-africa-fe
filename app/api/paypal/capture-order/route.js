import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { orderID } = await req.json();

    const base =
      process.env.PAYPAL_ENV === "live"
        ? "https://api-m.paypal.com"
        : "https://api-m.sandbox.paypal.com";

    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");

    const tokenRes = await axios.post(
      `${base}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // 3️⃣ Capture payment
    const captureRes = await axios.post(
      `${base}/v2/checkout/orders/${orderID}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(captureRes.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error capturing PayPal order" },
      { status: 500 }
    );
  }
}
