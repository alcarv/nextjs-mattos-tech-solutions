import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const META_PIXEL_ID = process.env.META_PIXEL_ID || '761895363654987';
const META_CAPI_ACCESS_TOKEN =
  process.env.META_CAPI_ACCESS_TOKEN ||
  'EAAEYJzz1Y0UBQZBevZANZBYfQpseb87OXC4U85bC0GrDVfOZBlbBdRFnet2UwzbN2xmP7JqWZBCOZAr0qZAB27Nor0AMwNs7s4cXpw3JR6u9GkqSDWY4ZAZC10Iu7zg3s7WRHcAVaZCBqE0ZB6tsuYpwyrGddEhi40MKNba89Ppeb8MdjUVoZBQa5KV8dTND5Jy9rGnXgAZDZD';

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

    if (!body.eventId) {
      return NextResponse.json({ error: 'eventId is required' }, { status: 400 });
    }

    if (!META_PIXEL_ID || !META_CAPI_ACCESS_TOKEN) {
      return NextResponse.json({ error: 'Meta configuration missing' }, { status: 500 });
    }

    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined;
    const clientUserAgent = req.headers.get('user-agent') || undefined;

    const firstName = body.name?.trim().split(' ')[0];

    const userData = {
      em: hash(normalize(body.email)),
      ph: hash(normalize(body.phone?.replace(/\D/g, ''))),
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
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Meta API error', details: result }, { status: 502 });
    }

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send lead event', details: String(error) }, { status: 500 });
  }
}
