import { Link } from "react-router-dom";

export default function FeaturedCategories() {
  const categories = [
    {
      title: "Fiction",
      desc: "Imaginative stories, novels, and literature.",
      path: "/fiction",
      bg: "bg-sand/30",
    },
    {
      title: "Non-Fiction",
      desc: "Intellectual essays, history, and real ideas.",
      path: "/non-fiction",
      bg: "bg-sand/30",
    },
    {
      title: "Poetry",
      desc: "Verse, contemporary drama, and short prose.",
      path: "/poetry",
      bg: "bg-sand/30",
    },
    {
      title: "Art & Design",
      desc: "Monographs, visuals, and architecture.",
      path: "/art",
      bg: "bg-sand/30",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <div className="mb-10 text-center md:text-left">
        <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
          Browse by Genre
        </span>
        <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
          Featured Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={cat.path}
            className={`block p-8 rounded-2xl border border-ink/5 hover:border-volt/30 hover:shadow-lg transition-all duration-300 ${cat.bg}`}
          >
            <h3 className="font-display text-xl uppercase font-bold text-ink mb-2">
              {cat.title}
            </h3>
            <p className="text-xs text-ink/60 font-light leading-relaxed mb-6">
              {cat.desc}
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              Explore Collection →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
