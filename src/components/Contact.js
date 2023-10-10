import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl text-[#3A2075] font-semibold mb-4 footerText">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-[#3A207530] w-full px-4 py-2 rounded-lg placeholder:text-gray-200"
            placeholder="Name"
            required
          />
        </div>

        <div class="mb-4">
         
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-[#3A207530] w-full px-4 py-2 rounded-lg placeholder:text-gray-200"
            placeholder="Email Address"
            required
          />
        </div>

        <div class="mb-4">
        
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            class="bg-[#3A207530] text-white w-full px-4 py-2 rounded-lg placeholder:text-gray-200"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-[#3A207500] border-2 border-[#3A2075] text-[#3A2075] font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
