import React from 'react';

const FundraisingForm = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-blue-200 bg-white">
              Name
            </span>
            <input
              type="text"
              className="w-full border-2 border-blue-200 rounded p-2 bg-white"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-blue-200 bg-white">
              Phone Number
            </span>
            <input
              type="tel"
              className="w-full border-2 border-blue-200 rounded p-2 bg-white"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-blue-200 bg-white">
              upload video
            </span>
            <div className="w-full h-48 border-2 border-blue-200 rounded p-2 bg-white" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-blue-200 bg-white">
              Email ID
            </span>
            <input
              type="email"
              className="w-full border-2 border-blue-200 rounded p-2 bg-white"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-blue-200 bg-white">
              Cause of fund raising
            </span>
            <input
              type="text"
              className="w-full border-2 border-blue-200 rounded p-2 bg-white"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-red-200 bg-white text-red-400">
              Fundraising Details
            </span>
            <textarea
              className="w-full h-48 border-2 border-red-200 rounded p-2 bg-white resize-none"
            />
          </div>
        </div>

        {/* Documents Section */}
        <div className="col-span-2 space-y-4">
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <span className="inline-block px-3 py-1 text-sm border-t border-l border-r rounded-t border-red-200 bg-white text-red-400">
                Documents{num}
              </span>
              <input
                type="text"
                className="w-full border-2 border-red-200 rounded p-2 bg-white"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex justify-between mt-6">
          <button className="px-6 py-2 bg-red-200 text-gray-700 rounded">
            Submit Form
          </button>
          <button className="px-6 py-2 bg-red-200 text-gray-700 rounded">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundraisingForm;