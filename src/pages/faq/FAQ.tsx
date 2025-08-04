import "./faq.scss";
import { useState } from "react";

const faqData = [
  {
    question: "Which Product is selling the most?",
    answer:
      "Playstation 5 is the most sold product of the month  .",
  },
  {
    question: "How do I change the theme?",
    answer:
      "Click the sun/moon icon in the top right to toggle between light and dark mode.",
  },
  {
    question: "How do I delete a product?",
    answer:
      "Navigate to the 'Products' section, find the product you want to delete, and click the delete icon in the actions column.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and security practices to keep your data safe.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqPage">
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="faqList">
        {faqData.map((faq, index) => (
          <div
            className={`faqItem ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faqQuestion">
                <p>{faq.question}</p>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            {activeIndex === index && (
              <div className="faqAnswer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
