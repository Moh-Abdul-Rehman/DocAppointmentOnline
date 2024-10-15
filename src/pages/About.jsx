import React from "react";
import { assets } from "../assets/assets";

export const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my1- flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to CureConnect Online, Your Trusted Partner in Streamlining
            Healthcare Access. At CureConnect, we understand how important it is
            to make healthcare management stress-free, allowing you to focus on
            what truly matters—your well-being.
          </p>
          <p>
            We are committed to transforming healthcare through innovation. Our
            platform is built with the latest technologies, ensuring an
            effortless user experience. From booking your first consultation to
            managing your health journey, CureConnect Online is with you every
            step of the way, making healthcare simpler, faster, and more
            convenient.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision at CureConnect Online is to revolutionize healthcare
            access by building a platform that connects patients and healthcare
            providers effortlessly. We strive to eliminate barriers, ensuring
            that you can reach the care you need with convenience and
            reliability, precisely when it’s most crucial.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 pt-4">
        <p>
          WHY <span className="text-gray-700 font-semibold ">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-2">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Swift Care Access:</b>
          <p>
            Easily manage appointments and healthcare needs with minimal
            disruption to your schedule, designed for today's fast-paced
            lifestyle.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Trusted Medical Network:</b>
          <p>
            Connect effortlessly to a broad range of reliable healthcare
            professionals, ensuring you always receive top-quality care, no
            matter where you are.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Health Tailored for You:</b>
          <p>
            Benefit from customized health recommendations and proactive
            reminders, helping you stay one step ahead in your wellness journey.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
