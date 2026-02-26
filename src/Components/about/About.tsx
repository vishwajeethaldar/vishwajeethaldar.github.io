import profile from "##/src/assets/images/profile.png";
import { Link } from "react-router";
import { FileDown } from "lucide-react";
import redume from "##/src/assets/pdf/Resume-Vishwajeet Haldar .pdf";

function About() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">

            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
              About Me
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A Curious Learner <br />
              <span className="text-gray-500">Building Real Systems</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              I’m a growth-driven learner in software development with 3+ years
              of experience working on production-grade MERN applications,
              exploring system design, API integrations, and scalable
              architectures.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-xl">
              Currently diving deeper into Generative AI, Machine Learning,
              and cloud infrastructure — building intelligent applications
              using GPT and Gemini APIs.
            </p>

            {/* BUTTONS CENTERED + SMALLER */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-6">

              <a
                href={redume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition duration-200"
              >
                <FileDown size={16} />
                Resume
              </a>

              <Link
                to="/about"
                className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:border-black hover:text-black transition duration-200"
              >
                View More
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center vh-glow">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              
              <img
                src={profile}
                alt="Vishwajeet Haldar Profile"
                className="cursor-pointer relative rounded-3xl w-[360px] md:w-[420px] object-cover shadow-xl transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default About;