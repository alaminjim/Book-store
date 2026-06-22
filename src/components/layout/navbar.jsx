import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Fiction", to: "/fiction" },
  { label: "Non-Fiction", to: "/non-fiction" },
  { label: "Poetry", to: "/poetry" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-bone/90 ${
        scrolled ? "border-ink/10 shadow-sm" : "border-ink/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <span className="font-display text-2xl md:text-3xl text-ink tracking-wide font-bold">
            Boi
          </span>
          <span className="font-display text-2xl md:text-3xl text-volt tracking-wide font-bold">
            Ghor
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-wider transition-colors pb-1 ${
                    isActive
                      ? "text-volt border-b-2 border-volt"
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
              <span className="absolute -top-1 -right-1 bg-volt text-bone text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-ink"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
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
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
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
};

export default Navbar;
