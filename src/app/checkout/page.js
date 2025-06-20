"use client";

import { useSearchParams } from "next/navigation";
import { BASE_URI } from "../utils/constants";
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
        className="max-w-md mx-auto"
      >
        <input type="hidden" name="key_id" value="rzp_test_c4VrwehUSLESCP" />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="order_id" value={orderId} />
        <input type="hidden" name="name" value="Raybit QR" />
        <input type="hidden" name="description" value="Menu" />
        <input
          type="hidden"
          name="image"
          value="https://raybittechnologies.com/wp-content/uploads/2024/03/logoraybit-new.png"
        />
        <input type="hidden" name="prefill[name]" value="SUDO" />
        <input type="hidden" name="prefill[contact]" value="9123456780" />
        <input type="hidden" name="prefill[email]" value="raybit@example.com" />
        <input
          type="hidden"
          name="callback_url"
          value={`${BASE_URI}/api/v1/businesses/verifyProPayment`}
        />
        <input
          type="hidden"
          name="cancel_url"
          value="http://localhost:5050/businesses/verifyProPayment"
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
