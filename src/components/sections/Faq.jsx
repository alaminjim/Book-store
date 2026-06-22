import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const Faq = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Usually 5-7 business days after dispatch. We process orders within 2-3 days.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Free shipping on all orders — no minimum, no catch.",
    },
    {
      question: "Can I return a book if I change my mind?",
      answer:
        "Absolutely. You have 14 days from delivery to return any book. Just make sure it's in original condition with no markings or damage. We'll process the refund once we receive it.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Drop us an email at support@boighor.com. We try to respond within 24 hours, but usually it's much faster.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 py-16 border-t border-ink/5">
      <div className="mb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
          Questions
        </span>
        <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="bg-white border border-ink/5 rounded-2xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-sm sm:text-base uppercase tracking-wider text-ink hover:text-volt transition-colors"
            >
              <span>{faq.question}</span>
              <span className="shrink-0 ml-4 text-volt">
                {activeIndex === index ? (
                  <HiMinus className="text-sm" />
                ) : (
                  <HiPlus className="text-sm" />
                )}
              </span>
            </button>

            <div
              className={`transition-all duration-200 overflow-hidden ${
                activeIndex === index
                  ? "max-h-48 border-t border-ink/5"
                  : "max-h-0"
              }`}
            >
              <p className="p-6 text-xs sm:text-sm text-ink/75 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
