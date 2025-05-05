import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I open a Mellapay account?",
    answer: "Mellapay is currently invite-only. You can join via an invite link, a code, or by signing up on our waitlist. Simply download the Mellapay app or visit our website, enter your mobile number, verify your identity, and follow the signup steps."
  },
  {
    question: "Who can open a Mellapay account?",
    answer: "You must be a resident of the UK, USA, Canada, or Europe, aged 18 or over, with a valid local mobile number to open a Mellapay account."
  },
  {
    question: "How much money can I send?",
    answer: "New users can send up to an initial limit, which may increase after verification. If you set up a Mellapay local currency account, your limits will be significantly higher. Your specific limits are viewable in your profile."
  },
  {
    question: "What fees does Mellapay charge?",
    answer: "Mellapay offers zero transfer fees. A small margin is added to the exchange rate, which is how we keep the service sustainable."
  },
  {
    question: "Is my money safe with Mellapay?",
    answer: "Yes. Mellapay works with fully licensed financial institutions. Your funds are safeguarded in segregated accounts, compliant with relevant electronic money regulations."
  },
  {
    question: "How do I contact Mellapay support?",
    answer: "Support is available 24/7 via:\n• Live chat in the app\n• Phone (local or international)\n• Email support\n\nWe're always here to help you move your money safely."
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};