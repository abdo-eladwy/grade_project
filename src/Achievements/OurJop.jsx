import React, { useState } from "react";
import "./OurJop.css";
import img from './faq-1.jpg'
export default function OurJop() {
  const [open, setOpen] = useState(""); // State to manage open accordion

  const toggleAccordion = (id) => {
    setOpen(open === id ? "" : id); 
  };

  return (
    <div className="pb-5" style={{background:'#0e1219'}}>
      <div className="header1 col-12 container d-flex text-white pb-4">
        <h4 className="mt-5 mb-3  col-12 text-center">
          Our job is helping our clients with legal issues that they may be
          faced with. Also we are willing to find practical, efficient long-term
          solutions.
        </h4>
      </div>
      <div className="header2 col-12 container d-flex justify-content-around mb-3">
        <div className=" header1 col-lg-6 col-md-12 col-12 mt-5">
          <ul className="accordion">
            <li className="li">
              <label
                onClick={() => toggleAccordion("first")}
                className={open === "first" ? "active" : ""}
              >
                1. Why Volenti law firm?
              </label>
              <div className={`content ${open === "first" ? "open" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet, mea in tacimates electram. Diam
                  facilis cum ei, ei novum accusamus scribentur per. Ei agam
                  necessitatibus ius. Ius ei dolorem constituto. Vel sale
                  repudiandae no, harum putent vivendum ne ius. Quo ex unum
                  iisque.
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("second")}
                className={open === "second" ? "active" : ""}
              >
                2. How does it work?
              </label>
              <div className={`content ${open === "second" ? "open" : ""}`}>
                <p>
                  Sale vivendum senserit an eum, ubique noster ex pro, at vel
                  accommodare ullamcorper. Cu duo minim vocibus menandri, at
                  omittam voluptatum usu. Fabulas docendi iracundia ex cum,
                  viris putant dissentiunt ex cum. Id vim tale mutat, eu vide
                  velit oporteat pri. Mollis vidisse saperet id per.
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("third")}
                className={open === "third" ? "active" : ""}
              >
                3. What differentiates Volenti from other lawyer services?
              </label>
              <div className={`content ${open === "third" ? "open" : ""}`}>
                <p>
                  Eam ei suscipit partiendo, nam modus vocibus cotidieque eu,
                  semper apeirian laboramus sit ne. Qui apeirian tacimates at,
                  has errem possim an, eligendi pericula delicatissimi per ad.
                  At pro essent aliquip qualisque, vis splendide posidonium ex.
                  Nec et error quodsi deleniti. Dicit nobis latine qui an, per
                  duis summo impetus an, eam ne perfecto intellegat persequeris.
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("fourth")}
                className={open === "fourth" ? "active" : ""}
              >
                4. How can we help?
              </label>
              <div className={`content ${open === "fourth" ? "open" : ""}`}>
                <p>
                  In cibo aperiri evertitur vis, sit autem facete cotidieque cu,
                  omnesque voluptua voluptatibus mea ut. Cum ea omnes percipitur
                  cotidieque, propriae suavitate te qui, laudem voluptatibus ne
                  ius. Ut eam lorem consul. Eam bonorum percipit explicari in,
                  efficiendi scripserit ex sed. Usu soluta integre fastidii eu.
                  Et mei ipsum sensibus delicata, ius eu choro solet denique.
                  Populo facilisi urbanitas has ei.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="body1 col-lg-6 col-md-12 col-12  mt-3 pt-4 d-flex justify-content-center p-4">
          <div className="body2 col-12">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

