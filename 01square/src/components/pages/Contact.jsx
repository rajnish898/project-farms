import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Square Hub,%0AName: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

    // WhatsApp Redirect
    window.open(`https://wa.me/918279299203?text=${text}`, "_blank");

    // Success Popup
    setSuccess(true);

    // Reset
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-green-600">
            Get in Touch
          </h3>

          <a
            href="https://wa.me/8279299203"
            target="_blank"
            className="flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-lg shadow hover:bg-green-600"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>contact@squarehubexports.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <span>Rajasthan,India</span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-3 text-pink-600"
          >
            <FaInstagram /> Instagram
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">
            Send Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-2 rounded-lg"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-2 rounded-lg"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border p-2 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>

      {/* 📍 Google Map */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Our Location 📍
        </h3>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=India&output=embed"
            className="w-full h-[300px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ✅ Success Popup */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          ✅ Message Sent Successfully!
        </motion.div>
      )}
    </div>
  );
}