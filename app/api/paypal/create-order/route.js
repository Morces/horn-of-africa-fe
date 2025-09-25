import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const base =
      process.env.PAYPAL_ENV === "live"
        ? "https://api-m.paypal.com"
        : "https://api-m.sandbox.paypal.com";

    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");

    // 1️⃣ Get access token
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

    // 2️⃣ Create order
    const orderRes = await axios.post(
      `${base}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "USD", value: amount || "5.00" },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ id: orderRes?.data?.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating PayPal order" },
      { status: 500 }
    );
  }
}
