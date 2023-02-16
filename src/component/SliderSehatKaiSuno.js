import React from 'react'
import sliderImage1 from '../images/slider1.jpg'
import sliderImage2 from '../images/slider2.jpg'
import sliderImage3 from '../images/slider3.jpg'
import '../../src/App.css'
function SliderSehatKaiSuno() {
  return (
   <>
    <div className="card">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active px-2 py-2">
              <img className="d-block w-100" src={sliderImage1} alt="First slide" />
            </div>
            <div className="carousel-item px-2 py-2">
              <img className="d-block w-100" src={sliderImage1} alt="Second slide" />
            </div>
            <div className="carousel-item px-2 py-2">
              <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default SliderSehatKaiSuno