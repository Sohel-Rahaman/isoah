"use client"

import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={buttonRef} className="fixed bottom-10 right-10 flex flex-col items-end space-y-2 z-50">
      {/* Contact Options */}
      {isExpanded && (
        <>
          {/* Phone Option */}
          <div className="relative group">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center w-12 h-12 bg-green-500 text-[#ddd] rounded-full shadow-lg hover:bg-green-600 transition duration-200"
              aria-label="Call Us"
            >
              <FaPhoneAlt size={20} />
            </a>
            {/* Tooltip */}
            <span className="absolute w-14 right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#ddd] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              Call Us
            </span>
          </div>

          {/* WhatsApp Option */}
          <div className="relative group">
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-green-400 text-[#ddd] rounded-full shadow-lg hover:bg-green-500 transition duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#ddd] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              WhatsApp
            </span>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`flex items-center text-[#ddd] justify-center w-12 h-12 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 transition-all duration-700 transform ${
          isExpanded ? "rotate-180" : "rotate-0"
        }`}
        aria-label={isExpanded ? "Hide" : "Contact us"}
        title={isExpanded ? "Hide" : "Contact us"}
      >
        <span
          className={`transition-transform duration-700 transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          {isExpanded ? "✖" : "💬"}
        </span>
      </button>
    </div>
  );
};

export default ContactUs;
