import React from "react";
import "./page.css";
import Image from "next/image";
import headerLogo2 from "../../asseds/logo (1).svg";
import Script from "next/script";
import Link from "next/link";
const NavTwo = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <div>
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <Image src={headerLogo2} />
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
                    <Link class="font" href="/Pages/homePage">
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
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </div>
  );
};

export default NavTwo;
