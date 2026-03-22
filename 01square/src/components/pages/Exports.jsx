import { FaGlobeAsia } from "react-icons/fa";

export default function Exports() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Exports & Packaging
      </h2>

      {/* Two Section Layout */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Card 1 - Packaging */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Exports & Packaging
          </h3>

          <p className="mb-4">
            We ensure premium packaging standards to maintain freshness and quality during transport.
          </p>

          <ul className="space-y-2">
            <li>✔ High-quality packaging</li>
            <li>✔ Temperature-controlled logistics</li>
            <li>✔ Safe transport</li>
            <li>✔ Bulk export support</li>
          </ul>
        </div>

        {/* Card 2 - Export Network */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
            <FaGlobeAsia /> Our Export Network
          </h3>

          <p className="mb-4">
            We export to multiple countries and regions.
          </p>

          <div className="space-y-2 text-lg">
            <p>🇳🇵 Nepal</p>
            <p>🇧🇩 Bangladesh</p>
            <p>🇦🇪 UAE (Dubai)</p>
            <p>🇸🇦 Saudi Arabia</p>
            <p>🇮🇳 India (Domestic)</p>
          </div>
        </div>
      </div>

      {/* 🌊 Sea Route Map Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Our Export Routes 🌊🚢
        </h3>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="indian ocean export route"
            className="w-full h-[350px] object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">

            <h4 className="text-2xl font-bold mb-3">
              Global Sea Export Routes from India
            </h4>

            <p className="max-w-xl text-sm md:text-base mb-4">
              Square Hub exports fresh agricultural products via major sea routes
              across the Indian Ocean ensuring fast and reliable delivery worldwide.
            </p>

            {/* Routes */}
            <div className="space-y-1 text-lg">
              <p>🚢 India → UAE (Dubai)</p>
              <p>🚢 India → Saudi Arabia</p>
              <p>🚢 India → Bangladesh</p>
              <p>🚢 India → Nepal</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

{/* 🌍 Advanced Export Map Section */}
<div className="mt-12">
  <h3 className="text-2xl font-semibold text-center mb-6">
    Our Export Routes 🌊🚢
  </h3>

  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black">

    {/* World Map Background */}
    <img
      src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
      alt="world map"
      className="w-full h-[400px] object-cover opacity-70"
    />

    {/* SVG Routes */}
    <svg className="absolute inset-0 w-full h-full">
      
      {/* Route 1 */}
      <path
        d="M200 250 Q 400 100 700 200"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="6,6"
      />

      {/* Route 2 */}
      <path
        d="M200 250 Q 350 300 600 280"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="6,6"
      />

      {/* Route 3 */}
      <path
        d="M200 250 Q 300 150 500 120"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="6,6"
      />
    </svg>

    {/* 🚢 Animated Ship */}
    <div className="absolute top-[55%] left-[20%] animate-bounce text-3xl">
      🚢
    </div>

    {/* Labels */}
    <div className="absolute text-white text-sm top-[60%] left-[15%]">
      🇮🇳 India
    </div>

    <div className="absolute text-white text-sm top-[30%] left-[70%]">
      🇦🇪 UAE
    </div>

    <div className="absolute text-white text-sm top-[65%] left-[65%]">
      🇧🇩 Bangladesh
    </div>

    <div className="absolute text-white text-sm top-[20%] left-[55%]">
      🇸🇦 Saudi Arabia
    </div>

    {/* Overlay Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <h4 className="text-2xl font-bold mb-2">
        Global Export Network
      </h4>
      <p className="max-w-xl text-sm md:text-base">
        We deliver fresh produce across international markets through
        reliable sea and logistics routes.
      </p>
    </div>

  </div>
</div>

