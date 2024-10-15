import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------ Left Section -------   */}
        <div>
          <img className="mb-5 w-40" src={assets.logolatestlatest} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Bridging the gap between you and trusted healthcare professionals,
            ensuring fast and easy appointments. Our platform simplifies the
            process of finding and booking appointments with top-rated doctors.
            Whether you're looking for general practitioners or specialists, we
            ensure you get the best care, when you need it.
          </p>
        </div>

        {/* ------ Center Section -------   */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ------ Right Section -------   */}
        <div>
          <p>Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+92 42 1234 5678</li>
            <li>mohabdulrehmanmustafa@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------- Copyright Text ---------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ CureConnectOnline2024 - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
