"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Donate() {
  const paypalRef = useRef(null);
  const [amount, setAmount] = useState("10.00");
  const [loading, setLoading] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  // Once the PayPal SDK script loads, mark ready
  const handleScriptLoad = () => setSdkReady(true);

  // Re-render PayPal Buttons whenever amount changes AND SDK is ready
  useEffect(() => {
    if (!sdkReady || !window.paypal || !paypalRef.current) return;

    // Clear any previous buttons
    paypalRef.current.innerHTML = "";

    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "donate",
        },
        createOrder: async () => {
          setLoading(true);
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
          });
          const data = await res.json();
          setLoading(false);
          return data.id;
        },
        onApprove: async (data) => {
          setLoading(true);
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const details = await res.json();
          setLoading(false);
          alert(
            `✅ Thank you, ${details.payer.name.given_name}, for donating $${amount}!`
          );
        },
        onError: (err) => {
          setLoading(false);
          console.error("PayPal error:", err);
          alert("Something went wrong. Please try again.");
        },
      })
      .render(paypalRef.current);
  }, [amount, sdkReady]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Support Our Mission ❤️
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Every contribution helps us grow and make a difference.
        </p>

        <label className="block text-gray-700 font-semibold mb-2 text-center">
          Enter Your Donation Amount (USD)
        </label>
        <input
          type="number"
          step="0.01"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-6 rounded-lg border border-gray-300 p-3 text-center text-xl font-bold text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />

        {loading && (
          <div className="text-center text-purple-500 font-semibold mb-4">
            Processing...
          </div>
        )}

        <div ref={paypalRef} className="flex justify-center" />

        <p className="text-xs text-center text-gray-500 mt-6">
          Secure payments processed by PayPal
        </p>
      </div>

      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </div>
  );
}
