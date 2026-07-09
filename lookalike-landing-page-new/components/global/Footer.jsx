"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  //   const navigate = useNavigate();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const NAVBAR_HEIGHT = 120;

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto padding-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">
                LookAlike Match
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4 lg:w-[330px]">
              Helping people connect through compatibility and facial
              similarity. Discover meaningful connections and real lookalikes
              every day.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:pl-10">
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/end-user-license-agreement"
                  className="hover:text-white transition-colors"
                >
                  User License Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/child-safety-standards"
                  className="hover:text-white transition-colors"
                >
                  Child Safety Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LookAlike Match App. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed by{" "}
            <Link
              href={"https://launchboxglobal.com/"}
              target="_blank"
              aria-label="LaunchBox Global website link"
              className="underline"
            >
              LaunchBox Global
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
