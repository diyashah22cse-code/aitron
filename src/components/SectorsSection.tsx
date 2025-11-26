"use client";

export default function SectorsSection() {
  const sectors = [
    {
      title: "Water",
      description: "Optimizing pump and treatment systems for efficiency and leakage prevention.",
      tag: "PUMP EFFICIENCY",
      video: "/assets/videos/water.mp4",
    },
    {
      title: "Power",
      description: "Predictive maintenance for generation, transmission, and distribution assets to ensure grid stability.",
      tag: "GRID STABILITY",
      video: "/assets/videos/power.mp4",
    },
    {
      title: "Infrastructure",
      description: "Asset monitoring for roads, ports, and public utilities to maximize lifespan and uptime.",
      tag: "PUBLIC UTILITIES",
      video: "/assets/videos/infrastructure.mp4",
    },
    {
      title: "Hotels & Hospitals",
      description:
        "Critical equipment monitoring and continuous power oversight for patient safety. Energy cost management and HVAC reliability for guest comfort.",
      tags: ["HVAC RELIABILITY", "CRITICAL POWER"],
      video: "/assets/videos/hotels&hospitals.mp4",
    },
    {
      title: "Industries",
      description: "Optimizing large-scale plant operations, focusing on asset health and production throughput.",
      tag: "PLANT OPTIMIZATION",
      video: "/assets/videos/industries.mp4",
    },
    {
      title: "Buildings",
      description: "Energy efficiency and operational visibility for large corporate and commercial structures.",
      tag: "COMMERCIAL REALTY",
      video: "/assets/videos/buildings.mp4",
    },
  ];

  return (
    <section
      id="sectors"
      className="py-32 px-6 md:px-24 border-t border-light_border relative bg-light_gray_bg/80 backdrop-blur-sm"
      aria-label="Core Capabilities"
    >
      <div className="mb-20">
        <div className="font-mono text-aitron_accent text-xs mb-2">01 / SECTORS</div>
        <h2 className="font-sans text-4xl md:text-6xl mb-4 text-dark_text">WHERE AITRON DELIVERS VALUE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sectors.map((sector, index) => (
          <article key={index} className="sector-video-card border">
            <video
              className="sector-video"
              muted
              loop
              playsInline
              preload="none"
              data-src={sector.video}
            ></video>
            <div className="card-content">
              <h3 className="font-sans text-3xl mb-2">{sector.title}</h3>
              <p className="font-mono text-xs leading-relaxed mb-4">{sector.description}</p>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(sector.tags) ? (
                  sector.tags.map((t, i) => (
                    <span key={i} className="px-2 py-1 border border-light_border text-[10px] font-mono">
                      {t}
                    </span>
                  ))
                ) : (
                  <span className="px-2 py-1 border border-light_border text-[10px] font-mono">
                    {sector.tag}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
