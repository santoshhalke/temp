'use client';
import { useState } from 'react';
import { Plus, Minus, Home } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: "How do I search for properties on Aelo?",
    answer: "You can use our advanced search tool to filter by location, price, property type, and more."
  },
  {
    question: "Can I schedule a property tour through Aelo?",
    answer: "Yes, our platform lets you schedule tours at your convenience directly with the property agent."
  },
  {
    question: "What kind of properties can I find on Aelo?",
    answer: "We list residential, commercial, and luxury properties across various locations."
  },
  {
    question: "",
    answer: ""
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 px-4 md:px-10">
        
        {/* Left side: Heading + Image */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="text-lg"><Home/></span> FAQ’S
          </p>
          <h2 className="text-4xl font-light text-black leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-full aspect-[4/5] relative">
            <Image
              src="/images/about/faq.jpg"
              alt="FAQ Illustration"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Right side: FAQ accordion */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <div
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="pt-1">
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
                <h3 className="text-lg font-medium text-gray-700">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`transition-all overflow-hidden ease-in-out duration-300 text-gray-500 text-sm ${
                  activeIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
