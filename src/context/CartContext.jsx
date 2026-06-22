/* eslint-disable react-refresh/only-export-components -- keeping provider + hook together, splitting felt like overkill for this */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("boighor_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem("boighor_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    // Keep maximum 3 toasts on screen at once to avoid layout clutter
    setToasts((prev) => [...prev.slice(-2), { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item,
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast(`"${product.title}" added to cart`, "success");
  };

  const removeFromCart = (productId) => {
    const book = cartItems.find((item) => item.id === productId);
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    if (book) {
      showToast(`"${book.title}" removed from cart`, "info");
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    showToast("Cart cleared successfully", "info");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        showToast,
      }}
    >
      {children}

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-4 px-5 py-4 rounded-2xl shadow-xl border animate-fade-in transition-all duration-300 ${
              toast.type === "success"
                ? "bg-ink text-bone border-volt/20"
                : "bg-white text-ink border-ink/10"
            }`}
          >
            <div className="flex items-center gap-3">
              {toast.type === "success" ? (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-volt"></span>
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-ink/30 shrink-0" />
              )}
              <span className="text-xs font-semibold uppercase tracking-wider">
                {toast.message}
              </span>
            </div>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="text-xs opacity-50 hover:opacity-100 transition-opacity ml-2 pointer-events-auto cursor-pointer select-none"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
