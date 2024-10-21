import "bootstrap/dist/css/bootstrap.min.css";
import './Artical.css'
import icon1 from "./about-h24.png";
import icon2 from "./about-h26.png";
import icon3 from "./about-h25.png";
import icon4 from "./about-h23.png";

export default function Artical() {
  return (
    <div>
         <div
        className="artical d-flex justify-content-center flex-wrap p-5 bg-dark g-4"
        style={{ backgroundColor: "#0e1219" }}
      >
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon1} alt="Image 1" className="img-fluid mb-5" />
          <h1 className="mb-5">01. Justice </h1>
          <p className="mb-4">
            Doming viderer ut usu, eam mucius abhorreant voluptatum an. Invidunt
            gloriatur abhorreant cu duo, eam illum legendos.
          </p>
          <a href="yjyjyj">Read More → </a>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon2} alt="Image 2" className="img-fluid mb-5" />
          <h1 className="mb-5">02. Dedication</h1>
          <p className="mb-4">
            Doming viderer ut usu, eam mucius abhorreant voluptatum an. Invidunt
            gloriatur abhorreant cu duo, eam illum legendos.
          </p>
          <a href="#">Read More → </a>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon3} alt="Image 3" className="img-fluid mb-5" />
          <h1 className="mb-5">03. Experience</h1>
          <p className="mb-4">
            Doming viderer ut usu, eam mucius abhorreant voluptatum an. Invidunt
            gloriatur abhorreant cu duo, eam illum legendos.u
          </p>
          <a href="#">Read More → </a>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon4} alt="Image 3" className="img-fluid mb-5" />
          <h1 className="mb-5">04. Passionate​</h1>
          <p className="mb-4">
            Doming viderer ut usu, eam mucius abhorreant voluptatum an. Invidunt
            gloriatur abhorreant cu duo, eam illum legendos.
          </p>
          <a href="#">Read More → </a>
        </div>
      </div>
    </div>
  )
}
