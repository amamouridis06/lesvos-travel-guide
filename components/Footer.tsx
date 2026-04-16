export default function Footer() {
  return (
    <footer className="bg-emerald-800/90 backdrop-blur-md border-t border-emerald-700 mt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* Brand */}
          <div className="max-w-sm text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
              Lesvos Guide
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
             A modern guide to food, authentic experiences, and places to stay in Lesvos.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 text-center md:text-left">
            
            <div>
              <h4 className="mb-3 font-semibold text-white/90">Guide</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/food" className="block py-1 hover:text-white">Food</a></li>
                <li><a href="/food" className="block py-1 hover:text-white">Cafe</a></li>
                <li><a href="/beaches" className="block py-1 hover:text-white">Beaches</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/90">Explore</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="block py-1 hover:text-white">Map</a></li>
                <li><a href="#" className="block py-1 hover:text-white">Top options</a></li>
                <li><a href="/planner" className="block py-1 hover:text-white">Travel Plan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/90">Info</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/about" className="block py-1 hover:text-white">About</a></li>
                <li><a href="/contact" className="block py-1 hover:text-white">Contact</a></li>
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
