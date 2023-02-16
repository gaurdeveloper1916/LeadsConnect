import React from 'react'
import '../../src/App.css'
function Footer() {
  return (
   <>
    <div className="footer mt-5">
        <footer className="page-footer font-small bg-white">
          <div className="container text-center text-md-left">
            <div className="row d-flex mx-2">
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-secondary">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-secondary">Tel: +91 999999999</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">Email: xzy@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">Address: xyz, India</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-secondary">SUPPORT &amp; POLICIES</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-secondary">Help &amp; Feedback</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">Quality Standards</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-secondary">KEEP IN TOUCH</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-secondary"><i className="fa fa-facebook-square" aria-hidden="true" /> Facebook</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary"><i className="fa fa-instagram" aria-hidden="true" /> Instagram</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary"><i className="fa fa-linkedin-square" aria-hidden="true" /> LinkedIn</a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary"><i className="fa fa-twitter-square" aria-hidden="true" /> Twitter</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-secondary">About Us</h5>
                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          <hr />
          {/* Footer Links */}
          {/* Copyright */}
          <div className="footer-copyright text-center py-3">Copyrights © A unit of BL Agro Industries Limited. All
            Rights Reserved. Powered by Leads Brand Connect | Version 2.5
          </div>
          {/* Copyright */}
        </footer>
      </div>
   </>
  )
}

export default Footer