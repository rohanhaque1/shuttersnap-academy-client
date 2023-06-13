import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import logoImg from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative bg-slate-600 dark:bg-gray-300">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-slate-600 dark:text-gray-300"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <Container>
        <div className="pt-16 text-gray-300 dark:text-black">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 space-y-5">
              <Link to="/" className="flex items-center gap-2">
                <img src={logoImg} className="w-10 h-10" alt="logo" />
                <div>
                  <span className="text-xl font-bold tracking-wide text-white dark:text-black uppercase">
                    ShutterSnap Academy
                  </span>
                </div>
              </Link>
              <p>
                "Discover your passion. Develop your skills. Unleash your
                creativity. Join our photography school and embark on a
                transformative journey. Learn from industry professionals,
                master the art of visual storytelling, and capture moments that
                matter. Take the first step towards a fulfilling photography
                career. Enroll now and let your vision come to life."
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white dark:text-black font-bold tracking-wide">Contacts</p>
              <div className="flex">
                <p className="mr-1">Phone : </p>
                <p>+880 1918779602</p>
              </div>
              <div className="flex">
                <p className="mr-1">Email : </p>
                <p>shuttersnap234@gmail.com</p>
              </div>
              <div className="flex">
                <p className="mr-1">Address: </p>
                <p>1276 - Dhanmondi, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div>
              <span className="text-white dark:text-black font-bold tracking-wide">Social</span>
              <div className="flex items-center mt-1 space-x-4">
                <BsTwitter className="w-8 h-6 text-blue-500" />
                <BsInstagram className="w-8 h-6 text-pink-600" />
                <FaFacebook className="w-8 h-6" />
              </div>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full px-4 py-2 mb-3 transition duration-200 bg-white border border-pink-800 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-pink-800 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="btn inline-flex items-center justify-center gap-2 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-900 hover:bg-black border-0"
                >
                  Send <RiSendPlaneFill />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-md">
              © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="/"
                  className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
