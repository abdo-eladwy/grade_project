import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './History.css'
import { Link } from 'react-router-dom';
export default function History() {
  return (
    <div
        className="componentcomponent col-12"
        style={{ background: "#0e1219" }}
      >
        <div className="component col-12 d-flex justify-content-center flex-wrap text-light py-5">
          <div className="component1 col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start p-5 mb-5">
            <h6
              className="text-uppercase pb-4 text-end"
              style={{ color: "rgb(255, 102, 102)" }}
            >
             نبذة تاريخية
            </h6>
            <h1 className="mb-5 pb-5 ">
            نحن شركة على الحوسنى، وهي شركة محاماة حائزة على جوائز
            </h1>
            <h4 className="mb-2 pb-3 text-end">
            لقد ساعدنا العملاء الكبار والصغار منذ عام 1975.
            </h4>
            <p className="mb-4">
            مرحبًا بكم في شركة الحوسنى، حيث يجتمع التميز والاحترافية في عالم المحاماة. نحن شركة محاماة حائزة على جوائز، نقدم خدمات قانونية متكاملة تلبي احتياجاتكم بأعلى معايير الجودة والتميز
            </p>
            <Link to="/Achievement">
              <button className="btn-outline-light">اقرا المزيد</button>
            </Link>
          </div>

          <div className="component2 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="component3 row w-100 mb-4 d-flex justify-content-between align-items-start">
              <div className="component5 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
                <h4>
                  <span>1975</span>
                </h4>
                <h1 className="pb-4">مؤسسة</h1>
                <p className="pb-5">
                تقديم الحلول القانونية المبتكرة والمتكاملة، مكرسة لتحقيق العدالة والتميز في كل خدمة تقدمها
                </p>
              </div>
              <div className="component6 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
                <h4>
                  <span>2004</span>
                </h4>
                <h1 className="pb-4">100 محامي</h1>
                <p className="pb-5">
                 يجمع بين الخبرة القانونية والشغف لحماية حقوق العملاء، مما يجعله شريكًا موثوقًا في جميع القضايا القانونية
                </p>
              </div>
            </div>

            <div className="component4 row w-100  mb-4 d-flex justify-content-between align-items-start">
              <div className="component7 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
                <h4>
                  <span>1990</span>
                </h4>
                <h1 className="pb-4">افضل مكتب</h1>
                <p className="pb-5">
                مكتبنا يمثل انطلاقة مبتكرة في عالم المحاماة، حيث نقدم خدمات قانونية متخصصة تتماشى مع أحدث الاتجاهات، مع التركيز على تقديم حلول مخصصة تلبي احتياجات كل عميل
                </p>
              </div>
              <div className="component8 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
                <h4> 
                  <span>2019</span>
                </h4>
                <h1 className="pb-4">الجوده</h1>
                <p className="pb-5">
                نحن في أفضل مكتب محاماة نتميز بخبرة قانونية رائدة، حيث نوفر لعملائنا استشارات متخصصة وحلولًا فعالة تضمن تحقيق نتائج إيجابية، مع التزامنا التام بالشفافية والاحترافية في جميع تعاملاتنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
