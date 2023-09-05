import React from "react";
import headerLogo from "../../asseds/logo.svg";
import socialLogo from "../../asseds/Slogo.svg";
import facebook from "../../asseds/Facebook.svg";
import Netlogo from "../../asseds/Net.svg";
import linkdin from "../../asseds/Linkedin.svg";
import inst from "../../asseds/Insta.svg";
import Be from "../../asseds/Belogo.svg";
import dial from "../../asseds/Dial.svg";
import Image from "next/image";
import page2icon3 from "../../asseds/Secondpageicon3.svg";
import "./NavBar.css";
import Link from "next/link";
import Script from "next/script";
const NavBar = () => {
  return (
    <>
      <div className="position-relative bg">
        <div className="container">
          <div className="row pt-3">
            <div className="col-md-6 display">
              <Image src={socialLogo} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="float-end display">
                <Image src={facebook} />
                <Image src={Netlogo} />
                <Image src={linkdin} />
                <Image src={inst} />
                <Image src={Be} />
                <Image src={dial} />
              </div>
            </div>
          </div>

          <div>
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <Image src={headerLogo} />
              </a>
              <button
                class="navbar-toggler nav-bg text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="fw-bold nav-padding nav-font navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li>
                    <Link className="font" href="/Pages/homePage">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#About">About US </Link>
                  </li>
                  <li>
                    <Link href="#Skills">OUR AGENTS</Link>
                  </li>
                  <li>
                    <Link href="/Pages/Properties">PROPERTIES</Link>
                  </li>
                  <li>
                    <Link href="#Contact">GALLERY</Link>
                  </li>
                  <li>
                    <Link href="#Contact">BLOG</Link>
                  </li>
                  <li>
                    <Link href="#Contact">CONTACT US</Link>
                  </li>
                  <li>
                    <Link href="#Contact">SEARCH</Link>
                  </li>
                </ul>
                <button className="bg-transparent nav-btn">Add Listing</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="hero-align position-absolute top-50 start-50 translate-middle text-white ps-3">
          <h1 className="py-2">Find Your Dream Home</h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>

        <div className="container position-card translate-middle-x">
          <div className="container-fluid">
            <div className="row bg-color">
              <div className="col-md-3">
                <div className="ps-4">
                  <h5>Locations</h5>
                  <span>Select your city</span>
                  <Image src={page2icon3} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="border-card ps-3 card-p">
                  <h5>Property Type</h5>
                  <span>Select property type</span>
                  <Image src={page2icon3} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="border-card ps-3 card-p">
                  <h5>Rent Range</h5>
                  <span>Select rent range</span>
                  <Image src={page2icon3} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="ps-5 pt-3 border-card">
                  <button className="btn1">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
};

export default NavBar;
