import Image from "next/image";
import React from "react";
import pageTwoimg1 from "../../asseds/pageTwoimgs 2.svg";
import pageTwoEllopse2 from "../../asseds/EllipsepageTwo 2.svg";
import pageTwoicons2 from "../../asseds/pageTwoicons.svg";
const Section2Page2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <Image src={pageTwoimg1} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  <Image src={pageTwoEllopse2} />
                </span>
                <span className="ps-3">Jenny Wilson</span>
              </div>
              <div className="pt-2">
                <Image src={pageTwoicons2} />
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
        </div>
      </div>
    </div>
  );
};

export default Section2Page2;
