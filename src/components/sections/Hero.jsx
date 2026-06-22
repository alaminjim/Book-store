import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiArrowRight, FiFeather, FiCheck } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import BOOKS from "../../data/books";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = ({ books }) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  // fallback to first 4 books if nothing's passed in from the parent
  const featured = books && books.length > 0 ? books : BOOKS.slice(0, 4);

  const handleAddToCart = (book) => {
    if (!book) return;
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-volt/20 bg-volt/5 text-volt text-xs font-semibold uppercase tracking-wider">
              <FiFeather className="text-sm" />
              <span>The Literary Archive</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight uppercase">
              Discover your <br />
              <span className="italic font-normal text-volt font-serif normal-case">
                next great
              </span>{" "}
              <br />
              read today.
            </h1>

            <p className="text-ink/75 max-w-xl text-base md:text-lg font-light leading-relaxed">
              We handpick every book in our bookstore. From contemporary novels
              to poetry and design, find physical books that matter.
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

          <div className="w-full flex flex-col items-center lg:items-end animate-fade-in">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              speed={600}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".hero-swiper-pagination",
                bulletClass: "hero-bullet",
                bulletActiveClass: "hero-bullet-active",
              }}
              className="w-full max-w-xs sm:max-w-sm overflow-visible"
            >
              {featured.map((book) => (
                <SwiperSlide key={book.id} className="overflow-visible pb-1">
                  <div className="relative group w-full">
                    <div className="absolute -inset-2 bg-ink/[0.03] rounded-3xl blur-xl group-hover:bg-ink/[0.06] transition-all duration-300" />

                    <div className="relative bg-sand border border-ink/5 rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-2">
                      <Link
                        to={`/product/${book.id}`}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl mb-6 block"
                      >
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-ink text-bone text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                          {book.tag || "Featured Pick"}
                        </div>
                      </Link>

                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-ink/50 font-bold">
                            {book.category}
                          </span>
                          <span className="font-display text-lg font-bold text-volt">
                            ${book.price.toFixed(2)}
                          </span>
                        </div>
                        <Link to={`/product/${book.id}`}>
                          <h3 className="font-display text-xl font-bold uppercase leading-tight hover:text-volt transition-colors">
                            {book.title}
                          </h3>
                        </Link>
                        <p className="text-xs text-ink/60 font-light line-clamp-2">
                          {book.desc}
                        </p>
                        <button
                          onClick={() => handleAddToCart(book)}
                          className="w-full mt-4 bg-ink text-bone py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-volt hover:text-ink transition-colors flex items-center justify-center gap-1.5"
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* swiper needs this empty div to mount its own pagination bullets into */}
            <div className="hero-swiper-pagination flex justify-center gap-2 mt-6 w-full max-w-xs sm:max-w-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
