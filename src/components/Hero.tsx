import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="bg-secondary">
      <div className="container py-24 flex flex-col items-center justify-center">
        <h1 className="text-7xl font-semibold text-center">How can we help?</h1>
        <div className="relative w-1/2 flex flex-col items-center justify-center mt-10 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-full text-xl p-4 rounded-lg border-2 border-black placeholder:text-xl"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl pr-4">
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
