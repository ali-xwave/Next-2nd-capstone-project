import Image from "next/image";
import React from "react";
import "./page.css";
import page2icon1 from "../../asseds/Secondpageicon1.svg";
import page2icon2 from "../../asseds/Secondpageicon2.svg";
import page2icon3 from "../../asseds/Secondpageicon3.svg";
import pageTwoEllopse from "../../asseds/EllipsepageTwo 1.svg";
import pageTwoicons from "../../asseds/pageTwoicons.svg";
import pageTwoimg from "../../asseds/pageTwoimgs 1.svg"
const Section1Page1 = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 pagecoltwo">
            <span>
              <Image src={page2icon1} />
            </span>
            <span className="px-2">
              <Image src={page2icon2} />
            </span>
            <span>Sort by :</span>
            <span>Default Order</span>
            <span className="px-2">
              <Image src={page2icon3} />
            </span>
          </div>

          <div className="col-md-6 paddingpagetwo">
            <div>
              <span className="span-font">All Properties</span>
              <span className="px-4 font-span">For Buy</span>
              <span className="font-span">For Sale</span>
              <span className="px-4 font-span">For Rent</span>
            </div>
          </div>
        </div>

        <div className="row p-row">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  <Image src={pageTwoEllopse} />
                </span>
                <span className="ps-3">Jenny Wilson</span>
              </div>
              <div className="pt-2">
                <Image src={pageTwoicons} />
              </div>
            </div>

            <div>
              <h4 className="txt-color">92 ALLIUM PLACE, ORLANDO FL 32827</h4>
              <p className="p-fonts">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </p>
              <p className="p-fonts">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Proin sodales ultrices nulla
                blandit... readmore.
              </p>

              <h1 className="txt-color">$ 590,693</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div><Image src={pageTwoimg} className="img-fluid" /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1Page1;
