"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Make <span className="text-[#6220fb]">Menu Creation</span>{" "}
            Effortless
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MenuCraft helps restaurants, cafes, and food businesses design
            stunning digital menus in seconds—no design skills needed.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that every food business deserves a{" "}
              <strong className="text-[#6220fb]">
                beautiful, functional menu
              </strong>{" "}
              without the hassle of hiring designers or learning complex
              software. Our platform lets you generate, customize, and publish
              menus in minutes.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Why Choose MenuCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "⚡ Instant Generation",
                desc: "Create a professional menu in seconds with AI.",
              },
              {
                title: "🎨 Customizable Designs",
                desc: "Match your brand with colors, fonts, and layouts.",
              },
              {
                title: "📱 Mobile-Friendly",
                desc: "Looks great on any device—no coding needed.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#6220fb8a] rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Perfect Menu?
          </h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses using MenuCraft to save time and
            impress customers.
          </p>
          <Link href="/getStarted">
            <Button text=" Get Started for Free" variant="secondary" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
