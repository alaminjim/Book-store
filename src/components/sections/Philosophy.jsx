import { FiBookOpen, FiFeather, FiHeart } from "react-icons/fi";
import { HiOutlineBookmark } from "react-icons/hi";

const Philosophy = () => {
  return (
    <section id="philosophy" className="bg-sand/40 py-20 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
            Philosophy
          </span>
          <h2 className="font-display text-4xl uppercase tracking-wide leading-none">
            Why we love physical books.
          </h2>
          <p className="text-sm text-ink/60 font-light leading-relaxed">
            We believe in the tactile experience of reading. Here is why we
            curate our books with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-bone border border-ink/5 rounded-2xl p-6 space-y-4 hover:border-volt/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-volt/10 text-volt flex items-center justify-center">
              <FiBookOpen className="text-lg" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider font-bold">
              Curated Catalog
            </h3>
            <p className="text-xs text-ink/65 font-light leading-relaxed">
              No algorithms. Just good taste.
            </p>
          </div>

          <div className="bg-bone border border-ink/5 rounded-2xl p-6 space-y-4 hover:border-volt/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-volt/10 text-volt flex items-center justify-center">
              <HiOutlineBookmark className="text-lg" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider font-bold">
              Great Design
            </h3>
            <p className="text-xs text-ink/65 font-light leading-relaxed">
              We select books with unique cover art, quality paper, and
              beautiful bindings.
            </p>
          </div>

          {/* slightly tighter padding here, fits better with the icon size — leaving as is */}
          <div className="bg-bone border border-ink/5 rounded-2xl p-5 space-y-4 hover:border-volt/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-volt/10 text-volt flex items-center justify-center">
              <FiFeather className="text-lg" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider font-bold">
              Eco Friendly
            </h3>
            <p className="text-xs text-ink/65 font-light leading-relaxed">
              We focus on publishers using recycled paper and eco-friendly
              printing methods. Because books shouldn't cost the earth.
            </p>
          </div>

          <div className="bg-bone border border-ink/5 rounded-2xl p-6 space-y-4 hover:border-volt/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-volt/10 text-volt flex items-center justify-center">
              <FiHeart className="text-lg" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider font-bold">
              Community
            </h3>
            <p className="text-xs text-ink/65 font-light leading-relaxed">
              A portion of our sales supports local library programs and
              independent writers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
