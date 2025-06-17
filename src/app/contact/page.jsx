"use client";

import { motion } from "framer-motion";
import Button from "../components/Button";
import Link from "next/link";

const ContactUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-[#6220fb]">Connect</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#6220fb]"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-[#6220fb]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For general inquiries and support
            </p>
            <a
              href="mailto:hello@menucraft.com"
              className="text-[#6220fb] hover:underline font-medium"
            >
              info@qrMenu.com
            </a>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 text-[#6220fb]"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-[#6220fb]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Social Media</h3>
            </div>
            <p className="text-gray-600 mb-4">Follow us for updates and tips</p>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: "twitter", url: "#" },
                { name: "Instagram", icon: "instagram", url: "#" },
                { name: "LinkedIn", icon: "linkedin", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <use href={`/icons.svg#${social.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <Button text="Send Message" width="100%" />
          </form>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                question: "How do I create my first menu?",
                answer:
                  "Simply sign up, choose a template, and customize it with your items. No design skills needed!",
              },
              {
                question: "Can I update my menu after publishing?",
                answer:
                  "Yes! You can edit your menu anytime, and changes will update automatically.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "We provide 24/7 email support and have a comprehensive help center with tutorials.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#6220fb5a]"
              >
                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          className="bg-[#6220fb]/80 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Menu?
          </h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Join thousands of restaurants creating stunning digital menus with
            MenuCraft.
          </p>
          <Link href="/getStarted">
            <Button text="Get Started for Free" variant="secondary" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
