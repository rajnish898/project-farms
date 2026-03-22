import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Exports from "./components/pages/Exports";
import Farm from "./components/pages/Farm";
import Contact from "./components/pages/Contact";
import Vegetables from "./components/pages/Vegetables";
import Footer from "./components/Footer";
import ChatPopup from "./components/ChatPopup";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("Home");

  // ✅ ADD THIS (USER STATE)
  const [user, setUser] = useState(null);

  // ✅ LOAD USER FROM LOCAL STORAGE
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "Home": return <Home />;
      case "About": return <About />;
      case "Products": return <Products />;
      case "Exports": return <Exports />;
      case "Farm": return <Farm />;
      case "Vegetables": return <Vegetables />;
      case "Contact": return <Contact />;

      // ✅ FIXED LOGIN / REGISTER
      case "Login": return <Login setPage={setPage} setUser={setUser} />;
      case "Register": return <Register setPage={setPage} setUser={setUser} />;
      case "Dashboard": return <Dashboard setPage={setPage} />;

      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen">

      {/* ✅ PASS USER HERE */}
      <Navbar setPage={setPage} user={user} setUser={setUser} />

      {renderPage()}

      <Footer />
      <ChatPopup />
    </div>
  );
}

