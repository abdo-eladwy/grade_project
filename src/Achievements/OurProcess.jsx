import React from "react";
import "./OurProcess.scss";
// import img from "./case-1.jpg";
// import img2 from "./case-s-800x550.jpg";
// import img3 from "./case-2.jpg";

// export default function OurProcess() {
//   return (
//     <div  style={{background:'#0e1219'}}>
//       <div className="container col-12 d-flex  justify-content-center text-center text-white pt-4">
//         <h1 className="col-12" >Our Process</h1>
//         <h5 className="hh5 pb-3">Let us guide you</h5>
//       </div>
//       <div className="container col-12 mb-5 mt-5 pb-3 container d-flex justify-content-between align-content-center align-items-center text-white">
//         <div className=" part1 col-lg-6 col-md-12 col-sm-12">
//           <h5 className="hh5 pb-2">STEP 1</h5>
//           <h1 className="pb-4">Listen Your Case</h1>
//           <p>
//             Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
//             inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
//             corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
//             mei veri dolorum luptatum, dicta legimus eloquentia.
//           </p>
//         </div>
//         <div className=" part2 col-lg-6 col-md-12 col-sm-12 ">
//           <img src={img} alt="" />
//         </div>
//       </div>
//       <div className="prtt container col-12 mb-5 mt-5 pb-5 container d-flex justify-content-center align-content-center align-items-center text-white">
//         <div className=" part3 col-lg-6 col-md-12 col-sm-12 ">
//           <img src={img2} alt="" />
//         </div>
//         <div className=" part4 col-lg-6 col-md-12 col-sm-12">
//           <h5 className="hh5 pb-2">STEP 2</h5>
//           <h1 className="pb-4">Approach and Vision</h1>
//           <p>
//             Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
//             inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
//             corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
//             mei veri dolorum luptatum, dicta legimus eloquen
//           </p>
//         </div>
//       </div>
//       <div className="container col-12  mt-5 pb-5 container d-flex  justify-content-center align-content-center align-items-center text-white">
//         <div className=" part5 col-lg-6 col-md-12 col-sm-12 pb-5">
//           <h5 className="hh5 pb-2">STEP 3</h5>
//           <h1 className="pb-4">Win the Case</h1>
//           <p>
//             Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
//             inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
//             corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
//             mei veri dolorum luptatum, dicta legimus eloquentia
//           </p>
//         </div>
//         <div className=" part6 col-lg-6 col-md-12 col-sm-12 pb-5">
//           <img src={img3} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }
 
export default function OurProcess() {
  return (
    <div className="col-12 bg-dark text-light sec_content d-flex justify-content-center align-content-center ">
      <div className="container col-12 ">
        <div className="col-12  d-flex flex-wrap  parent1 ">
          <div className="col-12 col-md-6 images2">
            <img
              src="https://matchthemes.com/demowp/volenti/wp-content/uploads/case-1.jpg"
              alt="#"
              className="h-100 w-100 "
            />
          </div>
          <div className="col-12 col-md-6  pt-3 child child1">
            <span>STEP 1</span>
            <h2 className="mt-3">Listen YOur Case</h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
              Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
              inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad
              mea corrumpit imperdiet liberavisse, no nam sint quidam
              definiebas. Id mei veri dolorum luptatum, dicta legimus
              eloquentia.
            </p>
          </div>
        </div>
        <div className="col-12   d-flex flex-wrap parent2">
          <div className="col-12 col-md-6 pt-3 child1">
            <span>STEP 2</span>
            <h2 className="mt-3">Approach And Vision</h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
              Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
              inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad
              mea corrumpit imperdiet liberavisse, no nam sint quidam
              definiebas. Id mei veri dolorum luptatum, dicta legimus
              eloquentia.
            </p>
          </div>
          <div className="col-12 col-md-6 images2  child">
            <img
              src="https://matchthemes.com/demowp/volenti/wp-content/uploads/case-1.jpg"
              alt="#"
              className="h-100 w-100"
            />
          </div>
        </div>
        <div className="col-12  d-flex flex-wrap parent3">
          <div className="col-12 col-md-6 images2">
            <img
              src="https://matchthemes.com/demowp/volenti/wp-content/uploads/case-1.jpg"
              alt="#"
              className="h-100 w-100"
            />
          </div>
          <div className="col-12 col-md-6 pt-3 child child1 ">
            <span>STEP 3</span>
            <h2 className="mt-3">Win the Case </h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
              Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
              inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad
              mea corrumpit imperdiet liberavisse, no nam sint quidam
              definiebas. Id mei veri dolorum luptatum, dicta legimus
              eloquentia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
