import React from 'react'
import categoryImage from '../images/category.webp'
import '../../src/App.css'
function ShopByCategory() {
  return (
    <>
    <div className="category">
        <div className="card mt-3">
          <div className="card-body">
            <h4>Shop by <span className="text-danger">Categories</span></h4>
            <div className="container">
              <div className="row my-3">
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <img src={categoryImage} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopByCategory