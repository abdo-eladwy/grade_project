import React from 'react'
import"./Input.scss"

export default function Input() {
  return (
    <div className='section1 col-12  '>
     <div className='section1content col-12 container d-flex flex-wrap'>
     <div className='col-12 col-md-6 p-3'>
        <span>CONTACT</span>
        <h2>Schedule A Free Consultation</h2>
        <p>Let’s work together and discuss your case.&nbsp; Id errem petentium moderatius nam, ei malis munere recusabo vel, quo cu debet zril conceptam.</p>
        <p>Dolor sit amet, rebum corpora erroribus eos ad, unum praesent definiebas cu eam. Nam an soleat utroque blandit.</p>
     </div>
     <div className='form col-12 col-md-6 d-flex flex-column gap-3 p-3'>
        <input type="text" placeholder='Name'required />
        <input type="text" placeholder='Email'required/>
        <input type="text" placeholder='Phone'required />
        <textarea placeholder='Enter Message' ></textarea>
        <button className='col-7 col-md-6 col-lg-4'>Send Messages</button>
     </div>
     </div>
    </div>
  )
}
