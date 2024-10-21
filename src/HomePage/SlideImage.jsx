import "bootstrap/dist/css/bootstrap.min.css";
import './SlideImage.css'
import slider1 from "./slider-3.jpg"; // استيراد صورة للسلايدر
import slider2 from "./slider-2.jpg"; // استيراد صورة للسلايدر
import slider3 from "./slider-1.jpg"; // استيراد صورة للسلايدر
export default function SlideImage() {
  return (
    <div className="col-12 d-flex">
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={slider3} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white ">Big Law Firm Expertise</h2>
                <p>
                  Cum et labore appareat, te est nostrum eligendi adipisci. Tota
                  quas habeo eu vel. Vel autem apeirian primis.
                </p>
                <a className="btn btn-outline-light" href="#services">
                  Learn More
                </a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">Big Law Firm Expertise</h2>
                <p className="text-white">
                  هذا هو النص التفسيري الذي يشرح الصورة الثانية.
                </p>
                <a className="btn btn-outline-light" href="">
                  Learn More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slider1} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">عنوان السلايدر 3</h2>
                <p className="text-white">
                  هذا هو النص التفسيري الذي يشرح الصورة الثالثة.
                </p>
                <a className="btn btn-outline-light" href="#services">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
