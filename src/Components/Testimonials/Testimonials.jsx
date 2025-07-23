import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Jessica P.',
    quote: "I'm absolutely in love with the quality and style of the clothes. My order arrived quickly and the customer service was fantastic!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mike R.',
    quote: "Finally, a store that gets it right. Great fit, premium materials, and prices that don't break the bank. I've already placed my second order.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah L.',
    quote: "The dress I bought is even more beautiful in person. I wore it to a wedding and got so many compliments. This is my new favorite store!",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="section-title fade-in">What Our Customers Say</h2>
      <hr className="section-divider fade-in" />
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 