import React from 'react'
import style from './hero.module.css'
import Image from './../assets/imgs/avataaars.svg'
export default function Hero() {
    return (
        <>
            <section className={`${style.bg_hero} vh-100`}>
                <div className="content d-flex flex-column justify-content-center align-items-center pt-5"><img src={Image} alt="" className={`${style.bg_size}`} />
                <h1 className={`${style.big_size} text-white `}>Start Bootstrap</h1>
                <div className={`${style.star_divider}`}>
  <div className={`${style.line}`}></div>
  <div className={`${style.star}`}>★</div>
  <div className={`${style.line}`}></div>
</div>
<h4 className='text-white'>Graphic Artist - Web Designer - Illustrator</h4>
                </div>

            </section>
        </>
    )
}
