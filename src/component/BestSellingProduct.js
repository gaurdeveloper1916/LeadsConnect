import React from 'react'
import bestSelling from '../images/bestselling.webp'
import '../../src/App.css'
function BestSellingProduct() {
  return (
   <>
    <div className="nutrition_way">
        <div className="card my-4">
        <div className='position-relative'>
        <hr className='my-5'></hr>
        <h4 className="cat_head d-flex align-items-center justify-content-center position-absolute" style={{ width: 'max-content'}}>Best  <strong className="text-danger">Selling Products</strong></h4>
      </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 col-sm-6 mt-2 px-5">
                <div className="card">
                  <img src={bestSelling} className="px-2 py-2" alt="Card image cap" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mt-2 px-5">
                <div className="card">
                  <img src={bestSelling} className="px-2 py-2" alt="Card image cap" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mt-2 px-5">
                <div className="card">
                  <img src={bestSelling} className="px-2 py-2" alt="Card image cap" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mt-2 px-5">
                <div className="card">
                  <img src={bestSelling} className="px-2 py-2" alt="Card image cap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default BestSellingProduct