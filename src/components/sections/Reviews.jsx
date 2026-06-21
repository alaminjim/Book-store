export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Henry Cavil",
      role: "Verified Reader",
      text: "The selection of books here is exquisite. I bought forms of space and the physical quality of the binding is top-notch. Highly recommended for collectors.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Loren",
      role: "Literature Professor",
      text: "Biblio is a sanctuary for serious readers. Their curation avoids mainstream algorithms and brings forward actual substance. Excellent delivery packaging too.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Kim",
      role: "Design Lead",
      text: "A beautiful website that matches the tactile beauty of their physical volumes. Quick checkout and friendly support. Will definitely be ordering again.",
      rating: 5,
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
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-ink/5 rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex text-volt text-sm">
              {"★".repeat(rev.rating)}
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
}
