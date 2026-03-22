import { motion } from "framer-motion";

export default function ProductCard({ name, img }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-lg">
      <img src={img} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </motion.div>
  );
}