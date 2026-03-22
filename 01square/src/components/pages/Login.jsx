import { useState } from "react";

export default function Login({ setPage }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields ❌");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setPage("Dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-lg"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Login
          </button>
        </form>

        {/* Success Popup */}
        {success && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
            ✅ Login Successful!
          </div>
        )}

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => setPage("Register")}
          >
            Register
          </span>
        </p>
      </div>

    </div>
  );
}