import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Streamline AI",
    domain: "streamline.ai",
    description:
      "Maintained and enhanced enterprise workflow automation systems, implementing secure OAuth integrations and real-time data synchronization.",
    highlights: [
      "OAuth & REST APIs",
      "DocuSign / Ironclad Integrations",
      "AdobeSign / Microsoft OneDrive Integrations",
      "Data Sync Automation",
    ],
    url: "https://streamline.ai",
  },
  {
    name: "Trackify AI",
    domain: "trackify.ai",
    description:
      "Architected and built a full time-tracking and project management system from scratch.",
    highlights: [
      "Timer Tracking System",
      "Project Management",
      "User Management & Permissions",
      "Team Leadership",
    ],
    url: "https://trackify.ai",
  },
  {
    name: "ProTeam",
    domain: "proteam.emerson.com",
    description:
      "Built reusable Lightning Web Components (LWC) and performance-optimized enterprise UI systems.",
    highlights: [
      "Salesforce LWC",
      "Enterprise UI",
      "Reusable Components",
    ],
    url: "https://proteam.emerson.com",
  },
  {
    name: "Emerson",
    domain: "emerson.com",
    description:
      "Built reusable Lightning Web Components (LWC) and performance-optimized enterprise UI systems.",
    highlights: [
      "Salesforce LWC",
      "Enterprise UI",
      "Reusable Components",
    ],
    url: "https://emerson.com",
  },
  {
    name: "Auction Management Platform",
    domain: "billitonauctions.com",
    description:
      "Developed real-time auction platform with event rooms and live bidding using SSE.",
    highlights: [
      "Real-Time Bidding",
      "SSE",
      "Low Latency Updates",
      "Team Leadership",
    ],
    url: "https://billitonauctions.com",
  },
];

function Projects() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Systems built, scaled, and optimized across enterprise and real-time environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-2xl
                border border-gray-200
                bg-white
                p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* Subtle Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-gray-300 to-gray-400 group-hover:from-black group-hover:to-gray-700 transition-all duration-300" />

              {/* Domain Badge */}
              <div className="mb-6">
                <span className="
                  inline-block
                  text-xs
                  font-medium
                  px-3 py-1.5
                  rounded-full
                  bg-gray-100
                  text-gray-600
                  group-hover:bg-black
                  group-hover:text-white
                  transition
                ">
                  {project.domain}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">

                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1.5
                        text-xs
                        rounded-md
                        bg-gray-100
                        text-gray-700
                        transition
                        group-hover:bg-gray-200
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    pt-4
                    group-hover:text-black
                  "
                >
                  Visit Website
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;