import { Link } from "react-router-dom";

const StaffPick = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-sand">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
              alt="Staff Pick - The Silent Echo"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-sm text-bone px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
              Staff Pick
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Book of the Month
          </span>
          <h2 className="font-display text-4xl uppercase tracking-wide">
            The Silent Echo
          </h2>
          <p className="text-sm text-ink/50 italic font-light">
            by Mehzabin Rahman
          </p>
          <p className="text-sm text-ink/75 font-light leading-relaxed">
            This one caught us off guard. A slow, quiet novel about a woman who
            returns to Dhaka after fifteen years abroad, only to find the city
            she left doesn't quite exist anymore. We've been handing it to
            anyone who asks for a recommendation.
          </p>
          <blockquote className="border-l-2 border-volt pl-4 italic text-sm text-ink/65 font-light">
            "A rare book that makes you want to call someone and read a passage
            out loud."
          </blockquote>
          <div className="pt-2">
            <Link
              to="/fiction"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-volt hover:text-ink transition-colors"
            >
              <span>Browse Fiction</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffPick;
