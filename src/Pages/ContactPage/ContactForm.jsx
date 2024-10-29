import React from "react";
import "./Contact1.scss"
export default function Contact1() {
  return (
    <div className="col-12 bg-dark justify-content-center align-content-center p-3 pt-5 pb-5  text-light ">
      <div className="col-12 container d-flex flex-wrap p-0  ">
        <div className="col-12 col-lg-6 part1 d-flex flex-column gap-4 ">
          <div className="part1-1">
            <span>Contact Us</span>
            <h2>How Can We Help ?</h2>
          </div>
          <p className="part1-2 lh-lg">
            Lorem ipsum dolor sit amet, inani qualisque vim cu. Dicunt
            neglegentur suscipiantur no pro. Ut iusto percipit posidonium quo,
            quidam efficiendi id quo. Ne vel inermis nonumes docendi, ea mea
            omnesque intellegat inciderint.
          </p>
          <div className="part1-3 d-flex  flex-column flex-md-row justify-content-between pt-md-3 pb-md-3 ">
             <div className="">
               <a href="#" className="link">Phone</a>
                <h2>1-800-111-222</h2>
             </div>
             <div className="pt-3 pt-md-0">
             <a href="#" className="link">Email</a>
             <h2>contact@example.com</h2>
             </div>
          </div>
          <div className="part1-4 d-flex flex-column flex-md-row justify-content-between pb-md-5 pt-md-5">
            <div>
                <span>ADDRESS</span>
                <h2>40 Park Ave,<br />
                New York 70250</h2>

            </div>
            <div className="pt-3 pt-md-0">
                <span>Working Hours</span>
                 <h2>Mon-Sat: 10AM to 6PM <br />
                 Sn: Closed</h2>
                
            </div>
          </div>
        </div>
        
             <div className='col-12 col-lg-6 part2 d-flex flex-column p-lg-4 gap-5 pt-5 pt-md-0 '>
        <input type="text" placeholder='Name'required />
        <input type="text" placeholder='Email'required/>
        <input type="text" placeholder='Phone'required />
        <textarea placeholder='Enter Message' ></textarea>
        <button className='col-7 col-md-6 col-lg-6 m-md-auto m-0 m-lg-0 butt'>Send Messages</button>
     </div>
        </div>
      </div>
    // </div>
  );
}
