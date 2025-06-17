"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import Button from "../components/Button";

const BlogsComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "How to Design Restaurant Menus That Increase Sales",
      excerpt:
        "Learn proven menu psychology tricks to boost your restaurant's revenue by 20% or more.",
      category: "Marketing",
      date: "May 15, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Digital Menu Boards",
      excerpt:
        "Everything you need to know about transitioning from paper to digital menus in 2023.",
      category: "Technology",
      date: "April 28, 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 3,
      title: "10 Menu Design Trends Dominating 2023",
      excerpt:
        "Discover the hottest menu design trends that will make your offerings stand out this year.",
      category: "Design",
      date: "March 10, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 4,
      title: "How to Write Menu Descriptions That Sell",
      excerpt:
        "Transform your menu items from ordinary to irresistible with these copywriting techniques.",
      category: "Marketing",
      date: "February 22, 2023",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
  ];

  // Categories including "All"
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Blog | MenuCraft</title>
        <meta
          name="description"
          content="Expert articles on menu design, marketing, and technology"
        />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QR Menu <span className="text-[#6220fb]">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights on menu design, restaurant marketing, and food tech
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6220fb] focus:border-[#6220fb]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-[#6220fb] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-[#6220fb] text-xs px-2 py-1 rounded">
                      {blog.category}
                    </span>
                    <button className="text-[#6220fb] hover:text-[#6220fb]/80 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div variants={fadeInUp} className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No articles found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 bg-[#6220fb]/80 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Menu Tips Direct to Your Inbox
          </h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly menu design and marketing
            insights
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white rounded-lg text-gray-900 focus:outline-none"
            />
            <Button text=" Subscribe" variant="secondary" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsComponent;
