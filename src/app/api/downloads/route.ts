import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { productId, amount, email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    if (!amount || amount <= 0) {
      const downloadUrl = `/api/downloads/${productId}/file?token=${generateToken()}`;
      return NextResponse.json({ downloadUrl });
    }

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Donation Download" },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/downloads/${productId}/file?token=${generateToken()}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/downloads?canceled=true`,
      metadata: { productId, email },
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Download checkout error:", error);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}

function generateToken(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
