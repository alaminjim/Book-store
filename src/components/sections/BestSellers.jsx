import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiCheck } from "react-icons/fi";
import BOOKS from "../../data/books";

export default function BestSellers() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  // Filter 3 best-selling books (e.g. ID 5, 7, 10)
  const bestSellerBooks = BOOKS.filter((book) => [5, 7, 10].includes(book.id));

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
          Popular Volumes
        </span>
        <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
          Best Sellers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellerBooks.map((book) => (
          <div
            key={book.id}
            className="group bg-white border border-ink/5 rounded-2xl p-5 hover:shadow-xl hover:border-volt/20 transition-all duration-500 flex flex-col h-full"
          >
            <Link to={`/product/${book.id}`} className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sand mb-5 shadow-md block">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-ink text-bone text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                Best Seller
              </div>
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
  );
}
