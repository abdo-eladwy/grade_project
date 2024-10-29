import "bootstrap/dist/css/bootstrap.min.css";
import './SlideImage.css'
import slider1 from "./slider-3.jpg"; // استيراد صورة للسلايدر
import slider2 from "./slider-2.jpg"; // استيراد صورة للسلايدر
import slider3 from "./slider-1.jpg"; // استيراد صورة للسلايدر
import { Link } from "react-router-dom";
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
                <h2 className="text-white ">خبرة شركات المحاماة الكبرى</h2>
                <p style={{lineHeight:'30px'}}>
                تلتزم شركتنا بأعلى معايير التميز القانوني، مستفيدة من سنوات طويلة من الخبرة التي مكنتنا من تحقيق نتائج إيجابية ومستدامة لعملائنا في قضايا معقدة
                </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                  تعرف المزيد
                </Link>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">الابتكار والفعالية</h2>
                <p style={{lineHeight:'30px'}}>
                نحن رواد في تقديم حلول قانونية مبتكرة وشاملة، مدعومين بخبرة كبيرة في حل النزاعات بفعالية وتوفير حماية قانونية لعملائنا على مر السنين
                </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slider1} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white"> تقديم الاستشارات القانونية</h2>
                <p style={{lineHeight:'30px'}}>
                تتميز شركتنا بتاريخ طويل من النجاحات في تقديم الاستشارات القانونية المتخصصة، وذلك بفضل فريق من المحامين المخضرمين الذين يمتلكون خبرات واسعة في مختلف المجالات القانونية     
                 </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                  Learn More
                </Link>
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
