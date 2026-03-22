import { motion } from "framer-motion";

export default function Vegetables() {
  return (
    <div>
      {/* Banner */}
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black/50 text-white p-8 rounded-2xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Vegetables
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
    </div>
  );
}