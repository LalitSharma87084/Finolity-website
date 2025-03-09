import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-full"></div>
          <h1 className="text-2xl font-bold">Finolity</h1>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-blue-500">Roadmap</a></li>
          <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
      </nav>
  )
}

export default Navbar