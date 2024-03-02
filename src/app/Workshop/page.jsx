"use client";
import React, { useState } from "react";
import "./W.css";
import RegistrationForm from "../Regi";

const PostCard = ({ title, date, imageSrc, description }) => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on background
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto"; // Enable scrolling on background
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg relative">
      {showForm && (
        <div className="fixed top-0 left-0 pt-20 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-95 z-50 overflow-y-auto">
          <div className="max-w-md w-full bg-transparent p-8 rounded-md shadow-lg">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-white hover:text-gray-800"
            >
              <svg
                className="w-8 h-8 mr-6 mt-8 backdrop:blur-md"
                fill="black"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
      <img src={imageSrc} alt="" className="object-cover w-full h-64" />
      <div className="p-5 border-2 border-t-0">
        <p className="mb-2 text-center text-lg font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {title}
          </a>
          <span className="text-gray-600">— {date}</span>
        </p>
        <p className="mb-1 text-gray-700 text-center">{description}</p>
        <div className="flex flex-row justify-between">
          <button onClick={openForm} className="button-wrapper">
            <div class="back">
              <div class="button_base b03_skewed_slide_in rounded-md">
                <div>Register Now!</div>
                <div></div>
                <div>Register Now!</div>
              </div>
            </div>
          </button>
          <button onClick={openForm} className="button-wrapper pr-12">
            <div class="back">
              <div class="button_base b03_skewed_slide_in rounded-md">
                <div>Know More..</div>
                <div></div>
                <div>Know More..</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        {/* Repeat for other cards */}
      </div>
    </div>
  );
}
