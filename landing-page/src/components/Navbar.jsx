import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  MessageCircle,
  Shield,
  Sliders,
  UserPlus,
  Star,
  Menu,
  X,
  Apple,
  Play,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to={"/"}
          className="flex items-center gap-2 cursor-pointer"
          // onClick={() => scrollTo("home")}
        >
          <img src="/lookalike-logo.png" alt="" width={100} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to={"/"}
            // onClick={() => scrollTo("home")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => scrollTo("features")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            How it Works
          </button>
          <Link
            to={"/contact"}
            // onClick={() => scrollTo("contact")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Contact Support
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("download")}
            className="gradient-bg text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-200"
          >
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <button
                onClick={() => scrollTo("home")}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md text-left"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md text-left"
              >
                Contact Support
              </button>
              <button
                onClick={() => scrollTo("download")}
                className="mt-4 w-full gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
              >
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
