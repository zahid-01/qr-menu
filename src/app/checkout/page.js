"use client";

import { useSearchParams } from "next/navigation";

const Checkout = () => {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const purpose = searchParams.get("purpose");

  console.log("Order ID:", orderId);
  console.log("Amount:", amount);
  console.log("Purpose:", purpose);

  return (
    <div className="container mx-auto p-4">
      <form
        method="POST"
        action="https://api.razorpay.com/v1/checkout/embedded"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <input type="hidden" name="key_id" value="rzp_test_c4VrwehUSLESCP" />
        <input type="hidden" name="amount" value="599000" />
        <input type="hidden" name="order_id" value="order_QZqsjBpR6OlnWs" />
        <input type="hidden" name="name" value="Jyotishwanii" />
        <input type="hidden" name="description" value="Kundli" />
        <input
          type="hidden"
          name="image"
          value="https://rb-screenshots-actwin.s3.ap-south-1.amazonaws.com/jasia.jpeg"
        />
        <input type="hidden" name="prefill[name]" value="SUDO" />
        <input type="hidden" name="prefill[contact]" value="9123456780" />
        <input type="hidden" name="prefill[email]" value="raybit@example.com" />
        <input
          type="hidden"
          name="notes[shipping address]"
          value="Raybit Srinagar J&K"
        />
        <input
          type="hidden"
          name="callback_url"
          value="http://localhost:5050/api/v1/payments/verifyPrasadOrderTrx"
        />
        <input
          type="hidden"
          name="cancel_url"
          value="https://example.com/payment-cancel"
        />

        <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 transition-all duration-300 text-white font-bold py-3 px-5 rounded w-full md:w-auto"
          >
            PAY ₹{amount / 100}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
