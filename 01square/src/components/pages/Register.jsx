import { useState } from "react";

export default function Register({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Fill all fields ❌");
      return;
    }

    alert("Registered Successfully ✅");
    setPage("Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded-lg"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

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

          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => setPage("Login")}
          >
            Login
          </span>
        </p>
      </div>

    </div>
  );
}