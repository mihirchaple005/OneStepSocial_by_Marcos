import { useState } from 'react'
import './User.css'

const Userregister = () => {
  const [selected,setSelect]=useState("")
  const[ngo_name,setNGO]=useState("")
  const[type,setType]=useState("")
  const[start_date,setDate]=useState("")
  const[address,setAddress]=useState("")
  const[ngo_email,setNEMail]=useState("")
  const[d_name,setDname]=useState("")
  const[dob,setDOB]=useState("")
  const[d_email,setDEMail]=useState("")
  const[mobile,setMobile]=useState("")
  const[aadhar,setAadhar]=useState("")
  const[pan,setPan]=useState("")
  const[gst,setGST]=useState("")
  const[addproof,setAddProof]=useState("")  
  const[aadhar_doc,setAadharDoc]=useState("")
  const[pan_doc,setPanDoc]=useState("")
  const[add_proof_doc,setProofDoc]=useState("")

// handler for submit the form in axios to get the api from django
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      // const {data}=await axios.post('/request',{values})
      // if(data){

      // }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={ngo_name}
                onChange={(e)=>setNGO(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="ngoType"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                NGO Type
              </label>
              <select
                id="proofType"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                value={type}
                onChange={(e)=>setType(e.target.value)}
                required
              >
                <option value="">-- Select Type --</option>
                <option value="Aided">Aided</option>
                <option value="Self-Financed">Self-financed</option>
                <option value="Government">Govt.Funded </option>
                <option value="Private">Private </option>

              </select>

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
                value={start_date}
                onChange={(e)=>setDate(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              
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
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={ngo_email}
                onChange={(e)=>setNEMail(e.target.value)}
                placeholder="Official Address of NGO"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Director Details Section */}
            <div className="relative mb-6">
            <hr className="border-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 absolute left-0 -top-4 bg-white px-2">
              Director Details
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
                value={d_name}
                onChange={(e)=>setDname(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={dob}
                onChange={(e)=>setDOB(e.target.value)}
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
                value={d_email}
                onChange={(e)=>setDEMail(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={aadhar}
                onChange={(e)=>setAadhar(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={pan}
                onChange={(e)=>setPan(e.target.value)}
                type="text"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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
                value={gst}
                onChange={(e)=>setGST(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                 Address Proof
              </label>
              <select
                id="proofType"
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                value={selected}
                onChange={(e)=>setSelect(e.target.value)}
              >
                <option value="">-- Select Proof --</option>
                <option value="Driving license">Driving License</option>
                <option value="Electricity bill">Electricity Bill </option>
                <option value="Certificate">Domicile Certificate </option>
              </select>
            </div>
            <div className="relative">
            {selected&&(
              <>
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                {selected} Number
              </label>
              <input
                id="address"
                type="text"
                value={addproof}
                onChange={(e)=>setAddProof(e.target.value)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
              </>)}
            </div>
            <div className="relative mb-6">
            <hr className="border-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 absolute left-0 -top-4 bg-white px-2">
              Upload Documents
            </h3>
            <br></br>
          </div>
          <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Upload Aadhar
              </label>
              <input
                id="address"
                type="file"
                value={aadhar_doc}
                onChange={(e)=>setAadharDoc(e.target.files)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Upload PAN
              </label>
              <input
                id="address"
                type="file"
                value={pan_doc}
                onChange={(e)=>setPanDoc(e.target.files)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-5 left-2 bg-e1f2fb border border-0086A3 text-gray-700 p-1 rounded-md"
              >
                Upload Proof of Address
              </label>
              <input
                id="address"
                type="file"
                value={add_proof_doc}
                onChange={(e)=>setProofDoc(e.target.files)}
                className="w-full p-2 border-2 border-0086A3 rounded-md bg-f1f9f9 focus:outline-none focus:border-blue-500"
                required
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

    </>
  )
}

export default Userregister