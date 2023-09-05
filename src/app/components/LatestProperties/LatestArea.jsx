import Image from "next/image";
import React from "react";
import "./LatestArea.css";
import home6 from "../../asseds/Rectangle 6.svg";
import home7 from "../../asseds/Rectangle 7.svg";
import home8 from "../../asseds/Rectangle 8.svg";
import home9 from "../../asseds/Rectangle 9.svg";
import home10 from "../../asseds/Rectangle 10.svg";
import home11 from "../../asseds/Rectangle 11.svg";
import car1 from "../../asseds/Car.svg";
import bath from "../../asseds/Bathtub.svg";
import arrow from "../../asseds/ArrowsOut.svg";
import Elpse1 from "../../asseds/Ellipse 1.svg";
import Elpse2 from "../../asseds/Ellipse 2.svg";
import Elpse3 from "../../asseds/Ellipse 3.svg";
import frame1 from "../../asseds/Frame 1.svg";
const LatestArea = () => {
  return (
    <div>
      <div class="container">
        <div className="text-center py-5">
          <h1 className="font-family-six">Letest Properties of Rent</h1>
          <p className="font-family-four">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere <br /> cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="position-relative">
              <Image src={home6} class="img-fluid" />
              <p class="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p class="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={bath} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={arrow} />
                </span>
                <span className="ps-2">2,096.00 ft</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse1} />
                  </span>
                  <span className="ps-2 card-h ">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
              <div className="d-flex position-absolute top-0 start-0">
                <button className="butn mt-3 ms-3">Hot offer</button>
                <button className="butn mt-3 ms-2">Sale</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <Image src={home7} class="img-fluid" />
              <p className="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p className="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={bath} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={arrow} />
                </span>
                <span className="ps-2">2,096.00 ft</span>
              </div>

              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse2} />
                  </span>
                  <span className="ps-2 card-h">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <Image src={home8} class="img-fluid" />
              <p class="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p class="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={bath} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={arrow} />
                </span>
                <span className="ps-2">2,096.00 ft</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse3} />
                  </span>
                  <span className="ps-2 card-h ">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div>
              <Image src={home9} class="img-fluid" />
              <p class="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p class="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={bath} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={arrow} />
                </span>
                <span class="ps-2">2,096.00 ft</span>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse1} />
                  </span>
                  <span className="ps-2 card-h ">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <Image src={home10} class="img-fluid" />
              <p class="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p class="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={bath} />
                </span>
                <span className="ps-2">4</span>
                <span className="ps-4">
                  <Image src={arrow} />
                </span>
                <span className="ps-2">2,096.00 ft</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse2} />
                  </span>
                  <span className="ps-2 card-h">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <Image src={home11} className="img-fluid" />
              <p class="card-h">92 ALLIUM PLACE, ORLANDO FL 32827</p>
              <p class="dollar-price">$ 590,693</p>
              <div>
                <span>
                  <Image src={car1} />
                </span>
                <span className="ps-2">4</span>
                <span class="ps-4">
                  <Image src={bath} />
                </span>
                <span class="ps-2">4</span>
                <span class="ps-4">
                  <Image src={arrow} />
                </span>
                <span class="ps-2">2,096.00 ft</span>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <div>
                  <span>
                    <Image src={Elpse3} />
                  </span>
                  <span class="ps-2 card-h ">Jenny Wilson</span>
                </div>
                <div>
                  <Image src={frame1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center py-5">
          <button class="btnn">Load more listing</button>
        </div>
      </div>
    </div>
  );
};

export default LatestArea;
