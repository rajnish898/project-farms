import { useState } from "react";
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

  const renderPage = () => {
    switch (page) {
      case "Home": return <Home />;
      case "About": return <About />;
      case "Login": return <Login />;
      case "Register": return <Register />;
      case "Login": return <Login setPage={setPage} />;
case "Register": return <Register setPage={setPage} />;
case "Dashboard": return <Dashboard setPage={setPage} />;

      case "Products": return <Products />;
      case "Exports": return <Exports />;
      case "Farm": return <Farm />;
       case "Vegetables": return <Vegetables />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
      <ChatPopup />
    </div>
  );
}