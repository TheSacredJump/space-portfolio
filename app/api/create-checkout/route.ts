// app/api/create-checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { amount, currency } = await req.json();

        const response = await fetch('https://myquikflip.com/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'qf_d3a25526a678bc03ad6886a87072875861d99c50693e563fbc1a338e0a58dc76'
            },
            body: JSON.stringify({
                amount,
                currency
            })
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error creating checkout:', error);
        return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
    }
}