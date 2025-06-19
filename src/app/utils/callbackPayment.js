import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PaymentCallback() {
  const router = useRouter();
  const { payment_id, payment_status } = router.query;

  useEffect(() => {
    if (payment_status === "captured") {
      verifyPayment(payment_id).then(() => {
        setIsProMember(true);
        router.push("/dashboard?payment=success");
      });
    } else {
      router.push("/dashboard?payment=failed");
    }
  }, []);

  return <div>Processing payment...</div>;
}
