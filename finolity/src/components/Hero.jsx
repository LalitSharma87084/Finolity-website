import React from 'react'

function Hero() {
  return (
    <section className="text-center px-10 md:text-left md:flex md:items-center md:justify-between max-w-6xl mx-auto pt-25">
        <div className="md:w-2/3 mx-auto">
          <div className="flex justify-center md:justify-start mb-4">
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">New</span>
            <p className="ml-2 text-gray-300">We've made our pricing public →</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Business With Our <span className="italic">SaaS Solution.</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Streamline your operations, boost productivity, and enhance customer satisfaction with our cutting-edge SaaS platform. Experience seamless integration and unparalleled support.
          </p>
          <div className="mt-6  py-6 flex flex-col md:flex-row md:space-x-4">
            <button className="bg-white text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-300">Get Started</button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg text-lg text-white hover:border-white hover:text-white">Request a Demo →</button>
          </div>
        </div>
      </section>
  )
}

export default Hero