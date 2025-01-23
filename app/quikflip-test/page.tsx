"use client";

import React, { useState, useEffect } from 'react'

const Quikflip = () => {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'confirmed' | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCryptoPayment() {
    try {
        setLoading(true);
        // Call your own backend instead of myquikflip.com directly
        const response = await fetch('/api/create-checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: "1",
                currency: "USD"
            })
        });
  
        const data = await response.json();
      
        if (data.charge && data.charge.hosted_url) {
            setPaymentStatus('pending');
            window.location.href = data.charge.hosted_url;
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setLoading(false);
    }
  }

  // Check payment status every few seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/quikflip-webhook');
      const data = await response.json();
      if (data.confirmed) {
        setPaymentStatus('confirmed');
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-white min-h-screen flex flex-col justify-center items-center z-50'>
      <div 
        onClick={handleCryptoPayment}
        className='z-50 px-8 py-3 border border-[#d9d9d9] hover:border-none hover:bg-gradient-to-r from-purple-500 to-cyan-500 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
      >
        {loading ? 'Loading...' : 'Checkout with QuikFlip'}
      </div>

      {paymentStatus === 'pending' && (
        <div className="text-yellow-400 mt-4">
          Payment pending...
        </div>
      )}

      {paymentStatus === 'confirmed' && (
        <div className="text-green-400 mt-4">
          Payment confirmed! Order will be processed shortly.
        </div>
      )}
    </div>
  )
}

export default Quikflip