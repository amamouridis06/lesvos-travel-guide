export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        
        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-tight">
              Lesvos Guide
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Ένας σύγχρονος οδηγός για φαγητό, εμπειρίες και διαμονή στη Λέσβο.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            
            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Οδηγός</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-slate-900">Φαγητό</a></li>
                <li><a href="#" className="hover:text-slate-900">Καφέ</a></li>
                <li><a href="#" className="hover:text-slate-900">Παραλίες</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Explore</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-slate-900">Χάρτης</a></li>
                <li><a href="#" className="hover:text-slate-900">Top επιλογές</a></li>
                <li><a href="#" className="hover:text-slate-900">Πλάνο ταξιδιού</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Info</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Lesvos Guide</span>
          <span>Made with care in Greece 🇬🇷</span>
        </div>

      </div>
    </footer>
  );
}
