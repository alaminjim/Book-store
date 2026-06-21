import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

export default function Faq() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "We usually dispatch orders within 2-3 business days. Shipping normally takes 5-7 business days depending on your location.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Free shipping is automatically applied to all orders.",
    },
    {
      question: "Can I return a book if I change my mind?",
      answer: "Yes, we accept returns within 14 days of delivery. The books must be in their original condition.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can email us at support@biblio.com. We usually respond within 24 hours.",
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
            key={index}
            className="bg-white border border-ink/5 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-sm sm:text-base uppercase tracking-wider text-ink hover:text-volt transition-colors"
            >
              <span>{faq.question}</span>
              <span className="shrink-0 ml-4 text-volt">
                {activeIndex === index ? <HiMinus className="text-sm" /> : <HiPlus className="text-sm" />}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 border-t border-ink/5" : "max-h-0"
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
}
