import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Farm() {
  const images = [
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
  ];

  const [index, setIndex] = useState(0);

  // Auto change image
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Farm & Quality
      </h2>

      {/* Image Slider */}
      <div className="max-w-4xl mx-auto mb-10">
        <motion.img
          key={index}
          src={images[index]}
          alt="farm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-lg">
          At Square Hub, we ensure pesticide-free, fresh, and high-quality
          farm produce using modern and sustainable farming techniques.
        </p>
      </div>

      {/* Video */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Watch Our Farming Process 🎥
        </h3>

        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7kVeCqQCxlk"
            title="Farm Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}