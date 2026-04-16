export default function Footer() {
  return (
    <footer className="bg-blue-600/90 backdrop-blur-md border-t border-blue-500 mt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* Brand */}
          <div className="max-w-sm text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
              Lesvos Guide
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Ένας σύγχρονος οδηγός για φαγητό, εμπειρίες και διαμονή στη Λέσβο.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 text-center md:text-left">
            
            <div>
              <h4 className="mb-3 font-semibold text-white/90">Οδηγός</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="block py-1 hover:text-white">Φαγητό</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Καφέ</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Παραλίες</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/90">Explore</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="block py-1 hover:text-white">Χάρτης</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Top επιλογές</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Πλάνο ταξιδιού</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/90">Info</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="block py-1 hover:text-white">About</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-3 text-xs sm:text-sm text-white/60 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Lesvos Guide</span>

          <span>
            Made with care by{" "}
            <a
              href="https://github.com/amamouridis06"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angel Dev 
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
