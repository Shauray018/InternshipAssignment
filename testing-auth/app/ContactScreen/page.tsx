"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PhoneFrame } from "../components/PhoneFrame";
import { useRouter } from "next/navigation";

const ContactScreen = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <PhoneFrame
      title="Contact Us"
      showBackButton
      onBack={() => router.back()}
    >
      <div className="p-5 mt-10">
        <h2 className="text-xl text-gray-600 mb-6">Please fill out this form.</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">
              First name <span className="text-[#8F65F8]">*</span>
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Last name <span className="text-[#8F65F8]">*</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Email <span className="text-[#8F65F8]">*</span>
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone number</label>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex items-center px-4 bg-white border-r">
                <span>US</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="flex-1 p-2 border-none outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Message <span className="text-[#8F65F8]">*</span>
            </label>
            <textarea
              placeholder="Leave us a message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-4"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1 mr-3"
            />
            <label htmlFor="privacy" className="text-gray-600">
              You agree to our{" "}
              <a href="#" className="text-gray-700 underline">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            className="w-full py-4 rounded-xl text-center text-white bg-gradient-to-r from-[#8F65F8] to-[#483185] "
          >
            Send message
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default ContactScreen;