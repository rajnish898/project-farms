import { useState } from "react";
import logo from "../assets/icons.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Products", "Exports", "Farm", "Contact"];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-green-100 via-white to-green-50 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-5 md:py-6">

          {/* Logo (Highlighted + Bigger) */}
          <div
            className="flex items-center gap-3 md:gap-4 cursor-pointer bg-white/70 backdrop-blur-md px-3 py-2 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            onClick={() => setPage("Home")}
          >
            <img
              src={logo}
              alt="Square Hub Logo"
              className="h-16 md:h-24 w-auto object-contain"
            />
            <h1 className="text-2xl md:text-4xl font-extrabold text-green-700 tracking-wide hidden sm:block">
              Square Hub
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700 text-lg">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className="hover:text-green-600 transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Login/Register */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setPage("Login")}
              className="px-3 py-1 md:px-4 md:py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition text-sm md:text-base"
            >
              Sign In
            </button>

            <button
              onClick={() => setPage("Register")}
              className="px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm md:text-base shadow-md"
            >
              Register
            </button>

            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none ml-1"
              >
                <svg
                  className="w-7 h-7 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white shadow-md">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setPage(item);
                  setIsOpen(false);
                }}
                className="text-gray-700 font-medium hover:text-green-600 transition text-lg text-left w-full"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Floating Social Icons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/8279299203"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
}