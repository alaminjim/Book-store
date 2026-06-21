import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineShoppingBag, HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

export default function Cart() {
  const { cartItems, totalPrice, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-bone min-h-screen pt-24 pb-20 px-5 md:px-8 flex items-center justify-center">
        <div className="text-center max-w-md space-y-6">
          <div className="w-24 h-24 bg-sand rounded-full flex items-center justify-center mx-auto border border-ink/5">
            <HiOutlineShoppingBag className="text-4xl text-ink/30" />
          </div>
          <div>
            <h1 className="font-display text-3xl uppercase tracking-wide mb-2">Your cart is empty</h1>
            <p className="text-sm text-ink/55 font-light leading-relaxed">
              You haven't added any volumes yet. Browse our curated catalog and discover exceptional literature.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            <FiArrowLeft className="text-sm" />
            <span>Browse Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bone text-ink min-h-screen pt-24 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">Your Selection</span>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight mt-1">Reading Cart</h1>
          </div>
          <button
            onClick={clearCart}
            className="flex items-center gap-1.5 text-xs text-ink/40 hover:text-red-500 font-bold uppercase tracking-wider transition-colors"
          >
            <FiAlertCircle className="text-sm" />
            <span>Clear All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs text-ink/40 font-light uppercase tracking-widest mb-4">
              {totalItems} volume{totalItems !== 1 ? "s" : ""} selected
            </p>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-ink/5 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 hover:border-ink/10 transition-colors"
              >
                <div className="w-16 h-20 shrink-0 rounded-lg overflow-hidden shadow-md bg-sand border border-ink/5">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <HiOutlineShoppingBag className="text-ink/25 text-xl" />
                    </div>
                  )}
                </div>

                <div className="flex-grow space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">{item.category}</p>
                  <h3 className="font-display text-lg uppercase font-bold leading-tight">{item.title}</h3>
                  <p className="text-xs text-ink/50 italic font-light">by {item.author}</p>
                  <p className="text-sm font-bold text-volt pt-1">${item.price.toFixed(2)} each</p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4 shrink-0">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 rounded-full border border-ink/8 flex items-center justify-center text-ink/35 hover:border-red-200 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                  >
                    <HiOutlineTrash className="text-sm" />
                  </button>

                  <div className="flex items-center border border-ink/10 rounded-full overflow-hidden bg-bone">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors text-ink/60"
                    >
                      <HiMinus className="text-[10px]" />
                    </button>
                    <span className="w-9 text-center text-sm font-bold text-ink select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors text-ink/60"
                    >
                      <HiPlus className="text-[10px]" />
                    </button>
                  </div>

                  <p className="text-xs font-bold text-ink/70 tabular-nums">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/40 hover:text-volt transition-colors"
              >
                <FiArrowLeft className="text-sm" />
                <span>Continue Browsing</span>
              </Link>
            </div>
          </div>

          <div className="sticky top-24 space-y-4">
            <div className="bg-ink text-bone rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl uppercase tracking-wider pb-4 border-b border-bone/10 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs text-bone/55 font-light">
                    <span className="truncate pr-4">{item.title} × {item.quantity}</span>
                    <span className="shrink-0 font-medium text-bone/80">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs border-t border-bone/10 pt-4 mb-6">
                <div className="flex justify-between text-bone/60">
                  <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                  <span className="font-bold text-bone">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-bone/60">
                  <span>Shipping</span>
                  <span className="font-bold text-volt">FREE</span>
                </div>
                <div className="flex justify-between text-bone/60">
                  <span>Taxes</span>
                  <span className="font-bold text-bone">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-bone/10 pt-4 mb-8">
                <span className="text-sm font-bold">Total</span>
                <span className="font-display text-2xl text-volt">${totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={() => alert("Checkout coming soon!")}
                className="w-full bg-volt text-ink font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
            </div>

            <div className="bg-white border border-ink/5 rounded-2xl p-5 text-center space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50">Free worldwide shipping</p>
              <p className="text-[10px] text-ink/35 font-light">
                Orders dispatched within 2–3 business days in archival packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
