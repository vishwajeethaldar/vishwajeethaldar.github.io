export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Engineering",
      skills: [
        "React", "Next.js", "JavaScript", "TypeScript",
        "HTML5", "CSS3", "MUI", "Redux", "Redux Toolkit",
        "Tailwind CSS", "Chakra UI"
      ]
    },
    {
      title: "Backend & Data",
      skills: [
        "Node.js", "Express.js",
        "MongoDB", "MySQL", "Redis"
      ]
    },
    {
      title: "API & Integrations",
      skills: [
        "REST APIs", "Third-Party API Integrations",
        "JWT", "OAuth", "Firebase",
        "AdobeSign", "DocuSign", "Ironclad",
        "SharePoint", "OneDrive", "Google Drive",
        "Jira", "Google Forms"
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS", "S3", "SES", "PM2", "nginx",
        "Cron Jobs", "Passport",
        "Git", "GitHub", "NPM",
        "Postman", "Thunder Client", "VSCode"
      ]
    },
    {
      title: "Additional Experience",
      skills: [
        "WordPress",
        "Salesforce UI"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Over the years, I’ve developed hands-on experience across the
            frontend, backend, cloud infrastructure, and enterprise integrations —
            constantly expanding my understanding of scalable systems.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                transition-all duration-300
                cursor-pointer
                "
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1.5
                      text-sm
                      rounded-md
                      bg-gray-100
                      text-gray-700
                      hover:bg-black
                      hover:text-white
                      transition duration-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}