"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
  const fadeIn = {
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
        <title>Privacy Policy | QR Menu</title>
        <meta name="description" content="QR Menu's Privacy Policy" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <div className="text-green-100">
            <p>
              Effective:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-1">
              QR Menu ("we", "us", or "our") operates qrmenu.com
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeIn} className="p-6 md:p-8">
          <div className="prose max-w-none">
            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                When you use QR Menu, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Account Information:</strong> Name, email, phone
                  number when you register
                </li>
                <li>
                  <strong>Menu Content:</strong> Items, prices, descriptions you
                  upload
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  platform
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system
                </li>
              </ul>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To monitor usage and improve our service</li>
                <li>To detect and prevent technical issues</li>
              </ul>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                3. Data Sharing & Disclosure
              </h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Service Providers:</strong> Payment processors,
                  hosting services
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger or
                  acquisition
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law
                </li>
              </ul>
              <p className="text-gray-600">
                We <strong>do not sell</strong> your personal data to third
                parties.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                4. Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement security measures including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL/TLS encryption</li>
                <li>Regular security audits</li>
                <li>Access controls</li>
              </ul>
              <p className="text-gray-600 mt-4">
                However, no internet transmission is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                5. Your Data Rights
              </h2>
              <p className="text-gray-600 mb-4">You may:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access, update, or delete your information</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Contact us at{" "}
                <a
                  href="mailto:privacy@qrmenu.com"
                  className="text-[#622fb0] hover:underline"
                >
                  privacy@qrmenu.com
                </a>{" "}
                to exercise these rights.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                6. Cookies & Tracking
              </h2>
              <p className="text-gray-600 mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Authenticate users</li>
                <li>Remember preferences</li>
                <li>Analyze traffic</li>
              </ul>
              <p className="text-gray-600">
                You can disable cookies in your browser settings, but some
                features may not work properly.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this policy periodically. We'll notify you of
                significant changes via email or through our website.
              </p>
            </motion.section>

            <motion.section variants={fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                8. Contact Us
              </h2>
              <p className="text-gray-600">
                For privacy-related inquiries, contact our Data Protection
                Officer at:
                <br />
                <a
                  href="mailto:privacy@qrmenu.com"
                  className="text-[#622fb0] hover:underline"
                >
                  privacy@qrmenu.com
                </a>
              </p>
            </motion.section>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
