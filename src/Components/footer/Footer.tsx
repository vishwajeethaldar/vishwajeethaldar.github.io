import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-wide">
            Vishwajeet Haldar
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Growth-driven learner building scalable systems, 
            integrating enterprise platforms, and exploring AI-powered solutions.
          </p>
          <p className="text-xs text-gray-400 pt-4">
            © {new Date().getFullYear()} Vishwajeet Haldar. All rights reserved.
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex flex-col gap-3 text-sm font-medium">
          <span className="text-gray-400 uppercase text-xs tracking-wider mb-2">
            Navigation
          </span>

          <Link to="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>

          <Link to="/blogs" className="text-gray-600 hover:text-black transition">
            Blog
          </Link>

          <Link to="/about" className="text-gray-600 hover:text-black transition">
            About
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 items-start md:items-end">

          <span className="text-gray-400 uppercase text-xs tracking-wider">
            Connect
          </span>

          <div className="flex gap-4">
            <a
              href="https://github.com/vishwajethaldar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/vishwajethaldar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:vishwajeet.haldar@outlook.com"
              className="text-gray-600 hover:text-black transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <a
            href="mailto:vishwajeet.haldar@outlook.com"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            vishwajeet.haldar@outlook.com
          </a>

        </div>

      </div>

      {/* Bottom Subtle Line */}
      <div className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        Designed & Built with React, TypeScript & Tailwind CSS
      </div>
    </footer>
  );
}