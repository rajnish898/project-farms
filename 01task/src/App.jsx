// App.jsx
import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center  from-blue-100 to-gray-100 px-4 not-[]:min-h-screen bg-gradient-to-r from-blue-100 via-white to-gray-100">

      {/* Badge */}
      <div className="mb-4 px-4 py-1 border border-green-400 text-green-600 rounded-full text-sm">
        ✔ Trusted by 500+ Global Enterprises
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 leading-tight">
        Innovating Your <br />
        <span className="text-blue-600">Digital Future</span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-xl">
        We provide cutting-edge IT solutions, cloud infrastructure,
        and custom software designed to scale your business.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Button text="Get Started Now →" variant="primary" />
        <Button text="View Our Services" variant="secondary" />
      </div>

    </div>
  );
}

export default App;