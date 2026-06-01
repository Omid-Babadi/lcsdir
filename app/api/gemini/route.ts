import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 30; // reasonable per-minute cap
const rateLimits = new Map<string, { count: number; firstSeen: number }>();

function getIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp;
  return 'unknown';
}

export async function POST(request: Request) {
  try {
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const ip = getIp(request);
    const now = Date.now();
    const entry = rateLimits.get(ip) || { count: 0, firstSeen: now };
    if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
      entry.count = 0;
      entry.firstSeen = now;
    }
    entry.count += 1;
    rateLimits.set(ip, entry);
    if (entry.count > MAX_PER_WINDOW) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body = await request.json();
    const model = body.model || process.env.GEMINI_MODEL || "gemini-2.5-flash";
    
    // Handle both messages array and direct contents
    let contents = body.contents || body.messages?.map((m: any) => m.content).join('\n') || "";

    if (!model) {
      return NextResponse.json({ error: 'Missing model' }, { status: 400 });
    }
    if (!contents) {
      return NextResponse.json({ error: 'Missing contents' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
    });

    return NextResponse.json({
      text: response.text,
      response: response,
    });
  } catch (err) {
    console.error('Gemini error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
