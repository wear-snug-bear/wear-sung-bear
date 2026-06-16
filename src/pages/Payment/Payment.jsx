import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};

  const handleConfirmPayment = async () => {
    console.log("Button clicked, sending to backend..."); // Debug log
    if (!orderData) {
      alert("Error: No order data found!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      console.log("Response status:", response.status); // Debug log
      const result = await response.json();

      if (response.ok) {
        alert(`Payment Successful! Your Order ID is: ${result.order_id}`);
        navigate('/');
      } else {
        alert("Server returned error: " + JSON.stringify(result));
      }
    } catch (err) {
      console.error("Critical Fetch Error:", err);
      alert("Check your Flask terminal for errors.");
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF9]">
      <button 
        onClick={handleConfirmPayment}
        className="bg-[#6D442C] text-white py-4 px-8 rounded-2xl font-black hover:bg-[#4D3A2A] transition-all"
      >
        CONFIRM & PAY UPI ✨
      </button>
    </div>
  );
}