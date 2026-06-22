/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiArrowLeft, FiCheck, FiShoppingBag, FiInfo } from "react-icons/fi";
import { HiMinus, HiPlus } from "react-icons/hi";
import BOOKS from "../data/books";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const book = BOOKS.find((b) => b.id === parseInt(id));

  const galleryImages = book
    ? [
        book.image,
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80",
      ]
    : [];

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (book) {
      setActiveImage(book.image);
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id, book]);

  if (!book) {
    return (
      <div className="bg-bone min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <FiInfo className="text-4xl text-ink/30 mx-auto" />
          <h1 className="font-display text-2xl uppercase font-bold">
            Book not found
          </h1>
          <p className="text-sm text-ink/60">
            We could not find the book you are looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-volt hover:text-ink transition-colors"
          >
            <FiArrowLeft />
            <span>Go Back Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = BOOKS.filter(
    (b) => b.category === book.category && b.id !== book.id,
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleQtyChange = (val) => {
    if (val < 1) return;
    setQuantity(val);
  };

  return (
    <div className="bg-bone text-ink min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/40 hover:text-volt transition-colors"
          >
            <FiArrowLeft className="text-sm" />
            <span>Back to Catalog</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-sand border border-ink/5 rounded-2xl overflow-hidden shadow-md">
              <img
                src={activeImage || book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {book.tag && (
                <div className="absolute top-4 left-4 bg-volt text-bone text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded">
                  {book.tag}
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[3/4] rounded-xl overflow-hidden bg-sand border transition-all ${
                    activeImage === img
                      ? "border-volt ring-2 ring-volt/20"
                      : "border-ink/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:py-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-volt bg-volt/5 px-2.5 py-1 rounded">
                {book.category.replace("-", " ")}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mt-4 leading-none">
                {book.title}
              </h1>
              <p className="text-sm text-ink/50 italic mt-2">
                by {book.author}
              </p>
            </div>

            <div className="text-2xl font-display font-bold text-ink">
              ${book.price.toFixed(2)}
            </div>

            <p className="text-sm md:text-base text-ink/75 font-light leading-relaxed">
              {book.desc}
            </p>

            <div className="bg-sand/35 border border-ink/5 rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60">
                Product Details
              </h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-light text-ink/85">
                <li>
                  <span className="font-semibold text-ink/50">Publisher:</span>{" "}
                  BoiGhor Press
                </li>
                <li>
                  <span className="font-semibold text-ink/50">Format:</span>{" "}
                  Hardcover
                </li>
                <li>
                  <span className="font-semibold text-ink/50">Language:</span>{" "}
                  English
                </li>
                <li>
                  <span className="font-semibold text-ink/50">Paper:</span> FSC
                  Certified Recycled
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-4">
              <div className="flex items-center border border-ink/10 rounded-xl overflow-hidden bg-bone shrink-0">
                <button
                  onClick={() => handleQtyChange(quantity - 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors text-ink/65"
                >
                  <HiMinus className="text-xs" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-ink select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQtyChange(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors text-ink/65"
                >
                  <HiPlus className="text-xs" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-grow bg-ink text-bone font-bold text-xs uppercase tracking-widest h-12 rounded-xl hover:bg-volt hover:text-ink transition-colors flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <FiCheck className="text-sm" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="text-sm" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-ink/5 pt-16">
            <h2 className="font-display text-2xl uppercase tracking-wide mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedBook) => (
                <Link
                  key={relatedBook.id}
                  to={`/product/${relatedBook.id}`}
                  className="group bg-white border border-ink/5 rounded-2xl p-5 hover:shadow-xl hover:border-volt/20 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sand mb-5 shadow-md">
                    <img
                      src={relatedBook.image}
                      alt={relatedBook.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow space-y-1">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                      <span>{relatedBook.category.replace("-", " ")}</span>
                      <span className="text-volt font-display text-base font-bold">
                        ${relatedBook.price.toFixed(2)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg uppercase font-bold text-ink group-hover:text-volt transition-colors leading-tight truncate">
                      {relatedBook.title}
                    </h3>
                    <p className="text-xs text-ink/50 italic">
                      by {relatedBook.author}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
