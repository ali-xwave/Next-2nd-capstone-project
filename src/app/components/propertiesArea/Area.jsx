import React from "react";
import "./Area.css";
import Image from "next/image";
import home1 from "../../asseds/Rectangle 1.svg";
import home2 from "../../asseds/Rectangle 2.svg";
import home3 from "../../asseds/Rectangle 3.svg";
import home4 from "../../asseds/Rectangle 4.svg";
import home5 from "../../asseds/Rectangle 5.svg";
import locate from "../../asseds/location.svg";
const Area = () => {
  return (
    <div>
      <div class="text-center properties-margin">
        <h1 class="family">Propertice by Area</h1>
        <p className="font-family">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere <br /> cubilia curae; Proin sodales ultrices nulla blandit
          volutpat.
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div className="position-relative">
              <Image src={home1} class="img-fluid" />
              <div className="text-white pt-3 ps-3 position-absolute top-0 start-0 ">
                <h4>Washington</h4>
                <p>25 listings</p>
              </div>
              <div className="position-absolute bottom-0 start-0 ps-3 pb-3">
                <Image src={locate} />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="position-relative">
              <Image src={home2} class="img-fluid" />
              <div className="text-white pt-3 ps-3 position-absolute top-0 start-0 ">
                <h4>Franklin </h4>
                <p>25 listings</p>
              </div>
              <div className="position-absolute bottom-0 start-0 ps-3 pb-3">
                <Image src={locate} />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="position-relative">
              <Image src={home3} class="img-fluid" />
              <div className="text-white pt-3 ps-3 position-absolute top-0 start-0 ">
                <h4>Clinton </h4>
                <p>25 listings</p>
              </div>
              <div className="position-absolute bottom-0 start-0 ps-3 pb-3">
                <Image src={locate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row pt-3 pb-5">
          <div class="col-md-8">
            <div className="position-relative">
              <Image src={home4} class="img-fluid" />
              <div className="position-absolute top-50 start-50 translate-middle ">
                <button className="text-white bg-transparent view-btn">
                  View Detail
                </button>
              </div>
              <div className="text-white pt-3 ps-3 position-absolute top-0 start-0 ">
                <h4>Arlington </h4>
                <p>25 listings</p>
              </div>
              <div className="position-absolute bottom-0 start-0 ps-3 pb-3">
                <Image src={locate} />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="position-relative">
              <Image src={home5} class="img-fluid" />
              <div className="text-white pt-3 ps-3 position-absolute top-0 start-0 ">
                <h4>Centerville </h4>
                <p>25 listings</p>
              </div>
              <div className="position-absolute bottom-0 start-0 ps-3 pb-3">
                <Image src={locate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
