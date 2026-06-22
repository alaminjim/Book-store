const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Henry Cavil",
      role: "Verified Reader",
      text: "The selection here is exquisite. I bought Forms of Space and the binding quality is top-notch. Highly recommended for collectors.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Loren",
      role: "Literature Professor",
      text: "BoiGhor is a sanctuary for serious readers. Their curation avoids mainstream algorithms and brings forward actual substance. My books arrived in perfect condition, wrapped with care. Rare to find this level of attention.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "David Kim",
      role: "Design Lead",
      text: "Beautiful website, quick checkout. Will order again.",
      rating: 4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5">
      <div className="mb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
          Testimonials
        </span>
        <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
          Reader Reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <div
            key={rev.id}
            className={`bg-white border border-ink/5 rounded-2xl space-y-4 hover:shadow-md transition-shadow ${
              index === 1 ? "p-5 md:p-7" : "p-6 md:p-8"
            }`}
          >
            <div className="flex text-volt text-sm">
              {"★".repeat(rev.rating)}
              {rev.rating < 5 && (
                <span className="text-ink/20">
                  {"★".repeat(5 - rev.rating)}
                </span>
              )}
            </div>
            <p className="text-sm text-ink/75 font-light leading-relaxed italic">
              "{rev.text}"
            </p>
            <div className="pt-2 border-t border-ink/5">
              <h4 className="font-bold text-xs uppercase tracking-wide">
                {rev.name}
              </h4>
              <span className="text-[10px] text-ink/40 font-light">
                {rev.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
