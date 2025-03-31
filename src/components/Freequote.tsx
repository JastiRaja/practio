import { useState } from "react";

export default function Freequote() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    companyName: "",
    employees: "",
    headquarters: "Canada",
    phone: "",
    heardAbout: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3c1f3f] text-white p-6">
      <h2 className="text-3xl font-bold mb-2">Request a free Practio <center>quote</center></h2>
      <p className="mb-6 text-center">We'll contact you to discuss your needs and send tailored pricing.

</p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className=" rounded-lg shadow-lg w-full max-w-md">
        <input type="email" name="email" placeholder="Work email address" onChange={handleChange} className="w-full p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey" required />
        <input type="text" name="fullName" placeholder="Full name" onChange={handleChange} className="w-full p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey" required />
        <div className="flex space-x-2">
          <input type="text" name="companyName" placeholder="Company name" onChange={handleChange} className="w-1/2 p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey" required />
          <input type="number" name="employees" placeholder="Estimated number of employees" onChange={handleChange} className="w-1/2 p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey" required />
        </div>
        <select name="headquarters" onChange={handleChange} className="w-full p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey">
        <option>headquarters</option>
        <option>Canada</option>
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
        </select>
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-3 mb-3 rounded bg-[#3C1F3F] text-white outline-none border border-grey" required />
        <select name="heardAbout" onChange={handleChange} className="w-full p-3 mb-4 rounded bg-[#3C1F3F] text-white outline-none border border-grey">
          <option>How did you hear about us?</option>
          <option>Social Media</option>
          <option>Friends/Colleagues</option>
          <option>Online Search</option>
          <option>Advertisement</option>
        </select>
        <button type="submit" className="w-full bg-yellow-400 text-black p-3 rounded font-bold">Get a Free Quote</button>
      </form>

      <p className="text-sm mt-4 text-center ">
        By clicking "Get a Free Quote," you agree to the use of your data in accordance with Practio's < br /><a href="#" className="underline">Privacy Notice</a>, including for marketing purposes.
      </p>

      {/* Added extra space between form and star ratings */}
      <div className="mt-12"></div>

      {/* Star Ratings Section with increased spacing */}
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 text-center">
        <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">SOFTWARE ADVICE</p>
          <p className="text-gray-400">4.9 Star Rating</p>
        </div>
        {/* <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">G2</p>
          <p className="text-gray-400">4.9 Star Rating</p>
        </div> */}
        <div className="w-40">
          <p className="text-yellow-300 text-lg">🏆</p>
          <p className="font-bold text-gray-300">PC MAGAZINE</p>
          <p className="text-gray-400">Editor's Choice</p>
        </div>
        {/* <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">CAPTERRA</p>
          <p className="text-gray-400">4.9 Star Rating</p>
        </div> */}
        <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">GETAPP</p>
          <p className="text-gray-400">4.9 Star Rating</p>
        </div>
      </div>
    </div>
  );
}
 