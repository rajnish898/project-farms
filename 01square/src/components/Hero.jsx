import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    title: "Fresh Vegetables",
  },
  {
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    title: "Export Quality Produce",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[85vh] bg-cover bg-center flex items-center justify-center transition-all duration-700"
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/50 text-white p-8 rounded-2xl text-center max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {slides[index].title}
        </h1>

        <p className="text-lg mb-4">
          Premium Quality Fresh Vegetables Exporter from India
        </p>

        <div className="text-left space-y-2 mt-4">
          <p>✔ 100% Fresh & Hygienic</p>
          <p>✔ Global Export Quality</p>
          <p>✔ Bulk Supply Available</p>
        </div>
      </motion.div>
    </div>
  );
}