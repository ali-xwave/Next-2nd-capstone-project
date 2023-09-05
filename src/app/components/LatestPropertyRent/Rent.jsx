import React from "react";
import "./Rent.css";
import Image from "next/image";
import home12 from "../../asseds/Group 1-cropped.svg";
import home13 from "../../asseds/Group 2.svg";
import home14 from "../../asseds/Group 3.svg";
import home15 from "../../asseds/Group 4.svg";
import home16 from "../../asseds/Group 5.svg";
const Rent = () => {
  return (
    <div>
      <div class="text-center pt-4">
        <h1 class="Rent-font">Letest Properties of Rent</h1>
        <p class="para-font">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere <br /> cubilia curae; Proin sodales ultrices nulla blandit
          volutpat.
        </p>
      </div>

      <div class="d-flex py-4">
        <div className="img1">
        <Image src={home12} class="img-fluid" />
        </div>
        <div>
          <Image src={home13} class="img-fluid" />
        </div>
        <div>
          <Image src={home14} class="img-fluid" />
        </div>
        <div>
          <Image src={home15} class="img-fluid" />
        </div>
        <div>
          <Image src={home16} class="img-fluid last-img" />
        </div>
      </div>
    </div>
  );
};

export default Rent;
