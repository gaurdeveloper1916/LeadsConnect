import React from "react";
import "../../src/App.css";
import { BsCart4 } from "react-icons/bs";


function DealOfTheDay({ items, addItem }) {
  return (
    <>
      <div className="deal_of_day">
        <div className="card my-4">
          <div className="position-relative">
            <hr className="my-5"></hr>
            <h4
              className="cat_head d-flex align-items-center justify-content-center mx-auto position-absolute"
              style={{ width: "max-content" }}
            >
              Deal of <strong className="text-danger"> The Day</strong>
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              {items.map((item, i) => {
                return (
                  <div key={i} className=" col-md-3 col-sm-6 mt-2 item-cart ">
                    <div className=" card h-100 prod-card">
                      <img
                        src={item.image}
                        className="px-2 py-2 d-block mx-auto"
                        alt="Card image cap"
                        width="150px"
                        height="200px"
                      />
                      <hr />
                      <div className="card-body">
                        <div className="body-card-height">
                          <p
                            className="card-title d-flex justify-content-center card_title"
                            style={{ minHeight: "105px" }}
                          >
                            {item.title}
                          </p>

                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                              <p>
                                4.0 <i className="fa fa-star text-warning" />
                              </p>
                            </div>
                            {/* <div className="col-3"></div> */}
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                              <p>Clothes</p>
                            </div>
                          </div>
                        </div>
                        {/* <h5 className="card-text">kjs</h5> */}
                        {/* <p className="card-text">(Inclusive of all taxes)</p> */}
                        <div className="d-flex justify-content-between">
                          {/* <button
                            className="btn btn-primary btn-sm float-left"
                            id="left"
                            style={{ color: "white", width:'100px' }}
                          >
                            Left Button
                          </button> */}
                          <div className="input-group input-group-sm mb-3" style={{width:'70px'}}>
                            <div classNameclassName="input-group-prepend" style={{width:'30px'}}>
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                               style={{paddingLeft:'3px', fontSize:'12px' , fontWeight:'600'}}
                              >
                              Qty
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={1}
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              style={{padding:'4px',alignItems:"centre", textAlign:'center' , backgroundColor:'white'}}
                              readOnly
                            />
                          </div>
                          <a
                            id="right"
                            onClick={() => {
                              addItem(item);
                            }}
                            href
                            className="btn btn-danger btn-sm float-right"
                            style={{height:'32px'}}
                          >
                            <BsCart4 style={{marginBottom:"7px"}}/>
                            <i className="fa fa-shopping-cart" /> ADD TO CART
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealOfTheDay;


