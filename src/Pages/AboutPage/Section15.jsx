import React from "react";
import "./Section15.scss"
export default function Section15() {
  return (
    <div className="col-12   text-light d-flex justify-content-center align-content-center pt-5    p-lg-4" style={{background:'#000000'}}>
      <div className="container col-12 d-flex flex-wrap justify-content-between allcontnt mb-5 mt-4">
        <div className=" col-12 col-lg-6  ">
          <img
            src="https://matchthemes.com/demowp/volenti/wp-content/uploads/case-studies-3-800x550.jpg"
            alt="#"
            className=" w-100"
            style={{objectFit: "content"}}
          />
        </div>
        <div className="col-12 col-lg-6 " style={{paddingLeft:'45px'}}>
          <span className=" d-block d-lg-inline mt-5 " style={{color:'#ff6666', fontSize:'16px', fontWeight:'600'}}>Brief History</span>
          <h2 className="mt-3" style={{fontSize:'48px', fontWeight:'700'}}>Bio & Education</h2>
          <p className="mt-5" style={{fontSize:'16px', fontWeight:'600'}}>
            Lorem ipsum dolor sit amet, expetenda ullamcorper quo et, possim
            sanctus definitionem pri ex. Falli zril omnium mel et, altera option
            ocurreret nec no, at vis eligendi ocurreret mediocritatem. Eam
            epicuri omnesque postulant an, quo et omnium denique tacimates.
            Efficiantur signiferumque et vim, rebum omittam.
          </p>
          <p className="mt-5" style={{fontSize:'16px', fontWeight:'600'}}>
            His quaeque adipiscing ea, cum ad partem dolores. Quod dolorum
            voluptaria ei mel. Pro evertitur assueverit ad, cum in eius senserit
            salutatus. Qui quas eleifend no. Natum accommodare est ad, cu mea
            virtute noluisse assentior.
          </p>
        </div>
      </div>
    </div>
  );
}
