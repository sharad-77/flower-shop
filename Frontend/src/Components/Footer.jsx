import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 h-24 flex items-center justify-between border-t px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Flower Shop Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-gray-600 ml-4">
            &copy; {new Date().getFullYear()} Flower Shop
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="index.html" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="shop.html" className="text-gray-600 hover:text-gray-800">Shop</a>
          <a href="reviwe.html" className="text-gray-600 hover:text-gray-800">Reviwe</a>
          <a href="signin.html" className="text-gray-600 hover:text-gray-800">Sign In</a>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-600">
            About us: We are a leading flower shop with a wide variety of flowers.
          </p>
        </div>
      </div>
    </footer>
  )
}

