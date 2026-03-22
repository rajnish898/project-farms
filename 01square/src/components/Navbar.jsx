import logo from "../assets/wesitelogo.jpeg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Navbar({ setPage }) {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-green-50 to-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setPage("Home")}
          >
            <img
              src={logo}
              alt="Square Hub Logo"
              className="h-14 w-auto object-contain"
            />
            <h1 className="text-3xl font-bold text-gray-800 hidden sm:block">
              Square Hub
            </h1>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700 text-lg">
            {["Home", "About", "Products", "Exports", "Farm", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setPage(item)}
                  className="hover:text-green-600 transition duration-300"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Right Side Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setPage("Login")}
              className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
            >
              Sign In
            </button>

            <button
              onClick={() => setPage("Register")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>
          </div>

        </div>
      </nav>

      {/* Floating Social Icons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/8279299203"
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
}