import React from 'react';

const IdeaToProduction = () => {
  return (
    <section className="bg-gray-900 text-center py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          From <span className="text-green-400">Idea</span> to <span className="text-green-400">Production</span> in Days
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!
        </p>
        <button className="bg-white text-white px-6 py-3 rounded-full font-semibold shadow-md  transition duration-300">
          Work With Us
        </button>
      </div>
    </section>
  );
};

export default IdeaToProduction;
