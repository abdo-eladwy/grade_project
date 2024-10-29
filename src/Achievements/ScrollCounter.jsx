import React, { useEffect, useState, useRef } from "react";
import "./ScrollCounter.scss";

export default function ScrollCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  
  const hasAnimated = useRef(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          startCounting();
          hasAnimated.current = true; // Ensures the animation only runs once
        } else if (!entry.isIntersecting) {
          resetCounters();
          hasAnimated.current = false; // Allows reanimation on re-entry
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  const startCounting = () => {
    const duration = 1000;
    animateValue(setCount1, 0, 250, duration);
    animateValue(setCount2, 0, 100, duration);
    animateValue(setCount3, 0, 250, duration);
    animateValue(setCount4, 0, 100, duration);
  };

  const resetCounters = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
  };

  const animateValue = (setState, start, end, duration) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setState(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div className="section4 col-12 d-flex justify-content-center align-items-center" ref={boxRef}>
      <div className="overlay w-100 h-100"></div>
      <div className="content col-12 d-flex flex-column justify-content-center align-items-center m-5 text-center">
        <h6>Archivements</h6>
        <h1>We Have Trust From 15 Years Operation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="d-flex flex-wrap col-12 justify-content-center">
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count1}+</h1>
            <h3>Company Partner</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count2}+</h1>
            <h3>Products Registered</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count3}+</h1>
            <h3>Cases Won</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count4}+</h1>
            <h3>Client Satisfaction</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
