// import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container flex justify-between items-center py-5">
        {/* logo */}
        <div className="text-2xl font-semibold">
          <a href="#">
            Abstract |{" "}
            <span className="hover:border-b-2 border-black">Help Center</span>
          </a>
        </div>
        {/* menu */}
        <div className="hidden md:flex gap-6 text-2xl">
          <button className="border border-white bg-zinc-900 rounded-lg py-2 px-6">
            Submit a request
          </button>
          <button className="bg-primary py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
