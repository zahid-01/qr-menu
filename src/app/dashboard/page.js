"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyBusiness } from "@/app/utils/api";
import { BASE_URI } from "../utils/constants";
import Image from "next/image";
import Button from "../components/Button";
import { FiPlus, FiArrowRight, FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await getMyBusiness();
        const data = Array.isArray(res.data.data)
          ? res.data.data
          : [res.data.data];
        setBusinesses(data);
      } catch (error) {
        console.error("Failed to fetch businesses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBusinesses();
  }, []);

  const handleAddBusiness = () => router.push("/getStarted");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Businesses Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              My Businesses
            </h2>
            <Button
              onClick={handleAddBusiness}
              text="Add Business"
              variant="primary"
              icon={<FiPlus />}
            />
          </div>

          {loading ? (
            <div className="p-12 flex justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ) : businesses.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FiMenu className="text-gray-400 text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No businesses yet
              </h3>
              <p className="text-gray-500 mb-6">
                Get started by creating your first business
              </p>
              <Button
                onClick={handleAddBusiness}
                text="Create Business"
                variant="primary"
                icon={<FiPlus />}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {businesses.map((biz) => (
                <div
                  key={biz.id}
                  onClick={() => router.push(`/UserProfile/${biz.id}`)}
                  className="group relative rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  {biz.banner && (
                    <div className="h-40 relative overflow-hidden">
                      <Image
                        src={`${BASE_URI}${biz.banner}`}
                        alt="Banner"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  )}

                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {biz.logo && (
                        <div className="relative -mt-12">
                          <div className="w-16 h-16 rounded-lg border-4 border-white bg-white shadow-sm overflow-hidden">
                            <Image
                              src={`${BASE_URI}${biz.logo}`}
                              alt="Logo"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {biz.businessName}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                          {biz.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-indigo-500">
                        Manage <FiArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
