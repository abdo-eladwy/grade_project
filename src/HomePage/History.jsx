import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './History.css'
export default function History() {
  return (
    <div
        className="componentcomponent col-12"
        style={{ background: "#0e1219" }}
      >
        <div className="component col-12 d-flex justify-content-center flex-wrap text-light py-5">
          <div className="component1 col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start text-start p-5 mb-5">
            <h6
              className="text-uppercase pb-4"
              style={{ color: "rgb(255, 102, 102)" }}
            >
              Brief History
            </h6>
            <h1 className="mb-5 pb-5">
              We're Volenti, an award-winning law firm
            </h1>
            <h4 className="mb-2 pb-3">
              We've helped clients large and small since 1975.
            </h4>
            <p className="mb-4">
              Aperiri hendrerit democritum ex nec. Sit ut causae referrentur,
              dolorum intellegam has ex, mel ad movet aperiam.
            </p>
            <a href="">
              <button className="btn-outline-light">Read More</button>
            </a>
          </div>

          <div className="component2 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="component3 row w-100 mb-4 d-flex justify-content-between align-items-start">
              <div className="component5 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
                <h4>
                  <span>1975</span>
                </h4>
                <h1 className="pb-4">Foundation</h1>
                <p className="pb-5">
                  Magna meliore moderatius ut eam, eum ei illud discere sanctus.
                  Posse officiis deterruisset sed cu, erat audire veritus.
                </p>
              </div>
              <div className="component6 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
                <h4>
                  <span>2004</span>
                </h4>
                <h1 className="pb-4">100 Attorneys</h1>
                <p className="pb-5">
                  Magna meliore moderatius ut eam, eum ei illud discere sanctus.
                  Posse officiis deterruisset sed cu, erat audire veritus.
                </p>
              </div>
            </div>

            <div className="component4 row w-100  mb-4 d-flex justify-content-between align-items-start">
              <div className="component7 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
                <h4>
                  <span>1990</span>
                </h4>
                <h1 className="pb-4">New Office</h1>
                <p className="pb-5">
                  Magna meliore moderatius ut eam, eum ei illud discere sanctus.
                  Posse officiis deterruisset sed cu, erat audire veritus.
                </p>
              </div>
              <div className="component8 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
                <h4> 
                  <span>2019</span>
                </h4>
                <h1 className="pb-4">Best Law Firm</h1>
                <p className="pb-5">
                  Magna meliore moderatius ut eam, eum ei illud discere sanctus.
                  Posse officiis deterruisset sed cu, erat audire veritus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
