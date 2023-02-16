import React, { useEffect, useReducer } from "react";
import "../../src/App.css";
import { RiDeleteBin6Line } from 'react-icons/ri';

function reducer(state, action) {
  console.log(state);
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber == 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}

function CardList({ item, removeItem, setAddedItem, itemsArr }) {
  const [state, dispatch] = useReducer(reducer, item);
  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      itemArr.id == item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state]);
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-4">
            <img src={item.image} width={80} height={100} />
          </div>
          <div className="col-md-6 col-sm-6 col-6 px-0 cart_text">
            <p className="text-secondary">{item.title}</p>
            <div className="qty-container ">
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => {
                    dispatch({ type: "DECREASE" });
                  }}
                  className="item-qty"
                >
                  <i className="fa fa-minus" />-
                </button>
                <input
                  width="20%"
                  height="20px"
                  min="1"
                  value={item.addNumber}
                  className="item-qty white"
                ></input>
                <button
                  onClick={() => {
                    dispatch({ type: "INCREASE" });
                  }}
                  className="item-qty "
                >
                  <i className="fa fa-plus" />+
                </button>
              </div>
            </div>
            <h5 className="text-danger">₹{item.price}</h5>
            <p className="text-secondary">(Inclusive of all taxes)</p>
          </div>
          <div className="col-md-2 col-sm-2 col-2 px-0 d-flex justify-content-center">
           <RiDeleteBin6Line onClick={()=>{removeItem(item)}} style={{color:"#e26a5a"}}/>
            <a href="#" className="text-danger">
              <i className="fa fa-trash" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
