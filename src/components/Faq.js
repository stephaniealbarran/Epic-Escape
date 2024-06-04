import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <summary>
        {question}
        {isOpen ? (
          <svg width="24" height="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        ) : (
          <svg width="24" height="24">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        )}
      </summary>
      <p>{answer}</p>
    </details>
  );
};

const App = () => {
  const faqs = [
    {
      question: 'Does this travel recommendation platform have what I need?',
      answer: 'Absolutely! Our platform is crafted to provide personalized travel recommendations tailored to your preferences and interests. Whether you are seeking tranquil escapes, vibrant city tours, or adventurous outdoor activities, we have options to suit every type of traveler.'
    },
    {
      question: 'Can I rely on your recommendations for planning all my trips?',
      answer: 'Of course! Our recommendations are based on extensive research, user reviews, and up-to-date travel data. Feel free to use our insights for all your travel planning. We strive to be your go-to resource for discovering new destinations and making memorable journeys.'
    },
    {
      question: 'Are there any limitations to the destinations you cover?',
      answer: 'Our reach is only limited by the bounds of the map—and even then, we are constantly expanding! While we cover a vast array of destinations, some lesser-known or newly accessible locations might take a bit longer to appear in our database.'
    }
  ];

  return (
    <div>
      <h2 className='text-center header-color mt-5 mb-5 '>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default App;
