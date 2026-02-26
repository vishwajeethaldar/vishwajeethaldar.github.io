import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2023 - Present",
    role: "Software Developer",
    company: "WLC Technology",
    description:
      "Building scalable MERN applications, integrating enterprise APIs, designing secure authentication systems, and collaborating across cross-functional teams to deliver production-grade software.",
  },
  {
    period: "2021 - 2022",
    role: "Technical Staff",
    company: "Shaheed Mahendra Karma University",
    description:
      "Managed website content and maintained university IT infrastructure including system and network reliability.",
  },
  {
    period: "2018 - 2021",
    role: "Mobilizer",
    company: "Aisect PMKK",
    description:
      "Mobilized candidates for government skill programs and handled hardware, software, and network troubleshooting.",
  },
  {
    period: "2013 - 2015",
    role: "Customer Support Officer",
    company: "Mphasis",
    description:
      "Developed strong communication and problem-solving skills in a high-paced customer support environment.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
  const handleScroll = () => {
    const viewportCenter = window.innerHeight / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    refs.current.forEach((el, index) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;

      const distance = Math.abs(viewportCenter - elementCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight">
            Career Evolution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From foundational roles to engineering scalable systems —
            each step shaped my technical depth and perspective.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
  
          {/* Vertical Line */}
          <div className="
            absolute 
            left-4 
            md:left-1/2 
            md:-translate-x-1/2 
            w-[2px] 
            h-full 
            bg-gray-200
          " />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    (refs.current[index] = el);
                  }}
                  className={`
                    relative flex items-start
                    md:items-center
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                  `}
                >

                  {/* Card */}
                  <div
                    className={`
                      ml-12 md:ml-0
                      w-full md:w-[45%]
                      p-8 rounded-2xl border
                      transition-all duration-500
                      ${
                        isActive
                          ? "bg-black text-white border-black shadow-2xl scale-[1.02]"
                          : "bg-white border-gray-200 shadow-sm opacity-70"
                      }
                    `}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p
                      className={`mt-1 font-medium ${
                        isActive
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      {exp.company}
                    </p>

                    <p
                      className={`mt-4 leading-relaxed ${
                        isActive
                          ? "text-gray-200"
                          : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className={`
                      absolute
                      left-4
                      md:left-1/2
                      md:-translate-x-1/2
                      w-5 h-5 rounded-full border-4 transition-all duration-500
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
      </div>
    </section>
  );
}