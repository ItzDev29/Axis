"use client";

import React, { useState, useRef } from "react";
import "./D.css";
import { useEffect } from "react";
import Form from "../RegiForms/Form";
const CustomButton = ({ onClick, buttonText, form }) => (
  <button onClick={() => onClick(form)} className="button-wrapper">
    <div className="back">
      <div className="button_base b03_skewed_slide_in rounded-md">
        <div>{buttonText}</div>
        <div></div>
        <div>{buttonText}</div>
      </div>
    </div>
  </button>
);

const GoogleDocButton = ({ googleDocLink }) => (
  <a href={googleDocLink} target="_blank" rel="noopener noreferrer">
    <button className="button-wrapper pr-12">
      <div className="back">
        <div className="button_base b03_skewed_slide_in rounded-md">
          <div>Event Brochure</div>
          <div></div>
          <div>Event Brochure</div>
        </div>
      </div>
    </button>
  </a>
);

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const openForm = (form) => {
    setSelectedForm(form);
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedForm(null);
    document.body.style.overflow = "auto";
  };

  const renderForm = () => {
    return selectedForm;
  };

  const [events, setEvents] = useState({});

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/getEvents", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "event-type": 1,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const eventsData = await response.json();
        setEvents(eventsData);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);
  console.log(events.events);
  const Events = events && events.events;
  console.log(Events);

  const [selectedHeading, setSelectedHeading] = useState("Management & Analytics");
  const headings = [
    "Management & Analytics",
    "Igniting Minds",
    "Software & Electronics",
    "Construction & Design",
    "School Events",
    "Gaming",
    "Robotics & Automation",
  ];

  const Management = Events?.filter((event) => {
    const category = event.category === "MA";
    return category;
  });

  const IM =
    Events &&
    Events.filter((event) => {
      const category = event.category === "IM";
      return category;
    });

  const SE =
    Events &&
    Events.filter((event) => {
      const category = event.category === "SE";
      return category;
    });

  const CD =
    Events &&
    Events.filter((event) => {
      const category = event.category === "CD";
      return category;
    });

  const School =
    Events &&
    Events.filter((event) => {
      const category = event.category === "School";
      return category;
    });

  const Gaming =
    Events &&
    Events.filter((event) => {
      const category = event.category === "Gaming";
      return category;
    });

  const AR =
    Events &&
    Events.filter((event) => {
      const category = event.category === "AR";
      return category;
    });

  const eventsByHeadings = {
    "Management & Analytics": Management,
    "Igniting Minds": IM,
    "Software & Electronics": SE,
    "Construction & Design": CD,
    "School Events": School,
    "Gaming": Gaming,
    "Robotics & Automation": AR,
  };

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <>
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
              console.log(selectedForm);
              {renderForm()}
            </div>
          </div>
        )}
      </div>
      <div className="text-center text-black font-medium pt-3 pb-3">
        <h1 className="mt-4 mb-3 text-4xl">Events</h1>
        <section className="bg-white">
          <div className="container px-6 py-6 mx-auto relative">
            <button
              className="text-lg text-gray-600 dark:text-gray-400 focus:outline-none absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={scrollLeft}
            >
              <svg
                className="w-10 h-10 pr-4 pt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="text-lg text-gray-600 dark:text-gray-400 focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={scrollRight}
            >
              <svg
                className="w-10 h-10 pl-4 pt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="py-4 mt-4 overflow-hidden md:justify-center dark:border-gray-700">
              <div className="flex items-center justify-center relative">
                <div
                  className="overflow-hidden"
                  style={{ scrollbarWidth: "none" }}
                  ref={sliderRef}
                >
                  <div className="flex space-x-4">
                    {headings.map((heading, index) => (
                      <button
                        className={`relative ${
                          selectedHeading === heading
                            ? "border-b-2 text-lg border-blue-500"
                            : ""
                        }`}
                        key={index}
                        onClick={() => handleHeadingClick(heading)}
                      >
                        {heading}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className="mt-10 mb-6">{selectedHeading}</h2>
        <div className="grid mt-24 mb-10 p-2 ml-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {eventsByHeadings[selectedHeading] &&
            eventsByHeadings[selectedHeading].map((card, index) => (
              <div key={index} className="">
                <div className="yoda pl-6">
                  <img
                    className="front-image"
                    src={card.img2}
                    alt="Front Image"
                  />
                  <img
                    className="bg-image"
                    src={card.img3}
                    alt="Background Image"
                  />
                </div>
                <p className="text-black text-center font-semibold text-3xl mt-5 mb-2">
                  {card.evename}
                </p>
                <p className="text-black text-center text-sm mt-5 mb-4">
                  {card.desp}
                </p>
                <div className="flex flex-row justify-between">
                  <CustomButton
                    onClick={openForm}
                    buttonText="Register"
                    form={
                      <Form
                        eventname={card.evename}
                        participantcount={card.participantcount}
                        category={card.category}
                        id={card._id}
                      />
                    }
                  />
                  <GoogleDocButton googleDocLink={card.pdf} />
                </div>
              </div>
            ))}
        </div>
       
      </div>
      <footer class="bg-gray-700">
    <div class="container flex flex-col items-center justify-between px-6 py-4 mx-auto lg:flex-row">
        <a href="#">
            <img className="w-33 h-28" src="/images/Axis.png" alt=""/>
        </a>

        <div class="flex flex-wrap items-center justify-center gap-3 mt-4 lg:gap-6 lg:mt-0">
            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Overview
            </a>

            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Features
            </a>

            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Pricing
            </a>
          
        </div>

        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2024. All Rights Reserved.</p>
    </div>
</footer>
    </>
  );
};

export default Home;
