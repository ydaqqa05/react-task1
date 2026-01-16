import React from 'react'
import style from './portfolio.module.css'
import Image1 from './../assets/imgs/cabin.png'
import Image2 from './../assets/imgs/cake.png'
import Image3 from './../assets/imgs/circus.png'
import Image4 from './../assets/imgs/game.png'
import Image5 from './../assets/imgs/safe.png'
import Image6 from './../assets/imgs/submarine.png'
export default function Portfolio() {
  return (
    <>
    <div className=' py-5'>
        <h1 className={`${style.big_font} pt-5 text-center  `}>Portfolio</h1>
 <div className={`${style.star_divider}`}>
  <div className={`${style.line}`}></div>
  <div className={`${style.star}`}>★</div>
  <div className={`${style.line}`}></div>
</div>
<div className="portfolio">
<div className="container mt-5">
 <div className="row g-5">
    <div className='col-md-4 '> <img src={Image1} className='img-fluid rounded-3' /></div>
    <div className='col-md-4 '><img src={Image2} className='img-fluid  rounded-3' /></div>
    <div className='col-md-4 '><img src={Image3} className='img-fluid rounded-3'/></div>
    <div className='col-md-4 '><img src={Image4} className='img-fluid rounded-3' /></div>
    <div className='col-md-4 '><img src={Image5} className='img-fluid rounded-3'/></div>
    <div className='col-md-4 '><img src={Image6} className='img-fluid rounded-3'/></div>
    </div>
    </div>

</div>
    </div>
    </>
  )
}
