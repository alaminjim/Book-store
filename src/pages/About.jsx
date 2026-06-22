/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiFeather,
  FiHeart,
  FiPackage,
} from "react-icons/fi";

const values = [
  {
    icon: <FiBookOpen />,
    title: "Human Curation",
    desc: "Every single book is hand-selected and read by our editorial team. No algorithms. No trends-chasing.",
  },
  {
    icon: <FiFeather />,
    title: "Literary Integrity",
    desc: "We champion writers whose voices deserve attention — not just bestseller lists.",
  },
  {
    icon: <FiPackage />,
    title: "Archival Packaging",
    desc: "Every order ships in acid-free tissue and custom cardboard sleeves. Books deserve care.",
  },
  {
    icon: <FiHeart />,
    title: "Community First",
    desc: "A portion of every sale goes toward supporting local libraries and independent writers.",
  },
];

const stats = [
  { value: "1,200+", label: "Books Curated" },
  { value: "48", label: "Countries Served" },
  { value: "8,500+", label: "Happy Readers" },
  { value: "5", label: "Years in Dhaka" },
];

const About = () => {
  return (
    <div className="bg-bone text-ink min-h-screen">
      <section className="pt-32 pb-20 md:pb-28 border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              Our Story
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-tight tracking-tight">
              We Are <br />
              <span className="italic font-normal text-volt font-serif normal-case">
                more than
              </span>{" "}
              <br />a bookstore.
            </h1>
            <p className="text-ink/70 text-base md:text-lg font-light leading-relaxed max-w-xl">
              BoiGhor was founded on a simple belief — that physical books,
              chosen with care, can change a reader's life. We are an
              independent literary archive run by readers, for readers.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              <span>Browse the Archive</span>
              <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-12 px-6 text-center border-r border-ink/5 last:border-r-0 even:border-r-0 lg:even:border-r"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-volt mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-sand">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
                  alt="Inside BoiGhor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-bone">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-volt text-ink px-2.5 py-1 rounded">
                    Est. 2019 · Dhanmondi, Dhaka
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
                Our Mission
              </span>
              <h2 className="font-display text-4xl uppercase tracking-wide leading-tight">
                Preserving the art of reading, one shelf at a time.
              </h2>
              <p className="text-sm text-ink/70 font-light leading-relaxed">
                In a city of 20 million people, we wanted one quiet corner
                dedicated to books. BoiGhor started in a small shop in
                Dhanmondi, and we've been hand-picking titles ever since. We
                believe the books you hold — the weight of the cover, the smell
                of fresh paper — carry meaning that screens cannot replicate.
              </p>
              <p className="text-sm text-ink/70 font-light leading-relaxed">
                Every book we carry has been read, debated, and personally
                approved by our editorial team. We work directly with
                independent publishers from across the world to bring you titles
                that truly deserve your time.
              </p>
              <blockquote className="border-l-2 border-volt pl-4 italic text-sm text-ink/65 font-light">
                "A room without books is like a body without a soul." — Marcus
                Tullius Cicero
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/40 border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl uppercase tracking-wide mt-2">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`bg-bone border border-ink/5 rounded-2xl space-y-4 hover:border-volt/30 transition-colors ${
                  i % 2 === 0 ? "p-6" : "p-5"
                }`}
              >
                <div
                  className={`w-10 h-10 bg-volt/10 text-volt flex items-center justify-center text-lg ${
                    i === 1
                      ? "rounded-full"
                      : i === 3
                        ? "rounded-lg"
                        : "rounded-xl"
                  }`}
                >
                  {val.icon}
                </div>
                <h3 className="font-display text-lg uppercase tracking-wider font-bold">
                  {val.title}
                </h3>
                <p className="text-xs text-ink/65 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Start Reading
          </span>
          <h2 className="font-display text-4xl uppercase tracking-wide">
            Ready to find your next great read?
          </h2>
          <p className="text-sm text-ink/60 font-light leading-relaxed max-w-xl mx-auto">
            Browse our hand-curated catalog and discover literature that
            challenges, moves, and stays with you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/#catalog"
              className="group bg-ink hover:bg-volt text-bone hover:text-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Catalog</span>
              <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/fiction"
              className="border border-ink/10 hover:border-volt/40 text-ink/80 hover:text-volt px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Browse Fiction
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
