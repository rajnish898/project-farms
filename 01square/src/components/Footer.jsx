export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Square Hub</h2>
          <p>
            We are a trusted exporter of fresh vegetables and agricultural
            products from India, delivering premium quality goods worldwide.
          </p>
        </div>
         {/* Terms & Conditions */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Terms & Conditions</h2>
          <ul className="space-y-2 text-sm">
            <li>• All products are subject to availability and seasonal supply.</li>
            <li>• Prices may vary based on market conditions and quantity.</li>
            <li>• Advance payment required for bulk export orders.</li>
            <li>• Delivery timelines depend on logistics and location.</li>
          </ul>
        </div>


        {/* Reliability */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Reliability</h2>
          <ul className="space-y-2 text-sm">
            <li>✔ 100% Fresh & Hygienic Products</li>
            <li>✔ Strict Quality Control & Packaging</li>
            <li>✔ Timely Delivery Across India & Export Markets</li>
            <li>✔ Trusted by Bulk Buyers & Traders</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Square Hub. All rights reserved.
      </div>
    </footer>
  );
}
