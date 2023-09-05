import Image from "next/image";
import React from "react";
import footer from "../../asseds/footer-logo.svg";
import footerIcon1 from "../../asseds/footer-icon-1.svg";
import footerIcon2 from "../../asseds/footer-icon-2.svg";
import footerIcon3 from "../../asseds/footer-icon-3.svg";
import footerIcon4 from "../../asseds/footer-icon-4.svg";
import footerIcon5 from "../../asseds/footer-icon-5.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row pd-footer ft-align">
          <div className="col-md-4">
            <div className="ps-4 ft-family">
              <Image src={footer} />
              <h4 className="pt-4 ft-font">Contact Us</h4>
              <p>Call : +123 400 123</p>
              <p>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </p>
              <p>Email: example@mail.com</p>
            </div>

            <div className="d-flex gap-4">
              <Image src={footerIcon1} />
              <Image src={footerIcon2} />
              <Image src={footerIcon3} />
              <Image src={footerIcon4} />
              <Image src={footerIcon5} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="ft-family">
              <h4 className="ft-font">Features</h4>
              <p className="pt-4">Home</p>
              <p>Become a Host</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="ft-family">
              <h4 className="ft-font">Company</h4>
              <p className="pt-4">About Us</p>
              <p>Press</p>
              <p>Contact</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ft-family">
              <h4 className="ft-font">Team and policies</h4>
              <p className="pt-4">Terms of servies</p>
              <p>Privacy Policy</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
