export default function Footer() {
  return (
     <footer className="bg-blue-600/60 backdrop-blur-md border-t border-blue-500 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        
        {/* Top */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-tight">
              Lesvos Guide
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Ένας σύγχρονος οδηγός για φαγητό, εμπειρίες και διαμονή στη Λέσβο.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            
            <div>
              <h4 className="mb-4 font-semibold text-white/90">Οδηγός</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white">Φαγητό</a></li>
                <li><a href="#" className="hover:text-white">Καφέ</a></li>
                <li><a href="#" className="hover:text-white">Παραλίες</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white/90">Explore</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white">Χάρτης</a></li>
                <li><a href="#" className="hover:text-white">Top επιλογές</a></li>
                <li><a href="#" className="hover:text-white">Πλάνο ταξιδιού</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white/90">Info</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Lesvos Guide</span>
          <span>
            Made with care by{" "}
              <a href="https://github.com/amamouridis06" target="" rel="noopener noreferrer">
            Angel Dev
          </a>
</span>
        </div>
      </div>
    </footer>
  );
}
