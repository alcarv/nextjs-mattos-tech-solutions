import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const META_PIXEL_ID =
  process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID || '761895363654987';
const META_CAPI_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

type LeadPayload = {
  eventId: string;
  email?: string;
  phone?: string;
  name?: string;
};

const normalize = (value?: string) => value?.trim().toLowerCase() || undefined;
const hash = (value?: string) =>
  value ? crypto.createHash('sha256').update(value).digest('hex') : undefined;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (typeof body.eventId !== 'string' || !body.eventId.trim() || body.eventId.length > 100) {
      return NextResponse.json({ error: 'eventId is required' }, { status: 400 });
    }

    if (!META_PIXEL_ID || !META_CAPI_ACCESS_TOKEN) {
      return NextResponse.json({ error: 'Meta configuration missing' }, { status: 500 });
    }

    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined;
    const clientUserAgent = req.headers.get('user-agent') || undefined;

    const email = typeof body.email === 'string' ? body.email.slice(0, 320) : undefined;
    const phone = typeof body.phone === 'string' ? body.phone.slice(0, 30) : undefined;
    const name = typeof body.name === 'string' ? body.name.slice(0, 120) : undefined;
    const firstName = name?.trim().split(' ')[0];

    const userData = {
      em: hash(normalize(email)),
      ph: hash(normalize(phone?.replace(/\D/g, ''))),
      fn: hash(normalize(firstName)),
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
    };

    const eventPayload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: body.eventId,
          user_data: userData,
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${META_CAPI_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta Conversions API request failed', response.status, result);
      return NextResponse.json({ error: 'Meta API error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send Meta lead event', error);
    return NextResponse.json({ error: 'Failed to send lead event' }, { status: 500 });
  }
}
