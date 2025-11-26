"use client";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 pt-20 pb-32 relative overflow-hidden"
      aria-label="Hero section"
    >
      <div className="max-w-6xl z-10 relative">
        <div className="flex items-center gap-3 mb-8 reveal-text">
          <div className="w-2 h-2 bg-aitron_accent animate-pulse" aria-hidden="true"></div>
          <p className="font-mono text-aitron_accent text-sm tracking-widest text-dark_text">
            SEE EARLY. FIX FAST. SAVE DAILY
          </p>
        </div>

        <h1 className="hero-name font-sans font-bold text-[6vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.85] tracking-tighter mb-8 uppercase cursor-default transition-all duration-500 max-w-7xl text-dark_text">
          <span className="reveal-text block text-aitron_accent transition-colors">
            REDUCE OPERATIONAL COST DRAIN
          </span>

          <div className="text-rotator-container reveal-text">
            <ul className="text-rotator-list list-none p-0 m-0">
              <li className="block text-stroke-only transition-all duration-500 whitespace-nowrap">
                PER ROOM FOR HOTEL
              </li>
              <li className="block text-stroke-only transition-all duration-500 whitespace-nowrap">
                PER BED FOR HOSPITAL
              </li>
              <li className="block text-stroke-only transition-all duration-500 whitespace-nowrap">
                PER TONNE FOR CEMENT INDUSTRY
              </li>
              <li className="block text-stroke-only transition-all duration-500 whitespace-nowrap">
                PER TONNE FOR CHEMICAL INDUSTRY
              </li>
            </ul>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <p className="font-mono text-sm md:text-base text-gray-700 max-w-lg leading-relaxed reveal-text border-l-2 border-aitron_secondary pl-6">
            We help your team spot leaks early, fix issues fast, and save energy and maintenance costs—turning raw data into clear, actionable intelligence.
          </p>

          <div className="flex flex-col gap-4 reveal-text justify-center">
            <a
              href="https://calendly.com/getaitron/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 font-mono text-sm font-bold hover:text-aitron_secondary transition-colors text-dark_text"
            >
              <span className="w-8 h-[1px] bg-dark_text group-hover:bg-aitron_secondary transition-colors"></span>
              BOOK A DEMO
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-y border-light_border bg-white_bg/50 backdrop-blur-md py-4 overflow-hidden z-20">
        <div className="marquee-content animate-marquee font-mono text-xs text-gray-600 items-center">
          <span>REAL-TIME MONITORING</span>
          <span>+++</span>
          <span>PREDICTIVE MAINTENANCE</span>
          <span>+++</span>
          <span>COST OPTIMIZATION</span>
          <span>+++</span>
          <span>DIGITAL SOPs</span>
          <span>+++</span>
          <span>ENERGY OPTIMIZATION ENGINE</span>
          <span>+++</span>
          <span>QR-BASED ASSET INTELLIGENCE</span>
          <span>+++</span>
          <span>DATA CENTERS</span>
        </div>
      </div>
    </section>
  );
}
