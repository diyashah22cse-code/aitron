"use client";

export default function Navigation() {
  return (
    <nav
      className="fixed w-full z-40 top-0 left-0 p-6 flex justify-between items-center bg-white_bg/80 backdrop-blur-sm shadow-sm"
      role="navigation"
    >
      <div className="font-mono text-sm tracking-tighter font-bold text-dark_text">
        <img
          src="https://aitron-images.ams3.cdn.digitaloceanspaces.com/aitron-final-logo.svg"
          alt="Aitron Logo"
          className="h-9 inline-block align-middle"
          style={{ width: "auto", maxWidth: "100px" }}
        />
      </div>
      <div className="hidden md:flex gap-8 font-mono text-xs font-bold text-dark_text">
        <a href="#sectors" className="hover:text-aitron_accent transition-colors">
          [ SECTORS ]
        </a>
        <a href="#methodology" className="hover:text-aitron_accent transition-colors">
          [ METHODOLOGY ]
        </a>
        <a href="#resources" className="hover:text-aitron_accent transition-colors">
          [ RESOURCES ]
        </a>
      </div>
      <a
        href="https://calendly.com/getaitron/30min"
        className="border border-dark_text/20 px-4 py-2 font-mono text-xs text-dark_text hover:bg-aitron_accent hover:text-white_bg hover:border-aitron_accent transition-all duration-300"
      >
        BOOK A DEMO
      </a>
    </nav>
  );
}
