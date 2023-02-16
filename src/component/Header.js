import React, { useState } from "react";
import logoImage from "../images/logo.png";
import "../../src/App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Checkout from "./Checkout";
import { MdLocationOn } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
function Header({ addedItems, setAddedItem, removeItem }) {
  return (
    <nav
      className="navbar position-sticky top-0 navbar-expand-lg navbar-light bg-white px-4"
      style={{ zIndex: "999" }}
    >
      <a className="navbar-brand" href="#">
        <img src={logoImage} width={100} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse allign-items-start  adjust-location"
        id="navbarSupportedContent"
      >
        <InputGroup
          className="address"
          style={{ width: "12rem", marginRight: "10px" }}
        >
          <InputGroup.Text id="basic-addon1">
            <MdLocationOn />
          </InputGroup.Text>

          <Form.Control
            placeholder="Enter Address"
            aria-label="address"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className=" " style={{ width: "15rem" }}>
          <Form.Control
            placeholder="Search for Products"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <BiSearch />
          </InputGroup.Text>
        </InputGroup>
        <ul className="navbar-nav ms-auto xl-ms-0 ">
          <li className="nav-item dropdown mt-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-1" href="#">
              Recipes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-1 " href="#">
              Partner With Us
            </a>
          </li>

          <li className="nav-item mt-1">
            <a className="nav-link ms-0 xl-ms-2 " href="#">
              Signup / Login
            </a>
          </li>
          <li className="nav-item mt-1">
            <Checkout
              addedItems={addedItems}
              setAddedItem={setAddedItem}
              removeItem={removeItem}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
