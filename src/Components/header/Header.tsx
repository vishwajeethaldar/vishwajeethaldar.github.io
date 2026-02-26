import logo from "##/src/assets/logo-t.svg";
import { Link, NavLink, } from "react-router";
import ContactModal from "##/src/components/contact/Contact.tsx";
import { useState } from "react";
import { LucideContact as Mail } from "lucide-react";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          aria-label="Vishwajeet Haldar Home"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Vishwajeet Haldar Logo"
            className="h-10 w-auto object-contain"
            width="40"
            height="40"
            loading="eager"
          />
          <span className="text-lg font-semibold tracking-wide">
            Vishwajeet Haldar
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              }`
            }
          >
            Blog
          </NavLink> */}

          {/* <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-90 transition"
          >
            Contact
          </Link> */}
          
          {/* <button
              onClick={() => setOpen(true)}
              className="
                relative
                group
                w-10 h-10
                flex items-center justify-center
                rounded-full
                hover:bg-black
                hover:text-white
                transition
                cursor-pointer
              "
            >
              <Mail size={18} />
              <span className="
                absolute
                -bottom-8
                whitespace-nowrap
                text-xs
                bg-black
                text-white
                px-2 py-1
                rounded-md
                opacity-0
                group-hover:opacity-100
                transition
              ">
                Contact Me
              </span>
            </button> */}
        </nav>
      </div>
      
      {open && <ContactModal open={open} onClose={() => setOpen(false)} />}
    </header>
  );
}