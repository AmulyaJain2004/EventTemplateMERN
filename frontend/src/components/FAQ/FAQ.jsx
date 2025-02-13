import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is an event where people collaborate intensively on software projects, showcasing creativity and technical skills.",
  },
  {
    question: "How does an online hackathon work?",
    answer:
      "Participants join remotely, submit their projects online, and interact with mentors through digital platforms.",
  },
  {
    question: "Do we need to be good at coding to participate?",
    answer:
      "Not necessarily! Hackathons are open to all skill levels and encourage learning and collaboration.",
  },
  {
    question: "How would my resume benefit from participating in this hackathon?",
    answer:
      "Participating in a hackathon demonstrates teamwork, problem-solving, and creativity, making you stand out to employers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div
              className="accordion-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`accordion-answer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;