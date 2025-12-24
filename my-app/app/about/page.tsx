import React from 'react'

const About = () => {
  return (
    <div className="pt-20 xl:pt-24 2xl:pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">Welcome to our about page.</p>
        <p className="text-lg mb-4">This is some content to make the page scrollable.</p>
        
        <div className="space-y-8 mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Section {item}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About