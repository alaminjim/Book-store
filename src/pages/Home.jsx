import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiCheck } from "react-icons/fi";
import BOOKS from "../data/books";
import Hero from "../components/sections/Hero";
import FeaturedCategories from "../components/sections/FeaturedCategories";
import BestSellers from "../components/sections/BestSellers";
import AuthorSpotlight from "../components/sections/AuthorSpotlight";
import SpecialOffers from "../components/sections/SpecialOffers";
import Reviews from "../components/sections/Reviews";
import Faq from "../components/sections/Faq";
import Philosophy from "../components/sections/Philosophy";
import Newsletter from "../components/sections/Newsletter";

const Home = () => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const featuredProducts = BOOKS.filter((book) => [1, 3, 9].includes(book.id));

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="bg-bone min-h-screen text-ink">
      <Hero books={BOOKS.slice(0, 4)} />

      <FeaturedCategories />

      <section
        id="catalog"
        className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              Selected Volumes
            </span>
            <h2 className="font-display text-3xl uppercase mt-2 tracking-wide">
              Featured Products
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "All", to: "/" },
              { label: "Fiction", to: "/fiction" },
              { label: "Non-Fiction", to: "/non-fiction" },
              { label: "Poetry", to: "/poetry" },
              { label: "Art & Design", to: "/art" },
            ].map((cat) => (
              <Link
                key={cat.label}
                to={cat.to}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-ink/10 hover:border-volt hover:text-volt transition-all duration-300"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((book) => (
            <div
              key={book.id}
              className="group bg-white border border-ink/5 rounded-2xl p-5 hover:shadow-xl hover:border-volt/20 transition-all duration-300 flex flex-col h-full"
            >
              <Link
                to={`/product/${book.id}`}
                className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sand mb-5 shadow-md group-hover:shadow-xl transition-all duration-300 block"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {book.tag && (
                  <div className="absolute top-3 left-3 bg-volt text-bone text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                    {book.tag}
                  </div>
                )}
              </Link>

              <div className="flex flex-col flex-grow space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                  <span>{book.category.replace("-", " ")}</span>
                  <span className="text-volt font-display text-lg font-bold">
                    ${book.price.toFixed(2)}
                  </span>
                </div>

                <Link to={`/product/${book.id}`}>
                  <h3 className="font-display text-xl uppercase font-bold text-ink group-hover:text-volt transition-colors leading-tight">
                    {book.title}
                  </h3>
                </Link>

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
                      <FiCheck className="text-sm" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BestSellers />

      <AuthorSpotlight />

      <SpecialOffers />

      <Reviews />

      <Faq />

      <Philosophy />

      <Newsletter />
    </div>
  );
};

export default Home;
