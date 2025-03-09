import React from 'react'
import {motion} from 'framer-motion'
export default function Services() {
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hover: { scale: 1.05, boxShadow: '0 4px 15px rgba(0, 255, 255, 0.5)' }
    };
  
    return (
      <div className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-6">Efficient and Integrated IT Solutions</h2>
        <p className="text-center text-gray-400 mb-10">Simplifying operations with cutting-edge technology and expertise.</p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Cloud Computing', 'Custom Software Development', 'Cybersecurity Solutions',
            'IT Infrastructure Management', 'Data Analytics & AI', 'Consulting Services'].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-left cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="text-2xl">{['☁️', '💻', '🔒', '🖥️', '📊', '📋'][index]}</div>
              <h3 className="text-xl font-semibold mt-4">{service}</h3>
              <p className="text-gray-400 mt-2">
                {index === 0 && 'Empower your business with scalable, secure cloud solutions.'}
                {index === 1 && 'Tailored software solutions for streamlined workflows and growth.'}
                {index === 2 && 'Protect your data and systems with robust security strategies.'}
                {index === 3 && 'Efficiently manage IT infrastructure to ensure optimal performance.'}
                {index === 4 && 'Transform data into actionable insights for smarter decision-making.'}
                {index === 5 && 'Strategic advice to enhance digital transformation and innovation.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

