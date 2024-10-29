import React from 'react'
import "./Team.scss"
export default function Team() {
  return (
    <div className='section3 col-12'>
        <div className='section3content container col-12  pt-3'>
            <span className=' text-center  text-danger col-12'>LAWYERS</span>
            <h2 className='h5 text-center col-12 p-3 mb-5' >Meet Our Team</h2>
            <div className='col-12 d-flex flex-wrap '>
               <div className='cardss col-12 col-md-6  col-lg-3 text-center '>
                <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-2.jpg" alt="#"  className='col-12'/>
                <p className='text-danger'>Founder</p>
                <h2 className='h5 p-2'>Sarah Barrett</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-7.jpg" alt="#" className='col-12' />
                <p className='text-danger'>Partner</p>
                <h2 className=' h5 p-2 '>Michale Holmes</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center  '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-1.jpg" alt="#" className='col-12' />
                <p className='text-danger'>Partner</p>
                <h2 className='h5 p-2'>Teresa Perkins</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
               <div className='cardss col-12 col-md-6 col-lg-3 text-center '>
               <img src="https://matchthemes.com/demowp/volenti/wp-content/uploads/lawyer-6.jpg" alt="#" className='col-12' />
                <p className='text-danger'>Legal Assistant</p>
                <h2 className=' h5 p-2'>Samuel Johnson</h2>
                <span className=' d-block text-center p-4' >(000)111-2222</span>
               </div>
            </div>
            <button className=' col-5 col-m-3 col-lg-2'>View More</button>
        </div>
      
    </div>
  )
}
