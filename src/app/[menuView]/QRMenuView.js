import React, { Suspense } from "react";
import QRMenuView from "./page";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-700">Loading...</div>}>
      <QRMenuView />
    </Suspense>
  );
}
