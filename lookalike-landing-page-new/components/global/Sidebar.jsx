"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { SECTION_LINKS } from "@/constants/nav-links";

const Sidebar = ({ isOpen, onClose }) => {
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
        onClose();
      }
    } else {
      router.push(`/#${id}`);
      onClose();
    }
    // if (pathname === "/") {
    //   const element = document.getElementById(id);

    //   if (element) {
    //     element.scrollIntoView({
    //       behavior: "smooth",
    //       block: "start",
    //     });
    //     onClose();
    //   }
    // } else {
    //   router.push(`/#${id}`);
    //   onClose();
    // }
  };
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-5">
          {/* <Link
            href="/"
            onClick={onClose}
            className="text-[#627199] font-medium"
          >
            Home
          </Link> */}

          {SECTION_LINKS.map((sec) => {
            return (
              <button
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="text-sm font-medium text-[#627199] text-start"
              >
                {sec.title}
              </button>
            );
          })}

          <Link
            href="/contact"
            onClick={onClose}
            className="primary-button text-center flex items-center justify-center max-w-max"
          >
            Contact Support
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
