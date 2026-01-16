import React from 'react'
import style from './../about/about.module.css'

export default function About() {
  return (
    <section className={style.about}>
      <div className="container py-5 text-white">

        <h1 className={`${style.big_font} text-center mb-4`}>
          ABOUT
        </h1>

        <div className={style.star_divider}>
          <div className={style.line}></div>
          <div className={style.star}>★</div>
          <div className={style.line}></div>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-md-5 ">
            <h5 className={style.about_text}>
              Freelancer is a free bootstrap theme 
              created by Start Bootstrap.The
               download includes the complete source 
               files including HTML,CSS, and
                JavaScript as well as optional SASS 
                stylesheets for easy customization.
            </h5>
          </div>

          <div className="col-md-4">
            <h5 className={style.about_text}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact form
              to make it fully functional!
            </h5>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className={style.download_btn}>
          <svg
  className="me-2"
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
>
  <path
    fill="currentColor"
    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
  />
</svg>

             Free Download!
          </button>
        </div>

      </div>
    </section>
  )
}
