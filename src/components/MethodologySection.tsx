"use client";

export default function MethodologySection() {
  const methodologies = [
    {
      number: "01",
      title: "Quick Assessment",
      description:
        "Pinpoint inefficiencies and hidden costs in your existing electrical systems. AITRON's no-hardware diagnostic identifies areas for rapid ROI.",
      highlight: "> Rapid ROI identification",
    },
    {
      number: "02",
      title: "Pilot a Smarter Way",
      description:
        "Deploy AITRON in one building or cluster. Monitor real-time data, detect anomalies, and automate processes without changing core infrastructure.",
      highlight: "> See measurable results in days, not months",
    },
    {
      number: "03",
      title: "Scale with Confidence",
      description:
        "Expand smart operations across facilities, campuses, or regions. Designed to scale effortlessly—from 5 to 500+ panels.",
      highlight: "> Security, compliance, and customization at the core",
    },
  ];

  return (
    <section
      id="methodology"
      className="py-32 px-6 md:px-24 border-t border-light_border relative bg-light_gray_bg/80 backdrop-blur-sm"
      aria-label="Aitron Implementation Methodology"
    >
      <div className="mb-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <div className="font-mono text-aitron_accent text-xs mb-2">02 / METHODOLOGY</div>
          <h2 className="font-sans text-4xl md:text-6xl mb-4 text-dark_text">UNLOCK SMARTER INFRASTRUCTURE</h2>
        </div>
        <div className="font-mono text-xs text-gray-500 text-right hidden md:block">
          MODERNIZE WITHOUT DISRUPTION.
          <br />
          SAVE MORE. OPERATE BETTER.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {methodologies.map((item, index) => (
          <div key={index} className="service-card border p-8 md:p-12 relative overflow-visible group h-full transition-all duration-300">
            <span className="font-mono text-aitron_secondary text-4xl mb-4 block">{item.number}</span>
            <h3 className="font-sans text-3xl mb-4 text-dark_text">{item.title}</h3>
            <p className="font-mono text-xs text-gray-700 leading-relaxed border-l border-gray-400 pl-4">
              {item.description}
            </p>
            <div className="mt-6 font-mono text-xs text-gray-500 group-hover:text-dark_text transition-colors">
              {item.highlight}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
