import React from 'react'
import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.webp'
import '../../src/App.css'
function Slider() {
  return (
    <div className="banner mt-3">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={banner1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={banner2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={banner3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Slider;