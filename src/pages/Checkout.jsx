import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

const Checkout = () => {
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    clearCart();
  };

  if (orderSubmitted) {
    return (
      <div className="bg-bone min-h-screen pt-24 pb-20 px-5 md:px-8 flex items-center justify-center">
        <div className="text-center max-w-md bg-white border border-ink/5 rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
          <div className="w-20 h-20 bg-volt/10 rounded-full flex items-center justify-center mx-auto text-volt">
            <FiCheckCircle className="text-4xl" />
          </div>
          <div>
            <h1 className="font-display text-3xl uppercase tracking-wide mb-2">
              Order Confirmed
            </h1>
            <p className="text-sm text-ink/60 font-light leading-relaxed">
              Thanks for your order! We'll pack your books with care and send
              you a tracking link within 24 hours.
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              <span>Back to Archive</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-bone min-h-screen pt-24 pb-20 px-5 md:px-8 flex items-center justify-center">
        <div className="text-center max-w-md space-y-6">
          <h1 className="font-display text-3xl uppercase tracking-wide">
            Checkout is empty
          </h1>
          <p className="text-sm text-ink/65 font-light">
            You don't have any items in your cart to checkout.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-ink text-bone px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-volt hover:text-ink transition-colors"
          >
            <FiArrowLeft />
            <span>Discover Books</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bone text-ink min-h-screen pt-24 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/40 hover:text-volt transition-colors"
          >
            <FiArrowLeft className="text-sm" />
            <span>Return to Cart</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight mt-4">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <div className="bg-white border border-ink/5 rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="font-display text-lg uppercase tracking-wider border-b border-ink/5 pb-3">
                1. Customer Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="E.g., John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="+880 1712-XXXXXX"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-ink/5 rounded-2xl p-5 md:p-7 space-y-6">
              <h2 className="font-display text-lg uppercase tracking-wider border-b border-ink/5 pb-3">
                2. Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2 sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="House, street, neighborhood"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="E.g., Dhaka"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postalCode"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light placeholder:text-ink/30 focus:outline-none transition-colors"
                    placeholder="E.g., 1212"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="text-[10px] font-bold uppercase tracking-widest text-ink/50"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    defaultValue="Bangladesh"
                    className="w-full bg-bone border border-ink/10 focus:border-volt/50 rounded-xl px-4 py-3 text-sm font-light focus:outline-none transition-colors"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white border border-ink/5 rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="font-display text-lg uppercase tracking-wider border-b border-ink/5 pb-3">
                3. Payment Method
              </h2>
              <div className="space-y-3">
                {[
                  {
                    id: "card",
                    title: "Credit / Debit Card",
                    desc: "Visa, Mastercard, AMEX",
                  },
                  {
                    id: "cod",
                    title: "Cash on Delivery",
                    desc: "Pay in cash upon delivery",
                  },
                  {
                    id: "bkash",
                    title: "bKash / Rocket / Nagad",
                    desc: "Mobile Financial Services",
                  },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.paymentMethod === method.id
                        ? "border-volt bg-volt/5"
                        : "border-ink/10 hover:border-ink/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleChange}
                      className="mt-1 accent-volt"
                    />
                    <div className="-mt-0.5">
                      <span className="text-xs font-bold uppercase tracking-wide block">
                        {method.title}
                      </span>
                      <span className="text-[10px] text-ink/50 font-light block mt-0.5">
                        {method.desc}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-24 space-y-6">
            <div className="bg-ink text-bone rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl uppercase tracking-wider pb-4 border-b border-bone/10 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-48 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-xs text-bone/55 font-light"
                  >
                    <div className="pr-4 truncate">
                      <span className="text-bone font-medium">
                        {item.title}
                      </span>
                      <span className="block text-[10px] text-bone/45 mt-0.5">
                        Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="shrink-0 font-medium text-bone/80">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs border-t border-bone/10 pt-4 mb-6">
                <div className="flex justify-between text-bone/60">
                  <span>
                    Subtotal ({totalItems} item
                    {totalItems !== 1 ? "s" : ""})
                  </span>
                  <span className="font-bold text-bone">
                    ${totalPrice.toFixed(2)}
                  </span>
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
                <span className="font-display text-2xl text-volt">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-volt text-ink font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
              >
                Place Order - ${totalPrice.toFixed(2)}
              </button>
            </div>

            <div className="bg-white border border-ink/5 rounded-2xl p-5 text-center space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                Archival Packaging
              </p>
              <p className="text-[10px] text-ink/35 font-light">
                All books are packed in heavy-duty cardboard sleeves with custom
                acid-free wrapping paper.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
