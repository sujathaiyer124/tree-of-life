import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./parallax.css";
import flower1 from "./assets/flower1.png";
import flower2 from "./assets/flower2.jpeg";
import tree1 from "./assets/garden2.jpg";
import tree2 from "./assets/garden3.jpg";

const ParallaxGarden = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const gardenOffset = document.querySelector(".parallax-section").offsetTop;

      if (scrollPosition > gardenOffset - window.innerHeight / 1.5) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (animate) {
      gsap.to(".flower1", { opacity: 1, scale: 1, duration: 2 });
      gsap.to(".flower2", { opacity: 1, scale: 1, duration: 2, delay: 0.5 });
      gsap.to(".tree1", { opacity: 1, scale: 1, duration: 3 });
      gsap.to(".tree2", { opacity: 1, scale: 1, duration: 3, delay: 0.5 });

      // Add movement effects
      gsap.to(".flower1", { x: 100, y: -50, duration: 2, delay: 1 });
      gsap.to(".flower2", { x: -100, y: 50, duration: 2, delay: 1.5 });
      gsap.to(".tree1", { x: 150, y: 100, duration: 3, delay: 2 });
      gsap.to(".tree2", { x: -150, y: -100, duration: 3, delay: 2.5 });
      
      // Animate the call to action (CTA)
      gsap.to(".cta", { opacity: 1, y: 0, duration: 2, delay: 1 });
    }
  }, [animate]);

  return (
    <div className="parallax-section">
      <div className={`garden ${animate ? "animate" : ""}`}>
        <div className="image-frame">
          <img
            src={flower1}
            alt="Flower 1"
            className="flower flower1"
          />
        </div>
        <div className="image-frame">
          <img
            src={flower2}
            alt="Flower 2"
            className="flower flower2"
          />
        </div>
        <div className="image-frame">
          <img
            src={tree1}
            alt="Tree 1"
            className="tree tree1"
          />
        </div>
        <div className="image-frame">
          <img
            src={tree2}
            alt="Tree 2"
            className="tree tree2"
          />
        </div>
      </div>
      <div className={`cta ${animate ? "visible" : ""}`}>
        <h1>Be part of the Bloom</h1>
        <p>Start your growth journey today.</p>
        <form className="signup-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default ParallaxGarden;