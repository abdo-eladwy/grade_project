import React, { useEffect, useState, useRef } from "react";
import "./ScrollCounter.scss";
import { useTranslation } from "react-i18next";

export default function ScrollCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  
  const hasAnimated = useRef(false);
  const boxRef = useRef(null);
  const { t } = useTranslation();

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
    animateValue(setCount1, 0,1250, duration);
    animateValue(setCount2, 0,94, duration);
    animateValue(setCount3, 0,7, duration);
    animateValue(setCount4, 0,28, duration);
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
        <h6>{t("h82")}</h6>
        <h1>{t("h83")}</h1>
        <p>{t("carouselp61")}</p>
        <div className="d-flex flex-wrap col-12 justify-content-center">
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count1} +</h1>
            <h3>{t("h78")}</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count2} % </h1>
            <h3>{t("h79")}</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count3} +</h1>
            <h3>{t("h80")}</h3>
          </div>
          <div className="box1 col-12 col-md-6 col-lg-3">
            <h1 className="boxh1">{count4} +</h1>
            <h3>{t("h81")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
