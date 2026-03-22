import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message) return;

    const url = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full text-2xl shadow-lg z-50 hover:scale-110 transition"
      >
        <FaComments />
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">
          
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Square Hub Support</h3>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">
              👋 Hello! How can we help you today?
            </p>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your inquiry..."
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>

          {/* Footer */}
          <div className="p-3 border-t">
            <button
              onClick={sendMessage}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      )}
    </>
  );
}