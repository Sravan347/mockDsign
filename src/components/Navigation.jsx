import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Tutors", href: "#tutors" },
  
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white/95 via-white/90 to-purple-50/90 backdrop-blur-lg shadow-lg border-b border-purple-100/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                EduExcel
              </span>
              <span className="text-xs text-gray-500 -mt-1">Excellence in Education</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 rounded-lg hover:bg-purple-50/80"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm shadow-inner border-t border-purple-100">
          <div className="flex flex-col space-y-1 p-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-gray-700 hover:text-purple-700 font-medium py-3 px-4 rounded-lg hover:bg-white/80 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideInFromLeft 0.3s ease-out forwards" : "none",
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
