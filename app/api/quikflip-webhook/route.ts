// app/api/quikflip-webhook/route.ts
import { NextResponse } from 'next/server';

// Use this to store the payment status
let paymentConfirmed = false;

export async function POST(req: Request) {
    try {
        const { event_type, data } = await req.json();
        
        if (event_type === 'payment.confirmed') {
            // Set payment as confirmed when we get the webhook
            paymentConfirmed = true;
            console.log('Payment confirmed!');
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' }, 
            { status: 500 }
        );
    }
}

// Add an endpoint to check payment status
export async function GET(req: Request) {
    return NextResponse.json({ confirmed: paymentConfirmed });
}