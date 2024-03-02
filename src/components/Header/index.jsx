"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

export default function index() {
  // const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
        <div className=" mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a href="/">
                <img
                  loading="lazy"
                  src="/images/Axis.png"
                  width="175px"
                  height="45px"
                  alt="Axis Logo"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex  font-bold items-center gap-10 text-base">
                  <Magnetic>
                    <li>
                      <a
                        className="text-gray-800/75 transition hover:text-black"
                        href="/Events"
                      >
                        {" "}
                        Events{" "}
                      </a>
                    </li>
                  </Magnetic>
                  <Magnetic>
                    <li>
                      <a
                        className="text-gray-800/75 transition hover:text-black"
                        href="https://ca.axisvnit.in/"
                      >
                        {" "}
                        CA Portal{" "}
                      </a>
                    </li>
                  </Magnetic>

                  <Magnetic>
                    <li>
                      <a
                        className="text-gray-800/75 transition hover:text-black"
                        href="/"
                      >
                        {" "}
                        Gallery{" "}
                      </a>
                    </li>
                  </Magnetic>

                  <Magnetic>
                    <li>
                      <a
                        className="text-gray-800/75 transition hover:text-black"
                        href="/Workshop"
                      >
                        {" "}
                        Workshops{" "}
                      </a>
                    </li>
                  </Magnetic>
                  <Magnetic>
                    <li>
                      <a
                        className="text-gray-800/75 transition hover:text-black"
                        href="/Team"
                      >
                        {" "}
                        Our Team{" "}
                      </a>
                    </li>
                  </Magnetic>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <Magnetic>
                    <a
                      className="group relative border-4 rounded-full inline-flex items-center overflow-hidden bg-white px-8 py-3 text-black focus:outline-none focus:ring active:bg-indigo-500"
                      href="/download"
                    >
                      <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                          className="h-5 w-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>

                      <span className="text-sm font-semibold transition-all group-hover:me-4">
                        {" "}
                        Login{" "}
                      </span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* </header> */}
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
