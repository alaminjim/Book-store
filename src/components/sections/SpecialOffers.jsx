export default function SpecialOffers() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <div className="bg-volt text-ink rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,27,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,27,24,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="space-y-3 relative z-10 text-center md:text-left max-w-xl">
          <span className="text-[9px] font-extrabold uppercase tracking-widest bg-ink text-bone px-2.5 py-1 rounded">
            Limited Time Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide font-black leading-tight">
            Buy More, Save More
          </h2>
          <p className="text-xs md:text-sm font-medium opacity-85 leading-relaxed">
            Add any 3 books to your cart and receive a complimentary leather bookmark and free priority shipping worldwide. No coupon code required.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <div className="bg-ink text-bone font-display px-8 py-4 rounded-xl text-center shadow-lg">
            <span className="text-[10px] uppercase tracking-wider block font-bold text-volt">Automatic discount</span>
            <span className="text-xl font-bold uppercase tracking-widest">Free Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
