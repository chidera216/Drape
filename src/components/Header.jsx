import { ChartNoAxesGantt, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  // 1. Create a state to track which link is active
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Smoothly move the page to the section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="body bg-hero z-50 shadow-sm fixed w-full  px-4 py-4 sm:pt-4 max-w-[1440px]">
      <nav className="flex justify-between  items-center">
        <p className="font-Boldonse text-2xl sm:text-3xl">DRAPE</p>
        {/* DESKTOP NAVBAR */}
        <ul className="hidden lg:flex">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs lg:text-base
                  ${isActive ? "text-black  scale-105" : "text-gray-600"}
                `}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>

        <div
          className={`absolute top-0 right-0 w-50 h-screen lg:hidden bg-white pt-5 pr-5 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } `}
        >
          <div className="flex justify-end">
            <X
              size={28}
              color="#000"
              strokeWidth={1.25}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="pt-6">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-6 py-4 rounded-full font-medium transition-all duration-300 text-lg
                  ${isActive ? "text-black  scale-105" : "text-gray-600"}
                `}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-6">
          {!isOpen && (
            <ChartNoAxesGantt
              size={28}
              onClick={() => setIsOpen(true)}
              color="#000"
              strokeWidth={1.25}
              className="sm:size-7 lg:hidden"
            />
          )}
          <ShoppingBag className="size-6 sm:size-6" size={27} color="#000" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
