export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-12 md:py-16 border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl font-extrabold tracking-tight text-white mb-1">
            IBNU UBAIDILLAH
          </h2>
          <p className="text-neutral-500 text-xs mt-2">
            &copy; {currentYear} Ibnu Ubaidillah. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Ibnuubaidillah1009"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full flex items-center justify-center glass text-neutral-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a
            href="https://instagram.com/bayyyy_6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-10 h-10 rounded-full flex items-center justify-center glass text-neutral-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a
            href="https://wa.link/cffu6f"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="w-10 h-10 rounded-full flex items-center justify-center glass text-neutral-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
