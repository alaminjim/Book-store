import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineShoppingBag, HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi";

export default function Cart() {
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-bone text-ink min-h-screen pt-24 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl uppercase mb-8 tracking-wide">
          Your Curated Volumes
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto border border-ink/5 flex flex-col items-center">
            <div className="w-16 h-16 bg-volt/10 text-volt rounded-full flex items-center justify-center mb-6">
              <HiOutlineShoppingBag className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 font-display">Your archive is empty</h2>
            <p className="text-ink/60 text-xs mb-8 font-light leading-relaxed max-w-sm">
              You haven't selected any volumes for your personal collection yet. Browse our curated selection to discover exceptional minds.
            </p>
            <Link
              to="/"
              className="bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 w-full"
            >
              Start Reading
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-ink/5">
                <div className="flex justify-between items-center pb-6 border-b border-ink/10">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-ink/70">Selected Volumes ({cartItems.length})</h2>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider transition-colors"
                  >
                    Remove All
                  </button>
                </div>

                <div className="divide-y divide-ink/5">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Item Cover and Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-20 bg-sand rounded overflow-hidden shrink-0 border border-ink/5 shadow-md">
                          {item.image ? (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-ink/10 flex items-center justify-center">
                              <HiOutlineShoppingBag className="text-ink/30 text-2xl" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-display text-lg uppercase font-bold text-ink leading-tight">{item.title}</h3>
                          <p className="text-[10px] text-ink/40 uppercase tracking-widest mt-0.5">{item.category}</p>
                          <p className="text-sm font-bold text-volt mt-1">${item.price.toFixed(2)}</p>
                        </div>
                      </div>

                      {/* Quantity Selector & Remove Button */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                        <div className="flex items-center border border-ink/10 rounded-full p-1 bg-bone">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <HiMinus className="text-[10px] text-ink" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <HiPlus className="text-[10px] text-ink" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full border border-ink/5 flex items-center justify-center text-ink/40 hover:bg-red-50 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <HiOutlineTrash className="text-sm" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4">
              <div className="bg-ink text-bone rounded-2xl p-6 md:p-8 shadow-md">
                <h2 className="font-display text-xl uppercase tracking-wider mb-6 border-b border-bone/15 pb-4">
                  Archive Checkout
                </h2>

                <div className="space-y-4 text-xs mb-8 font-light">
                  <div className="flex justify-between text-bone/60">
                    <span>Subtotal</span>
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
                  <div className="border-t border-bone/15 pt-4 flex justify-between text-sm font-bold">
                    <span>Total Cost</span>
                    <span className="text-volt text-base">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="w-full bg-volt text-bone font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-ink transition-all duration-300"
                  onClick={() => alert("Acquiring volumes... Payment connection is disabled in sandbox.")}
                >
                  Acquire Volumes
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/"
                  className="inline-block text-[10px] font-bold uppercase tracking-wider text-ink/40 hover:text-ink transition-colors"
                >
                  ← Return to Catalog
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
