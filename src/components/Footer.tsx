"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-[70vh] flex flex-col justify-between p-6 md:px-24 py-20 bg-aitron_accent text-white_bg relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')]"></div>

      <div className="relative z-10">
        <p className="font-mono text-sm tracking-widest border-b border-white_bg/20 pb-4 inline-block w-full"></p>
        <h2 className="font-sans text-6xl md:text-9xl tracking-tighter leading-none mt-10 font-bold">
          START YOUR
          <br />
          TRANSFORMATION
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 relative z-10">
        <div>
          <h4 className="font-mono font-bold mb-4 uppercase">Direct Contact</h4>
          <a href="mailto:knowmore@getaitron.com" className="block font-mono text-xl md:text-2xl hover:underline mb-2">
            knowmore@getaitron.com ↗
          </a>
          <a
            href="https://calendly.com/getaitron/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-white_bg text-aitron_accent font-mono text-sm font-bold hover:bg-aitron_secondary hover:text-white_bg transition-all duration-300 border border-white_bg"
          >
            Lets Transform →
          </a>
          <p className="font-mono text-xs opacity-70 max-w-sm mt-4">
            Just one discovery call could unlock thousands in savings and months of uptime.
          </p>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end">
          <div className="flex gap-6 items-center">
            <a
              href="https://www.linkedin.com/company/aitron/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="font-mono text-xs mt-6 opacity-60">
            © 2025 AITRON. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
