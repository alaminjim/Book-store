import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiCheck } from "react-icons/fi";
import BOOKS from "../data/books";

import Hero from "../components/sections/Hero";
import Philosophy from "../components/sections/Philosophy";
import Newsletter from "../components/sections/Newsletter";

export default function Home() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <div className="bg-bone min-h-screen text-ink">
      {/* Banner */}
      <Hero spotlightBook={BOOKS[0]} />

      {/* Catalog Grid */}
      <section id="catalog" className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              The Archive
            </span>
            <h2 className="font-display text-4xl uppercase mt-2 tracking-wide">
              Curated Collection
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "All", href: "/" },
              { label: "Fiction", href: "/fiction" },
              { label: "Non-Fiction", href: "/non-fiction" },
              { label: "Poetry", href: "/poetry" },
              { label: "Art & Design", href: "/art" },
            ].map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-ink/10 hover:border-volt hover:text-volt"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>

        {BOOKS.length === 0 ? (
          <p className="text-center py-20 text-ink/50 text-sm font-light">
            No volumes found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS.slice(0, 3).map((book) => (
              <div
                key={book.id}
                className="group bg-white border border-ink/5 rounded-2xl p-5 hover:shadow-xl hover:border-volt/20 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sand mb-5 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {book.tag && (
                    <div className="absolute top-3 left-3 bg-volt text-bone text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                      {book.tag}
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                    <span>{book.category.replace("-", " ")}</span>
                    <span className="text-volt font-display text-lg font-bold">
                      ${book.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="font-display text-xl uppercase font-bold text-ink group-hover:text-volt transition-colors leading-tight">
                    {book.title}
                  </h3>

                  <p className="text-xs text-ink/50 italic font-light">
                    by {book.author}
                  </p>

                  <p className="text-xs text-ink/65 font-light leading-relaxed line-clamp-3 pt-1 flex-grow">
                    {book.desc}
                  </p>

                  <button
                    onClick={() => handleAddToCart(book)}
                    className="w-full mt-5 bg-ink text-bone py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-volt hover:text-ink transition-colors flex items-center justify-center gap-1.5"
                  >
                    {addedId === book.id ? (
                      <>
                        <FiCheck className="text-sm animate-pulse" />
                        <span>Added to Archive</span>
                      </>
                    ) : (
                      <span>Acquire Copy</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Why Choose Us */}

      <Philosophy />

      {/* Newsletter */}

      <Newsletter />
    </div>
  );
}
