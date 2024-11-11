import React from "react";
import "./RealEstate.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import img from "./custody-battle-800x550 (1).jpg";
import img1 from "./practice-item-2-800x550.jpg";
import img2 from "./personal-injury-lawyer (1).jpg";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function RealEstate() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <div>
      <div>
        <div>
          <div>
            <NavBar />
            <div className="col-12 mb-5">
              <div className="OurVision col-12 position-relative">
                <img className="col-12 d-flex" src={img2} alt="" />
                <div className="overlay-color"></div>
                <div className="overlay-text">
                  <h1 className="d-flex">Real Estate</h1>
                </div>
              </div>
            </div>
            <div className="container-fluid m-2 text-light pt-5">
              <div className="row gap-4 p-4">
                {/* container1 */}
                <div className="col-12 col-lg-8 mb-5 ">
                  <div className="img col-12 pb-4">
                    <img className="img-fluid" src={img1} alt="" />
                  </div>
                  <div className="paragraph col-12 pb-2">
                    <p className="pb-4">
                      Facer verterem duo ea. Option feugait te mel, mea autem
                      dissentias ne. Porro adipisci sadipscing ne sit, augue
                      detracto senserit duo cu. Quas invidunt eu usu, eu esse
                      tibique iudicabit sit. Pro et case quidam. Mel nihil
                      nonumes ut, mei te epicuri scripserit, vel eu vide facilis
                      persequeris.
                    </p>
                    <p className="pb-3">
                      Cotidieque dissentiet liberavisse te sea. Qui ea liber
                      erroribus mediocritatem, pri eu ornatus feugait. Id tale
                      animal tincidunt eam. Dicam dolore definitiones duo cu, et
                      vix ornatus dolores deterruisset, pri ut reque inciderint.
                      His aperiam labitur appellantur in, laudem causae vim eu,
                      an summo percipit assueverit per.
                    </p>
                    <p className="pb-3">
                      Id duo discere sensibus corrumpit. Nec ad dolorum
                      intellegat vituperatoribus, vel prima discere cu, duo
                      nulla numquam an. No mazim veritus vel, facer
                      interpretaris te vis. Iuvaret quaerendum vim te, in putent
                      minimum suscipit est, duo ne duis veniam scripserit. Nam
                      duis partiendo accommodare in, sed debet pertinacia id. At
                      vim diam scribentur.
                    </p>
                  </div>

                  {/* box with img1 and text */}
                  <div className="row box mb-5 mt-2">
                    <div className="col-12 col-lg-6">
                      <img className="img-fluid1" src={img} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                      <h1 className="d-flex">
                        Providing Trusted Legal Representation
                      </h1>
                      <p>
                        Ex nostro impetus antiopam ius, ad ludus splendide sit.
                        Enim eleifend eu mei, quodsi accommodare no qui, id
                        dolores theophrastus duo. Has no tale mucius, vis
                        vivendum pericula dissentiunt ea. Eu vim torquatos
                        disputationi, ei cum habeo inermis. Et solum conceptam
                        usu, denique albucius ullamcorper ut has.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 mb-5">
                    <h1 className="pb-2">
                      We will make sure that your rights are respected
                    </h1>
                    <p>
                      Constituam liberavisse est, ei quo quod admodum dolores.
                      Mei eu unum utinam, choro dissentiet accommodare te est,
                      no probo facete commodo vim. Solet ridens ne sea, at sit
                      commune torquatos theophrastus. Sed ex blandit partiendo,
                      pri aliquid dolorem torquatos eu.
                    </p>
                  </div>
                </div>

                {/* container2 */}
                <div className="col-12 col-lg-3 mt-3 mb-5 pb-4">
                  <div className="container3">
                    <div className="container4 mb-5 text-start">
                      <h1>Latest Articles</h1>
                      <ul>
                        <li>
                          <a href="">Business Litigation</a>
                        </li>
                        <li>
                          <a href="">Real Estate</a>
                        </li>
                        <li>
                          <a href="">Insurance Coverage</a>
                        </li>
                        <li>
                          <a href="">Medical Malpractice</a>
                        </li>
                        <li>
                          <a href="">Injury Litigation</a>
                        </li>
                        <li>
                          <a href="">Family Law</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 p-4 mb-5 d-flex flex-wrap justify-content-center align-items-center text-start border m-1">
                      <p>Contact us today for a free consultation...</p>
                      <h3>1-800-111-2222</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container5 container col-12 d-flex flex-column justify-content-center text-center mt-4">
                <h1 className="container3h1 p-3">
                  We are always looking for new partners
                </h1>
                <p className="container3p pb-5">
                  If you are interested to work with us contact our office. Cu
                  qui inani aeque fabulas, dicant consetetur te eum. Est ne
                  viris saperet. Quas affert cu duo. Sed vitae maiestatis id,
                  mea ut consetetur contentiones. Civibus consequuntur.
                </p>
              </div>
              <div className="button col-12 d-flex container justify-content-center mb-5 pb-5">
                <button>Contact Us</button>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
