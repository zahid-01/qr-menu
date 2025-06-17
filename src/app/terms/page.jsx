"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Button from "../components/Button";

const TermsOfUse = () => {
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
        <title>Terms of Use | QR Menu</title>
        <meta name="description" content="QR Menu Terms of Service" />
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
          className="bg-gradient-to-r from-[#6220fb]/50 to-[#6220fb] p-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Terms of Use
          </h1>
          <p className="text-blue-100">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeIn} className="p-6 md:p-8">
          <div className="prose max-w-none">
            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing or using QR Menu ("Service"), you agree to be bound
                by these Terms of Use ("Terms"). If you disagree with any part
                of the terms, you may not access the Service.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                2. Service Description
              </h2>
              <p className="text-gray-600 mb-4">
                QR Menu provides digital menu creation tools for restaurants and
                food businesses. We reserve the right to modify or discontinue
                the Service at any time without notice.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                3. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You must be at least 18 years old to use this Service</li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account
                </li>
                <li>
                  You agree not to use the Service for any illegal or
                  unauthorized purpose
                </li>
                <li>
                  You must not transmit any worms, viruses, or destructive code
                </li>
              </ul>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and
                functionality are owned by QR Menu and are protected by
                international copyright, trademark, and other intellectual
                property laws.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                5. Termination
              </h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account immediately, without
                prior notice, for any reason whatsoever, including without
                limitation if you breach the Terms.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                In no event shall QR Menu be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the Service.
              </p>
            </motion.section>

            <motion.section variants={fadeIn} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                7. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will
                provide notice of significant changes through our website or via
                email. Your continued use after changes constitutes acceptance.
              </p>
            </motion.section>

            <motion.section variants={fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                8. Contact Information
              </h2>
              <p className="text-gray-600">
                For questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:info@qrMenu.com"
                  className="text-[#6220fb] font-semibold hover:underline"
                >
                  info@qrMenu.com
                </a>
                .
              </p>
            </motion.section>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeIn}
          className="bg-gray-50 p-6 text-center border-t"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Need help or have questions?
          </h3>
          <Button text="Contact us" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;
