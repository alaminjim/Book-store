import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 mt-10">
      <div className="relative bg-ink text-bone rounded-3xl p-8 md:p-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,90,50,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,90,50,0.04)_1px,transparent_1px)] bg-[size:25px_25px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-volt/5 rounded-full blur-[100px]" />

        <div className="relative max-w-2xl space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Newsletter
          </span>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wide leading-none">
            Subscribe to our newsletter.
          </h2>
          <p className="text-sm text-bone/60 font-light leading-relaxed max-w-lg">
            Get weekly book recommendations, author spotlights, and updates on store events directly in your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-bone/5 border border-bone/15 focus:border-volt/55 rounded-xl px-5 py-4 text-sm font-light text-bone focus:outline-none flex-grow placeholder:text-bone/35 transition-colors"
            />
            <button
              type="submit"
              className="bg-volt text-ink font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-volt font-medium animate-fade-in pt-1">
              Thank you. You have been added to the Biblio list.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
