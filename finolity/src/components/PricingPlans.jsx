import { motion } from 'framer-motion';

export default function PricingPlans() {
  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center">Tailored Plans for Your IT Needs</h2>
      <p className="text-gray-400 text-center mt-2">
        Flexible pricing for businesses of all sizes.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
        {/* Starter Plan */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold">Starter</h3>
          <p className="text-gray-400 mt-2">
            Basic features to get your IT solutions started.
          </p>
          <p className="text-3xl font-bold mt-4">$39 <span className="text-sm">/ month</span></p>
          <button className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔️ Website Hosting</li>
            <li>✔️ Basic Security Features</li>
            <li>✔️ 24/7 Technical Support</li>
            <li>✔️ Initial Setup Guide</li>
          </ul>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold">Enterprise</h3>
          <p className="text-gray-400 mt-2">
            Full access to premium IT features and support.
          </p>
          <p className="text-3xl font-bold mt-4">$99 <span className="text-sm">/ month</span></p>
          <button className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔️ Advanced Hosting & Backup</li>
            <li>✔️ Dedicated Account Manager</li>
            <li>✔️ Tailored Development Solutions</li>
            <li>✔️ Performance Optimization</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
