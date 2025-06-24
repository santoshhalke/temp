'use client';
import Image from 'next/image';
import { Mail, MapPin, Home } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-start gap-10 mt-20">
      {/* Left Side - Form */}
      <div className="md:w-1/2 w-full">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Home/> Get in Touch
        </p>
        <h2 className="text-5xl font-light text-gray-800 mb-6 mt-3">Contact us</h2>
        <p className="text-gray-600 mb-10">
          We're here to help you with all your real estate needs. Whether you're looking to buy, sell, or invest, our team is ready to assist you.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name='first'
            placeholder="First name*"
            className="border-b border-black p-2 outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border-b border-black p-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email address*"
            className="border-b border-black p-2 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="border-b border-black p-2 outline-none"
          />
          <textarea
            placeholder="Write your message here *"
            rows={4}
            className="border-b border-black p-2 outline-none md:col-span-2"
          />
          <div className='flex justify-end'>
            <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-6 rounded-3xl w-fit hover:bg-white hover:text-black hover:border hover:border-black"
            >
                Submit Now
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Image and Contact Info */}
      <div className="md:w-1/2 w-full flex flex-col gap-6 items-start">
        <Image
          src="/images/contact/contact-us.jpg" // Replace with your actual image path
          alt="Team Meeting"
          width={600}
          height={400}
          className="object-cover w-full"
        />
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-900 mt-1" />
            <div>
              <p className="font-semibold text-black">Office Address</p>
              <p className="text-gray-600">
                DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 04
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-blue-900 mt-1" />
            <div>
              <p className="font-semibold text-black">Write email</p>
              <p className="text-gray-600">enquiry@starkencw.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
