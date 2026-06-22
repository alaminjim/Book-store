import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiCheck } from "react-icons/fi";
import BOOKS from "../data/books";

const CategoryPage = ({ category, title, description }) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const books = BOOKS.filter((book) => book.category === category);

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="bg-bone min-h-screen text-ink pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 border-b border-ink/10 pb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl uppercase mt-2 tracking-tight leading-none">
            {title}
          </h1>
          <p className="text-sm text-ink/55 font-light mt-4 max-w-xl leading-relaxed">
            {description}
          </p>
          <p className="text-xs text-ink/40 font-light mt-3 uppercase tracking-wider">
            {books.length} Books available
          </p>
        </div>

        {books.length === 0 ? (
          <p className="text-center py-20 text-ink/40 text-sm font-light">
            No books found in this collection yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="group bg-white border border-ink/5 rounded-2xl p-5 hover:shadow-xl hover:border-volt/20 transition-all duration-300 flex flex-col"
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
                    <span>{book.category}</span>
                    <span className="text-volt font-display text-lg font-bold">
                      ${book.price.toFixed(2)}
                    </span>
                  </div>

                  <Link to={`/product/${book.id}`}>
                    <h2 className="font-display text-xl uppercase font-bold text-ink group-hover:text-volt transition-colors leading-tight">
                      {book.title}
                    </h2>
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
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
