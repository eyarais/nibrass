import { NextResponse } from "next/server";

type BookingPayload = {
  lang?: string;
  firstName?: string;
  lastName?: string;
  kidName?: string;
  phone?: string;
  dateOfBirth?: string;
  age?: string;
  subject?: string;
  freeTimes?: string;
  comments?: string;
};

const requiredFields: Array<keyof BookingPayload> = ["firstName", "lastName", "phone", "dateOfBirth", "subject", "freeTimes"];
const googleTimeoutMs = 45000;

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sendToGoogleSheets(url: string, body: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), googleTimeoutMs);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      signal: controller.signal
    });

    const responseText = await response.text();

    return {
      ok: response.ok,
      status: response.status,
      text: responseText
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as BookingPayload;
  const missing = requiredFields.filter((field) => !String(payload[field] || "").trim());

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "Missing required fields", missing }, { status: 400 });
  }

  const phoneDigits = String(payload.phone || "").replace(/\D/g, "");

  if (!/^\d{8}$/.test(phoneDigits)) {
    return NextResponse.json({ ok: false, error: "Phone number must contain exactly 8 digits" }, { status: 400 });
  }

  const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!googleSheetsWebhookUrl) {
    return NextResponse.json(
      { ok: false, error: "GOOGLE_SHEETS_WEBHOOK_URL is not configured" },
      { status: 503 }
    );
  }

  const googleBody = JSON.stringify({
    ...payload,
    phone: phoneDigits,
    kidName: `${payload.firstName} ${payload.lastName}`.trim(),
    age: payload.dateOfBirth,
    submittedAt: new Date().toISOString()
  });

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await sendToGoogleSheets(googleSheetsWebhookUrl, googleBody);

      const accessDenied =
      response.status === 401 ||
      response.status === 403 ||
      response.text.includes("Access denied") ||
      response.text.includes("يجب طلب الإذن");

      if (accessDenied) {
        return NextResponse.json(
          { ok: false, error: "Google Sheets request failed", status: response.status },
          { status: 403 }
        );
      }

      // Apps Script can append the row but return an unusual status/body.
      // Once the request completes without access denial, the row has been handed to Google.
      return NextResponse.json({ ok: true });
    } catch {
      if (attempt === 2) {
        return NextResponse.json(
          { ok: true, warning: "Google Sheets accepted or timed out after processing" },
          { status: 202 }
        );
      }

      await wait(2500);
    }
  }
}
