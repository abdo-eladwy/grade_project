import "bootstrap/dist/css/bootstrap.min.css";
import "./Boxs.css";
import img1 from "./fullscreen.jpg";
import img2 from "./custody-battle.jpg";

export default function Boxs() {
  return (
    <div>
      <div className="boxs col-12 d-flex flex-wrap text-light">
        <img className="box-img col-6" src={img1} alt="" />
        <div className="box-cont col-6  d-flex flex-column justify-content-center align-items-start align-content-center text-start p-5">
          <h6 className="mb-5">CULTURE</h6>
          <h1 className="mb-5 pb-5 ">We're Here to Help</h1>
          <p className="mb-3  d-flex flex-wrap">
            Quis velit nonumy nec ei, nec id quod dolores. Ei vivendo
            contentiones ius, quis choro suscipit duo ea. Te his vidit iudico,
            per et illud aeque timeam, ea pri novum euripidis. An eripuit
            ornatus eloquentiam per, ea alia impetus tractatos ius. No nam mazim
            postea appellantur, at simul meliore facilisi mel.
          </p>
          <p className="mb-5 pb-2 d-flex flex-wrap">
            Usu ea minim libris quidam, veniam propriae eos eu. Eu vim dico
            volutpat scripserit, vel graece prodesset at. Eloquentiam
            mediocritatem nam eu, elit placerat lucilius duo ei. Agam
            ullamcorper id est, cum rationibus vituperata no, nam ea diam dicta.
          </p>
          <a className="" href="">
            <button className="btn btn-outline-light">View More</button>
          </a>
        </div>

        <div className="box-cont col-6  d-flex flex-column justify-content-center align-items-start text-start p-5">
          <h6 className="mb-5">COMMUNITY</h6>
          <h1 className="mb-5 pb-5">Recognized For Excellence</h1>
          <p className="mb-3 pb-2 d-flex flex-wrap">
            Quis velit nonumy nec ei, nec id quod dolores. Ei vivendo
            contentiones ius, quis choro suscipit duo ea. Te his vidit iudico,
            per et illud aeque timeam, ea pri novum euripidis. An eripuit
            ornatus eloquentiam per, ea alia impetus tractatos ius. No nam mazim
            postea appellantur, at simul meliore facilisi mel.
          </p>
          <ul className="list-square mb-5 pb-2">
            <li>Best Law Firms 2018</li>
            <li>Super Lawyers, Excellence in Practice 2010-2018</li>
            <li>AVVO – Very Good 2018</li>
            <li>10 Best Attorneys Arizona</li>
          </ul>
          <a className="mb-5 pb" href="#">
            <button className="btn btn-outline-light">View More</button>
          </a>
        </div>
        <img className="box-img col-6" src={img2} alt="" />
      </div>
    </div>
  );
}
