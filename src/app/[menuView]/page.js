"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { addReview, getQrMenu, getReview } from "../utils/api";
import { BASE_URI } from "../utils/constants";
import Image from "next/image";
import Button from "../components/Button";
import { AiFillStar } from "react-icons/ai";

const QRMenuView = () => {
  const { menuView } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("menu");
  const [reviewInput, setReviewInput] = useState("");
  const [userReviews, setUserReviews] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [businessId, setBusinessId] = useState(null);

  useEffect(() => {
    setLoading(true);
    getQrMenu(menuView).then(
      ({ data }) => {
        setMenu(data.business);
        setBusinessId(data.business.id);
        getReview("edxex", data.business.id).then(({ data }) => {
          setUserReviews(data.data);
        });
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err?.message || "Something went wrong. Please try again.");
        setLoading(false);
      }
    );
  }, [menuView]);

  const handleReviewSubmit = async () => {
    if (
      !reviewInput.trim() ||
      !reviewName.trim() ||
      !reviewEmail.trim() ||
      reviewRating === 0
    )
      return;

    const reviewData = {
      author: reviewName.trim(),
      email: reviewEmail.trim(),
      review: reviewInput.trim(),
      rating: reviewRating,
      business_id: businessId,
    };

    try {
      const { data } = await addReview(reviewData);

      setUserReviews([data.data, ...userReviews]);

      setReviewInput("");
      setReviewName("");
      setReviewEmail("");
      setReviewRating(0);
      setShowModal(false);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Please try again.");
    }
  };

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
                : "https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg"
            }
            alt="logo"
            className="h-24 w-24 rounded-full mx-auto shadow-md"
          />
        </div>
        <h1 className="text-center uppercase text-4xl font-bold my-4">
          {menu.businessName} Menu
        </h1>

        {/* Tabs */}
        <div className="flex justify-around gap-6 mb-6">
          <button
            className={`font-semibold text-xl cursor-pointer ${
              activeTab === "menu"
                ? "border-b-2 border-[#6220fb] text-[#6220fb]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
          <button
            className={`font-semibold text-xl cursor-pointer ${
              activeTab === "reviews"
                ? "border-b-2 border-[#6220fb] text-[#6220fb]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeTab === "menu" ? (
          menu.Categories?.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-black">
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
          ))
        ) : (
          // Reviews Tab
          <div className="space-y-6">
            {userReviews.length ? (
              userReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-[#6220fb]"
                >
                  <p className="text-gray-800 font-medium">{review.review}</p>
                  <p className="text-sm text-gray-500 uppercase mt-1">
                    – {review.author}
                  </p>
                  <div className="flex items-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No reviews yet.</p>
            )}

            <div className="text-center">
              <Button
                text="Add Review"
                onClick={() => setShowModal(true)}
                className="mt-4"
                width="100%"
              />
            </div>
          </div>
        )}
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Your Review</h2>

            <input
              type="email"
              placeholder="Your Email"
              value={reviewEmail}
              onChange={(e) => setReviewEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-[#6220fb]"
            />
            <input
              type="text"
              placeholder="Your Name"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-[#6220fb]"
            />

            <div className="flex items-center mb-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <AiFillStar
                  key={i}
                  className={
                    i < reviewRating ? "text-yellow-400" : "text-gray-300"
                  }
                  size={24}
                  onClick={() => setReviewRating(i + 1)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>

            <textarea
              rows={3}
              placeholder="Write your review..."
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-md mb-4 focus:outline-none focus:border-[#6220fb]"
            />

            <div className="flex justify-between">
              <Button
                onClick={() => setShowModal(false)}
                text="Cancel"
                variant="secondary"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleReviewSubmit();
                  setShowModal(false);
                }}
                text="Submit"
                variant="primary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRMenuView;
