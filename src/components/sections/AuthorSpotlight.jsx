import { Link } from "react-router-dom";

const AuthorSpotlight = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-sand">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
              alt="Al Amin Islam"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-sm text-bone px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
              Author of the Month
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Writer in Focus
          </span>
          <h2 className="font-display text-4xl uppercase tracking-wide">
            Al Amin Islam
          </h2>
          <p className="text-sm text-ink/75 font-light leading-relaxed">
            Al Amin Islam is a novelist based in Prague. Her latest book,{" "}
            <em className="font-serif italic font-medium">The Silent Echo</em>,
            is currently a staff favorite at BoiGhor.
          </p>
          <blockquote className="border-l-2 border-volt pl-4 italic text-sm text-ink/65 font-light">
            "Writing is a way of asking questions that don't always have easy
            answers."
          </blockquote>
          <div className="pt-2">
            <Link
              to="/fiction"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-volt hover:text-ink transition-colors"
            >
              <span>Explore alamin's Work</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
