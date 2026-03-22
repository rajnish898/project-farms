import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaUsers, FaSeedling, FaGlobe, FaBars } from "react-icons/fa";

export default function About() {
  const [active, setActive] = useState("story");
  const [open, setOpen] = useState(false);

  const menu = [
    { id: "story", label: "Our Story", icon: <FaUser /> },
    { id: "team", label: "Meet Team", icon: <FaUsers /> },
    { id: "farmers", label: "Farmers & Support", icon: <FaSeedling /> },
    { id: "impact", label: "Promise & Impact", icon: <FaGlobe /> },
  ];

  const renderContent = () => {
    switch (active) {
      case "story":
        return (
          <>
            <img
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
              className="rounded-xl mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p>
              Square Hub connects farmers directly with buyers and delivers
              export-quality fresh produce inspired by modern agriculture platforms.
            </p>
          </>
        );

      case "team":
        return (
          <>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-xl mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-bold mb-4">Meet Team</h2>
            <p>
              Our expert team manages logistics, sourcing, and export operations
              to ensure smooth delivery worldwide.
            </p>
          </>
        );

      case "farmers":
        return (
          <>
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
              className="rounded-xl mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-bold mb-4">Farmers & Support</h2>
            <p>
              We empower farmers with fair pricing, training, and modern tools to
              produce high-quality crops.
            </p>
          </>
        );

      case "impact":
        return (
          <>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="rounded-xl mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-bold mb-4">Promise & Impact</h2>
            <p>
              We ensure sustainability, freshness, and global export standards
              while supporting farming communities.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-green-600 text-white flex justify-between items-center p-4 z-50">
        <h1 className="font-bold">About</h1>
        <button onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
     <div className={`
  fixed md:relative top-0 left-0 md:h-auto h-full w-64 
  bg-gradient-to-b from-green-200 via-green-100 to-white 
  text-gray-800 p-6 space-y-4
  md:rounded-r-3xl md:shadow-xl
  transform ${open ? "translate-x-0" : "-translate-x-full"} 
  md:translate-x-0 transition-transform duration-300 z-40
`}>
        <h1 className="text-2xl font-bold mb-6 hidden md:block">About</h1>

        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              setOpen(false);
            }}
            className={`flex items-center gap-3 p-2 rounded w-full text-left transition ${
              active === item.id
                ? "bg-white text-green-600"
                : "hover:bg-green-500"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-10 mt-16 md:mt-0">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>

    </div>
  );
}