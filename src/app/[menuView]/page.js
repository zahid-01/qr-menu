"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { getQrMenu } from "../utils/api";
import { BASE_URI } from "../utils/constants";
import Image from "next/image";

const QRMenuView = () => {
  const { menuView } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getQrMenu(menuView).then(
      ({ data }) => {
        setMenu(data.business);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err?.message || "Something went wrong. Please try again.");
        setLoading(false);
      }
    );
  }, [menuView]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium text-gray-700">
        Loading menu...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-700 font-semibold">
        {error}
      </div>
    );
  }

  if (!menu) return null;

  return (
    <div className="min-h-screen p-6 text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={
              menu.logo
                ? `${BASE_URI}/${menu.logo}`
                : "https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?ga=GA1.1.364166860.1747116538&semt=ais_hybrid&w=740"
            }
            alt="logo"
            className="h-24 w-24 rounded-full mx-auto shadow-md"
          />
        </div>
        <h1 className="text-center uppercase text-4xl font-bold my-4">
          {menu.businessName} Menu
        </h1>

        {menu.Categories?.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold border-b border-white/10 pb-2 mb-4 text-black">
              {section.name} 👇
            </h2>
            <div className="grid gap-4">
              {section.Items?.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-md bg-white p-4 shadow-[2px_8px_8px_2px_#6220fb10] transition duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-black">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-md font-semibold text-[#6220fb]">
                      ₹ {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default QRMenuView;
