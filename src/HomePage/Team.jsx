import React from 'react'
import "./Team.scss"
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className='section3 col-12'>
        <div className='section3content container col-12  pt-3'>
            <span className=' text-center  text-danger col-12' style={{fontSize:'16px',fontWeight:'700'}}>{t("span1")} </span>
            <h2 className='h5 text-center col-12 p-3 mb-5'style={{fontSize:'48px',fontWeight:'700'}} >{t("h31")} </h2>
            <div className='col-12 d-flex flex-wrap '>
               <div className='cardss col-12 col-md-6  col-lg-3 text-center '>
                <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-2.jpg" alt="#"  className='col-12'/>
                <p className='text-danger'>{t("carouselp24")}</p>
                <h2 className='h5 p-2'style={{fontSize:'24px',fontWeight:'700'}}>{t("h32")}</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-7.jpg" alt="#" className='col-12' />
                <p className='text-danger'>{t("carouselp25")} </p>
                <h2 className=' h5 p-2 'style={{fontSize:'24px',fontWeight:'700'}}>{t("h33")}</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center  '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-1.jpg" alt="#" className='col-12' />
                <p className='text-danger'>{t("carouselp25")} </p>
                <h2 className='h5 p-2'style={{fontSize:'24px',fontWeight:'700'}}>{t("h34")}</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-6.jpg" alt="#" className='col-12' />
                <p className='text-danger'>{t("carouselp26")}</p>
                <h2 className=' h5 p-2'style={{fontSize:'24px',fontWeight:'700'}}>{t("h35")}</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
            </div>
            <button className=' col-5 col-m-3 col-lg-2 rounded-0' style={{fontSize:'17px',fontWeight:'700'}}>{t("button2")}</button>
        </div>
      
    </div>
  )
}
