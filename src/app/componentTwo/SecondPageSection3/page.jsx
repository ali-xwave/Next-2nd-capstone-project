import React from "react";
import Image from "next/image";
import pageTwoimg2 from "../../asseds/pageTwoimgs 3-cropped.svg";
import pageTwoEllopse3 from "../../asseds/EllipsepageTwo 3.svg";
import pageTwoicons3 from "../../asseds/pageTwoicons.svg";
import page2frame from "../../asseds/Frame 2.svg"
const Section3Page2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  <Image src={pageTwoEllopse3} />
                </span>
                <span className="ps-3">Jenny Wilson</span>
              </div>
              <div className="pt-2">
                <Image src={pageTwoicons3} />
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
            <div>
              <Image src={pageTwoimg2} className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="text-center pb-5">
          <Image src={page2frame} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Section3Page2;
