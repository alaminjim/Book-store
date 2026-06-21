import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { FiArrowRight, FiFeather, FiCheck } from "react-icons/fi";

export default function Hero({ spotlightBook }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!spotlightBook) return;
    addToCart(spotlightBook);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-volt/20 bg-volt/5 text-volt text-xs font-semibold uppercase tracking-wider">
              <FiFeather className="text-sm" />
              <span>The Literary Archive</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase">
              Discover your <br />
              <span className="italic font-normal text-volt font-serif normal-case">next great</span> <br />
              read today.
            </h1>

            <p className="text-ink/75 max-w-xl text-base md:text-lg font-light leading-relaxed">
              We handpick every book in our bookstore. From contemporary novels to poetry and design, find physical books that matter.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#catalog"
                className="group bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <span>Explore Catalog</span>
                <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#philosophy"
                className="border border-ink/10 hover:border-volt/40 text-ink/80 hover:text-volt px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {spotlightBook && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-72 sm:w-80">
                <div className="absolute -inset-4 bg-ink/5 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="relative bg-sand border border-ink/5 rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl mb-6">
                    <img
                      src={spotlightBook.image}
                      alt={spotlightBook.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-ink text-bone text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                      Featured Pick
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-ink/50 font-bold">{spotlightBook.category}</span>
                      <span className="font-display text-lg font-bold text-volt">${spotlightBook.price.toFixed(2)}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase leading-tight">{spotlightBook.title}</h3>
                    <p className="text-xs text-ink/60 font-light line-clamp-2">{spotlightBook.desc}</p>
                    <button
                      onClick={handleAddToCart}
                      className="w-full mt-4 bg-ink text-bone py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-volt hover:text-ink transition-colors flex items-center justify-center gap-1.5"
                    >
                      {added ? (
                        <>
                          <FiCheck className="text-sm" />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <span>Add to Cart</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
