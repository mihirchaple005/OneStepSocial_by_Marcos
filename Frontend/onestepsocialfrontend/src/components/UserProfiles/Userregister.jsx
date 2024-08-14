import Layout from "../Layout/Layout"
import './User.css'

const Userregister = () => {
  return (
    <Layout>
        <div className="container mx-auto p-6">
        <div className="max-w-lg mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">NGO Registration</h2>
          
          {/* NGO Details Section */}
          <div className="relative mb-6">
            <hr className="border-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 absolute left-0 -top-4 bg-white px-2">
              NGO Details
            </h3>
          </div>
         <br></br>
          <form className="space-y-6">
            <div className="relative">
              <label
                htmlFor="ngoName"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                NGO Name
              </label>
              <input
                id="ngoName"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="ngoType"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                NGO Type
              </label>
              <input
                id="ngoType"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="startingDate"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Starting Date
              </label>
              <input
                id="startingDate"
                type="date"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                NGO Address
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Official Address of NGO"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Guardian Details Section */}
            <div className="relative mb-6">
            <hr className="border-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 absolute left-0 -top-4 bg-white px-2">
              Guardian Details
            </h3>
            <br></br>
          </div>
            <div className="flex space-x-4">
            <div className="relative flex-1">
              <label
                htmlFor="directorName"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Name
              </label>
              <input
                id="directorName"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative flex-1">
              <label
                htmlFor="dob"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            </div>
            <div className="relative">
              <label
                htmlFor="guardianEmail"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Email Address
              </label>
              <input
                id="guardianEmail"
                type="email"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Mobile Number
              </label>
              <input
                id="number"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative mb-6">
            <hr className="border-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 absolute left-0 -top-4 bg-white px-2">
              Legal Details
            </h3>
            <br></br>
          </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Aadhaar Number
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                PAN Number
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                GST/HSN Number
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                 Number
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-0086A3 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>

    </Layout>
  )
}

export default Userregister