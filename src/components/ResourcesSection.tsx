"use client";

export default function ResourcesSection() {
  const resources = [
    {
      number: "01",
      title: "Blog",
      description:
        "Insights on predictive maintenance, energy optimization, and smart infrastructure trends from industry experts.",
      tags: ["INSIGHTS", "TRENDS"],
    },
    {
      number: "02",
      title: "Documents",
      description:
        "White papers, case studies, and technical guides to help you understand infrastructure optimization solutions.",
      tags: ["WHITEPAPERS", "CASE STUDIES"],
    },
    {
      number: "03",
      title: "Partners",
      description:
        "Collaborate with our ecosystem of technology partners and solution providers dedicated to your success.",
      tags: ["ECOSYSTEM", "INTEGRATIONS"],
    },
  ];

  return (
    <section
      id="resources"
      className="py-32 bg-white_bg relative"
      aria-label="Resources"
    >
      <div className="px-6 md:px-24 mb-16">
        <div className="font-mono text-aitron_accent text-xs mb-2">
          03 / RESOURCES
        </div>
        <h2 className="font-sans text-4xl md:text-6xl mb-4 text-dark_text">
          CONNECT AND COLLABORATE
        </h2>
      </div>

      <div className="border-y border-light_border">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="project-row group border-b border-light_border p-8 md:px-24 hover:bg-light_gray_bg transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-aitron_secondary text-sm"
                  aria-hidden="true"
                >
                  {resource.number}
                </span>
                <h3 className="font-sans text-4xl group-hover:translate-x-2 transition-transform duration-300 text-dark_text">
                  {resource.title}
                </h3>
              </div>
              <p className="font-mono text-xs text-gray-700 md:pl-10 max-w-md">
                {resource.description}
              </p>
            </div>
            <div className="flex gap-2 font-mono text-[10px] text-gray-600 uppercase flex-wrap">
              {resource.tags.map((tag, i) => (
                <span key={i} className="border border-gray-300 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
