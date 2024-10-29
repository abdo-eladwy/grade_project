import "bootstrap/dist/css/bootstrap.min.css";
import './Artical.css'
import icon1 from "./about-h24.png";
import icon2 from "./about-h26.png";
import icon3 from "./about-h25.png";
import icon4 from "./about-h23.png";
import { Link } from "react-router-dom";

export default function Artical() {
  return (
    <div>
         <div
        className="artical d-flex justify-content-center flex-wrap p-5 bg-dark g-4"
        style={{ backgroundColor: "#0e1219" }}
      >
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon1} alt="Image 1" className="img-fluiid mb-5" />
          <h1 className="mb-5">01. العدالة </h1>
          <p className="mb-4">
          تحقيق العدالة في القانون هو الضمان الأساسي لحماية حقوق الأفراد، حيث نعمل جاهدين لتطبيق القوانين بكل نزاهة ومساواة، لنخلق مجتمعا عادلاً يلتزم بالقيم الإنسانية          </p>
          <Link to="/AboutUs">اقرا المزيد → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon2} alt="Image 2" className="img-fluiid mb-5" />
          <h1 className="mb-5">02. التفاني</h1>
          <p className="mb-4">
          نلتزم في عملنا بروح التفاني التام، حيث نبذل قصارى جهدنا لتقديم أفضل الخدمات القانونية، ونضع احتياجات عملائنا في مقدمة أولوياتنا لضمان حقوقهم وتحقيق تطلعاتهم القانونية
          </p>
          <Link to="/Achievement">اقرا المزيد → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon3} alt="Image 3" className="img-fluiid mb-5" />
          <h1 className="mb-5">03. الخبرة</h1>
          <p className="mb-4">
          خبرتنا الواسعة تتيح لنا التعامل مع أعقد القضايا بكفاءة واحترافية، حيث نجمع بين المعرفة المتعمقة والإلمام بالتفاصيل القانونية، لنحقق أفضل النتائج لعملائنا على الدوام
          </p>
          <Link to="/Sections">اقرا المزيد → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon4} alt="Image 3" className="img-fluiid mb-5" />
          <h1 className="mb-5">04. الرؤيه</h1>
          <p className="mb-4">
          رؤيتنا تتمحور حول بناء علاقة قانونية قوية وموثوقة مع عملائنا، نعمل من خلالها على إيجاد حلول مبتكرة وفعّالة تدعم استقرارهم القانوني وتحقق أهدافهم طويلة المدى
          </p>
          <Link to="/OurVision">اقرا المزيد → </Link>
        </div>
      </div>
    </div>
  )
}
