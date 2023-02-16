import React from 'react'
import onceupon from '../images/onceupon.jpg'
import '../../src/App.css'
function OnceUponAFlavour() {
  return (
    <div className="deal_of_day">
    <div className="card my-4">
      <div className='position-relative'>
        <hr className='my-5'></hr>
        <h4 className="cat_head d-flex align-items-center justify-content-center position-absolute" style={{ width: 'max-content'}}>Once Upon  <strong className="text-danger"> a Flavor</strong></h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-sm-6 mt-2">
            <div className="card">
              <img src={onceupon} className="px-2 py-2" alt="Card image cap" />
              <hr />
              <div className="card-body">
                <p className="card-title d-flex justify-content-center card_title">Once Upon A Flavor Mixed Achar</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>4.0 <i className="fa fa-star text-warning" /></p>
                  </div>
                  {/* <div className="col-3"></div> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>200gm</p>
                  </div>
                </div>
                <h5 className="card-text">$80.00</h5>
                <p className="card-text">(Inclusive of all taxes)</p>
                <div className='d-flex justify-content-between'>
                <button className="btn btn-primary btn-sm float-left" id="left" style={{color: 'white'}}>
                  Left Button
                </button>
                {/* <input type="password" className="form-control float-left input-group-sm" id="exampleInputPassword1" placeholder="Password" width="10"> */}
                <a href className="btn btn-danger btn-sm float-right"><i className="fa fa-shopping-cart" /> ADD</a>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <div className="card">
              <img src={onceupon} className="px-2 py-2" alt="Card image cap" />
              <hr />
              <div className="card-body">
                <p className="card-title d-flex justify-content-center card_title">Once Upon A Flavor Mixed Achar</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>4.0 <i className="fa fa-star text-warning" /></p>
                  </div>
                  {/* <div className="col-3"></div> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>200gm</p>
                  </div>
                </div>
                <h5 className="card-text">$80.00</h5>
                <p className="card-text">(Inclusive of all taxes)</p>
                <div className='d-flex justify-content-between'>
                <button className="btn btn-primary btn-sm float-left" id="left" style={{color: 'white'}}>
                  Left Button
                </button>
                {/* <input type="password" className="form-control float-left input-group-sm" id="exampleInputPassword1" placeholder="Password" width="10"> */}
                <a href className="btn btn-danger btn-sm float-right"><i className="fa fa-shopping-cart" /> ADD</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <div className="card">
              <img src={onceupon} className="px-2 py-2" alt="Card image cap" />
              <hr />
              <div className="card-body">
                <p className="card-title d-flex justify-content-center card_title">Once Upon A Flavor Mixed Achar</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>4.0 <i className="fa fa-star text-warning" /></p>
                  </div>
                  {/* <div className="col-3"></div> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>200gm</p>
                  </div>
                </div>
                <h5 className="card-text">$80.00</h5>
                <p className="card-text">(Inclusive of all taxes)</p>
                <div className='d-flex justify-content-between'>
                <button className="btn btn-primary btn-sm float-left" id="left" style={{color: 'white'}}>
                  Left Button
                </button>
                {/* <input type="password" className="form-control float-left input-group-sm" id="exampleInputPassword1" placeholder="Password" width="10"> */}
                <a href className="btn btn-danger btn-sm float-right"><i className="fa fa-shopping-cart" /> ADD</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <div className="card">
              <img src={onceupon} className="px-2 py-2" alt="Card image cap" />
              <hr />
              <div className="card-body">
                <p className="card-title d-flex justify-content-center card_title">Once Upon A Flavor Mixed Achar</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>4.0 <i className="fa fa-star text-warning" /></p>
                  </div>
                  {/* <div className="col-3"></div> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                    <p>200gm</p>
                  </div>
                </div>
                <h5 className="card-text">$80.00</h5>
                <p className="card-text">(Inclusive of all taxes)</p>
                <div className='d-flex justify-content-between'>
                <button className="btn btn-primary btn-sm float-left" id="left" style={{color: 'white'}}>
                  Left Button
                </button>
                {/* <input type="password" className="form-control float-left input-group-sm" id="exampleInputPassword1" placeholder="Password" width="10"> */}
                <a href className="btn btn-danger btn-sm float-right"><i className="fa fa-shopping-cart" /> ADD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OnceUponAFlavour