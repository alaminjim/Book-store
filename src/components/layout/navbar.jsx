import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { useCart } from "../../context/CartContext";

const NAV_LINKS = [
  { label: "Fiction", to: "/fiction" },
  { label: "Non-Fiction", to: "/non-fiction" },
  { label: "Poetry", to: "/poetry" },
  { label: "Art & Design", to: "/art" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-bone/80 backdrop-blur-md ${
        scrolled
          ? "border-ink/10 shadow-[0_1px_0_0_rgba(30,27,24,0.04)]"
          : "border-ink/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <span className="font-display text-2xl md:text-3xl text-ink tracking-wide font-bold">
            BIBLIO
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-volt after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-volt after:rounded-full"
                      : "text-ink/60 hover:text-volt"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-ink/5 transition-colors"
          >
            <HiOutlineShoppingBag className="text-ink text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-volt text-bone text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-ink"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 border-t border-ink/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1 bg-bone">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 uppercase text-xs font-semibold tracking-wider border-b border-ink/5 transition-colors ${
                    isActive ? "text-volt" : "text-ink/80 hover:text-volt"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
