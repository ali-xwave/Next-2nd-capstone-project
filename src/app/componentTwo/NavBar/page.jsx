import React from "react";
import "./page.css";
import socialLogo from "../../asseds/Slogo.svg";
import facebook from "../../asseds/Facebook.svg";
import Netlogo from "../../asseds/Net.svg";
import linkdin from "../../asseds/Linkedin.svg";
import inst from "../../asseds/Insta.svg";
import Be from "../../asseds/Belogo.svg";
import dial from "../../asseds/Dial.svg";
import Lineimg from "../../asseds/Line.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <div className="color-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="display">
                <Image src={socialLogo} />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="gap display">
                <Image src={facebook} />
                <Image src={Netlogo} />
                <Image src={linkdin} />
                <Image src={inst} />
                <Image src={Be} />
                <Image src={Lineimg} className="mx-4" />
                <Image src={dial} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
