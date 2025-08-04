import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { CONTACT_INFO } from "../assets/assets";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20" id="Contact">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form className="space-y-6 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <p className="max-w-2xl text-lg mt-20 mb-12 text-center mx-auto text-neutral-700">
        {CONTACT_INFO.text}
      </p>

      <div className="flex flex-col lg:flex-row justify-around items-start gap-8">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <RiPhoneLine className="text-3xl text-primary" />
          <div>
            <p className="text-lg font-semibold">{CONTACT_INFO.phone.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <RiMailLine className="text-3xl text-primary" />
          <div>
            <p className="text-lg font-semibold">{CONTACT_INFO.email.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <RiMapPinLine className="text-3xl text-primary" />
          <div>
            <p className="text-lg font-semibold">{CONTACT_INFO.address.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            <p className="text-neutral-600">{CONTACT_INFO.address.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
