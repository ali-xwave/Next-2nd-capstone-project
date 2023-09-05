import React from "react";
import "./cardArea.css";
import Image from "next/image";
import icon1 from "../../asseds/card-icon-1.svg";
import icon2 from "../../asseds/card-icon-2.svg";
import icon3 from "../../asseds/card-icon-3.svg";
import icon4 from "../../asseds/card-icon-4.svg";
const CardArea = () => {
  return (
    <div class="color-background">
      <div class="text-center">
        <h1 class="family-font ">Propertice by Area</h1>
        <p className="family-fonts pb-5">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere <br />
          cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>
      <div class="container">
        <div class="row family-fonts">
          <div class="col-md-3">
            <div className="text-center card-background p-3">
              <Image src={icon1} class="img-fluid" />
              <h5 class="py-4 family-heading">Sell your home</h5>
              <p>We do a free evaluation to be sure you want to start selling.</p>
              <p>Read more</p>
            </div>
          </div>
          <div class="col-md-3">
            <div className="text-center p-3">
              <Image src={icon2} class="img-fluid" />
              <h5 class="py-4 family-heading">Rent your home</h5>
              <p>We do a free evaluation to be sure you want to start selling.</p>
              <p>Read more</p>
            </div>
          </div>
          <div class="col-md-3">
            <div className="text-center p-3">
              <Image src={icon3} class="img-fluid" />
              <h5 class="py-4 family-heading">Buy a homee</h5>
              <p>We do a free evaluation to be sure you want to start selling.</p>
              <p>Read more</p>
            </div>
          </div>
          <div class="col-md-3">
            <div className="text-center p-3">
              <Image src={icon4} class="img-fluid" />
              <h5 class="py-4 family-heading">Free marketing</h5>
              <p>We do a free evaluation to be sure you want to start selling.</p>
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArea;
