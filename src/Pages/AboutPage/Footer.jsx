import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer col-12 d-flex align-content-center">
      <div className="footercontent container  d-flex p-0 flex-wrap  ">
        <div className="col-12 c col-md-6 col-lg-3 p-3 prt1 ">
          <h5>About Us</h5>
          <p>
            We are extremely proud nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit t porro veritus vis, veniam vocibus neglegentur.
          </p>
          <p>
            P: 1-800-111-222 <br /> E:contact@example.com
          </p>
        </div>
        <div className="col-12  col-md-6 col-lg-3 p-3 prt2">
          <h5>Latest Articles</h5>
        
         <ul>
            <li>
              <a href="#">Social Media and Personal Injury Claim</a>
            </li>
            <li>
              <a href="#">Regain Control of Your Finances</a>
            </li>
            <li>
              <a href="#">New Location in Town Center</a>
            </li>
            <li>
              <a href="#">Learn About Domestic Violence Defense</a>
            </li>
            <li>
              <a href="#">Who Cause More Car Accidents</a>
            </li>
          </ul>
         
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-3 prt3">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 col-md-6 p-3 prt4">
          <h5>Social</h5>

         
         <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instgram</a>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}
