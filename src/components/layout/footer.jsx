import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone pt-16 pb-8 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-display text-3xl text-bone tracking-wide font-bold">
                BIBLIO
              </span>
            </Link>
            <p className="text-bone/60 max-w-sm text-sm font-light leading-relaxed">
              We curate literature that inspires, challenges, and endures. Our
              collection represents a dedication to physical craftsmanship and
              the timeless power of written thoughts.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-bone/10 flex items-center justify-center text-bone/60 hover:text-volt hover:border-volt/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="text-base" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-bone/10 flex items-center justify-center text-bone/60 hover:text-volt hover:border-volt/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="text-base" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-bone/10 flex items-center justify-center text-bone/60 hover:text-volt hover:border-volt/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="text-base" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-volt mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm font-light text-bone/70">
              <li>
                <Link
                  to="/fiction"
                  className="hover:text-volt transition-colors"
                >
                  Fiction & Novels
                </Link>
              </li>
              <li>
                <Link
                  to="/non-fiction"
                  className="hover:text-volt transition-colors"
                >
                  History & Essays
                </Link>
              </li>
              <li>
                <Link
                  to="/poetry"
                  className="hover:text-volt transition-colors"
                >
                  Poetry & Drama
                </Link>
              </li>
              <li>
                <Link to="/art" className="hover:text-volt transition-colors">
                  Art, Design & Photo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-volt mb-4">
              Journal
            </h3>
            <ul className="space-y-2.5 text-sm font-light text-bone/70">
              <li>
                <a href="#" className="hover:text-volt transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-volt transition-colors">
                  Bespoke Binding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-volt transition-colors">
                  Eco Commitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-volt transition-colors">
                  Reader Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bone/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-bone/40">
          <p>© {year} BIBLIO All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-bone/80 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-bone/80 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
