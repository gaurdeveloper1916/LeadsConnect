import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";
import "../../src/App.css";
import CardList from "./CardList";
function  Checkout({ addedItems, setAddedItem, removeItem }) {
  const total = addedItems
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{ position: "relative" }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a to="/add" className="nav-link" href="#">
              <BsFillCartCheckFill
                style={{
                  height: "20px",
                  marginRight: "5px",
                  fontSize: "30px",
                  color: "black",
                }}
                variant="primary"
                onClick={handleShow}
                className="me-2"
              ></BsFillCartCheckFill>
              <span id="cart-count"> {addedItems.length}</span>
            </a>
          </li>
        </ul>
      </div>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel" className="text-danger" >
                Your Cart
              </h5>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            {addedItems.length != 0 ? (
              addedItems.map((item, i, itemsArr) => (
                <CardList
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  setAddedItem={setAddedItem}
                  itemsArr={itemsArr}
                />
              ))
            ) : (
             <div className="parent">
              <div className="child">
                <h1>Your Cart Is Empty</h1>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>
        {/* footer of the cart */}
        <Offcanvas.Title>
         {
          addedItems.length !=0 ?  <div className="offcanvas-footer">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6 px-0 title text-secondary">
                  <p>Total MRP Price of {addedItems.length} Item</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 px-0 price text-secondary">
                  <p>₹{total}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6 px-0 title text-secondary">
                  <p>Discount</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 px-0 price text-secondary">
                  <p>-$0.00</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6 px-0 title text-secondary">
                  <p>
                    Offer <span className="text-primary">(view offers)</span>
                  </p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 px-0 price text-secondary">
                  <p>₹000.00</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 col-sm-10 col-10 px-0 extra text-secondary">
                  <p>Shipping &amp; taxes calculated at checkout.</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6 px-0 title text-secondary">
                  <p>Total Amount</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 px-0 price text-secondary">
                  <p>₹{total}</p>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>:""
         }
        </Offcanvas.Title>
      </Offcanvas>
    </>
  );
}

export default Checkout;
