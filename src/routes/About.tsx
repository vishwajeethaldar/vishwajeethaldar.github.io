import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    title: "Foundation Phase",
    description:
      "Started with MERN Stack, building real-world applications and understanding how frontend and backend systems communicate.",
  },
  {
    title: "Enterprise & API Integrations",
    description:
      "Integrated DocuSign, Ironclad, Jira, and OAuth authentication flows — gaining deeper exposure to security and production-grade architecture.",
  },
  {
    title: "Cloud & Infrastructure Awareness",
    description:
      "Deployed applications using AWS EC2, S3, SES, and Vercel — managing scaling decisions and infrastructure performance.",
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Currently exploring Generative AI and Machine Learning — building GPT & Gemini-powered systems while deepening Python expertise.",
  },
];

export default function About(): React.ReactElement {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;

      let closest = 0;
      let minDist = Infinity;

      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(center - elCenter);

        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActive(closest);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6 animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Growth-Driven Learner <br />
            <span className="text-gray-400">Evolving Through Systems</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            My journey in software development has been shaped by curiosity,
            real-world challenges, and a constant desire to understand how
            systems truly work.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto relative">

          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-200" />

          <div className="space-y-28">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index === active;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    (refs.current[index] = el)
                  }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`
                      w-full md:w-[45%]
                      p-8 rounded-2xl border
                      transition-all duration-500
                      ${
                        isActive
                          ? "bg-black text-white shadow-2xl scale-[1.03]"
                          : "bg-white border-gray-200 opacity-70"
                      }
                    `}
                  >
                    <h3 className="text-xl font-semibold">
                      {phase.title}
                    </h3>

                    <p className="mt-4 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 transition-all duration-500
                      ${
                        isActive
                          ? "bg-black border-white scale-125 shadow-lg"
                          : "bg-gray-300 border-white"
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GITHUB SECTION */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Github Activity
          </h2>

          <div className="mt-10 flex justify-center">
            <img
              src="https://ghchart.rshah.org/vishwajeethaldar"
              alt="GitHub Contribution Chart"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>

    </main>
  );
}