import React from 'react'

function LoaderComponent({count=3}) {
  return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow animate-pulse"
        >
          {/* Title */}
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>

          {/* Content */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoaderComponent