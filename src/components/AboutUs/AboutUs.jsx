import React from 'react';
import './AboutUs.css';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import person4 from '../../assets/person4.jpg';

function AboutUs({ isLoggedIn, openLoginModal }) {
  const team = [
    {
      name: 'Ahmed Saleh',
      role: 'Sales Manager - Helps you find the best furniture for your home.',
      img: person1
    },
    {
      name: 'Sara Youssef',
      role: 'Account Manager - Ensures your orders and payments are handled smoothly.',
      img: person3
    },
    {
      name: 'Kareem Nabil',
      role: 'Logistics Coordinator - Makes sure your orders arrive on time and in perfect condition.',
      img: person2
    },
    {
      name: 'Nour Adel',
      role: 'Customer Support Specialist - Answers your questions and solves any issues you face.',
      img: person4
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    e.target.reset();
  };

  return (
    <div className='about-page'>
      <div className='about-content'>
        <div className='about-left'>
          <h1>About Us</h1>
          <p>Welcome to Shopwise! We are a team passionate about helping people furnish their homes beautifully and affordably.</p>

          <h2>Our Vision</h2>
          <p>To be the most trusted online furniture store in the region, known for quality and service excellence.</p>

          <h2>Our Mission</h2>
          <p>Providing top-quality furniture with outstanding customer care and hassle-free delivery.</p>

          <h2>Our Team Values</h2>
          <ul>
            <li>Quality & Trust</li>
            <li>Customer Satisfaction</li>
            <li>Efficiency</li>
            <li>Integrity</li>
          </ul>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Your Phone Number" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <div className='about-right'>
          {team.map((person, index) => (
            <div className='team-card' key={index}>
              <img src={person.img} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <button
                className='contact-btn'
                onClick={() => {
                  if (!isLoggedIn) {
                    openLoginModal();
                  } else {
                    alert(`You contacted ${person.name}`);
                  }
                }}
              >
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="location-section">
        <h2>Our Location</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0078441017194!2d31.235711215115007!3d30.044419981879306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b96a891a7f%3A0xf026c86519b43ac!2sDowntown%20Cairo!5e0!3m2!1sen!2seg!4v1623842910810!5m2!1sen!2seg"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUs;
