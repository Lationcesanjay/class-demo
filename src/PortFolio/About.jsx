import React from "react";
import "./Css/about.css"; // Ensure you have this CSS file for styles
import Imge from '../assets/nature.jpg'
import Imge1 from '../assets/nature1.jpg'
import Imge2 from '../assets/nature2.jpg'

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="fade-in">About Us</h1>
      <p className="fade-in">
        At <strong>Your Company Name</strong>, we believe in the power of innovation. Founded in 2020, our mission is to deliver cutting-edge solutions that empower businesses and enhance lives. We strive to set new standards in quality and service.
      </p>

      <h2 className="fade-in">Our Mission</h2>
      <p className="fade-in">
        To create innovative products and services that drive progress and create lasting impact.
      </p>

      <h2 className="fade-in">Our Values</h2>
      <ul className="fade-in">
        <li><strong>Integrity:</strong> We uphold the highest standards in all our actions.</li>
        <li><strong>Innovation:</strong> Embracing change and continuous improvement.</li>
        <li><strong>Collaboration:</strong> Working together to achieve collective goals.</li>
        <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do.</li>
      </ul>

      <h2 className="fade-in">Meet Our Team</h2>
      <div className="team">
        {[
          { name: "Your Name", title: "CEO & Founder", img: Imge  },
          { name: "Your Name", title: "CTO", img: Imge1 },
          { name: "Your Name", title: "Marketing Director", img: Imge2 },
        ].map((member, index) => (
          <div className="team-member fade-in" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      <h2 className="fade-in">Our Achievements</h2>
      <ul className="fade-in">
        <li>Awarded "Best Startup of the Year" in 2021</li>
        <li>Over 500 satisfied clients worldwide</li>
        <li>Recognized for excellence in customer service</li>
      </ul>

      <h2 className="fade-in">Join Us on Our Journey</h2>
      <p className="fade-in">
        Explore our services and see how we can work together to achieve your goals. Thank you for considering <strong>Your Company Name</strong> as your trusted partner in innovation!
      </p>
    </div>
  );
};
 
