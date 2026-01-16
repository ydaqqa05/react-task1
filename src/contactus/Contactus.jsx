import React from 'react'
import style from "./contactus.module.css"

export default function Contactus() {
  return (
    <section className="py-5">
      <div className="container">

        <h1 className={`${style.big_font} text-center mt-5`}>
          CONTACT ME
        </h1>

        <div className={style.star_divider}>
          <div className={style.line}></div>
          <div className={style.star}>★</div>
          <div className={style.line}></div>
        </div>

        <div className="d-flex flex-column align-items-center mt-5">

          <div className="form-floating mb-3 w-75">
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="fullName"
              placeholder="Full Name"
            />
            <label htmlFor="fullName">Full Name</label>
            
          </div>

          <div className="form-floating mb-3 w-75">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email">Email address</label>
            
          </div>

          <div className="form-floating mb-3 w-75">
            <input
              type="tel"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="phone"
              placeholder="Phone Number"
            />
            <label htmlFor="phone">Phone Number</label>
            
          </div>

          <div className="form-floating mb-3 w-75 ">
            <textarea
              className={`${style.form_control} form-control border-0 border-bottom rounded-0 shadow-none `}
              id="message"
              placeholder="Message"
             
            ></textarea>
            <label htmlFor="message">Message</label>
          
          </div>
          <div className="w-75">
  <button className={`${style.download_btn} text-white`}>
    Send
  </button>
</div>

        </div>

      </div>  
    </section>
  )
}
