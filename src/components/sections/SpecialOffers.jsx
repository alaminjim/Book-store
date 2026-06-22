const SpecialOffers = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <div className="bg-volt text-ink rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05)_0.5px,transparent_0.5px)] bg-[size:22px_22px]" />

        <div className="space-y-3 relative z-10 text-center md:text-left max-w-xl">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-ink text-bone px-2.5 py-1 rounded">
            Limited Time Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide font-bold leading-tight">
            Buy More, Save More
          </h2>
          <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed">
            Grab any 3 books and we'll throw in a leather bookmark plus free
            priority shipping, anywhere. Nothing to enter, it just applies.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <div className="bg-ink text-bone font-display px-7 py-5 rounded-xl text-center shadow-md">
            <span className="text-[10px] uppercase tracking-wider block font-bold text-volt">
              Automatic discount
            </span>
            <span className="text-xl font-bold uppercase tracking-widest">
              Free Shipping
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
