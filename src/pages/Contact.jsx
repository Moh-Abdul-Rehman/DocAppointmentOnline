import React from "react";
import { assets } from "../assets/assets";

export const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 fonr-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">
            Get in Touch CureConnect Online
          </p>
          <p className="text-gray-500">
            Plot 54709, Johar Town
            <br />
            Suite 350, Lahore, Pakistan
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: support@cureconnectonline.com
          </p>
          <p className="font-semibold text-lg text-gray-600">Join Our Team:</p>
          <p className="text-gray-500">
            Explore exciting career opportunities and become part of a growing
            network of healthcare professionals.
          </p>
          <button className="border border-balck px-8 py-4 text-sm hover:bg-black hover:text-white tranisition-all duration-500">
            Discover Careers
          </button>
        </div>
      </div>
    </div>
  );
};
