import React from "react";
import "./AcraliWallp.css";
import imgc2 from "../images/Acralic  s-4.webp";
import imgc4 from "../images/OMGs-Cutout-Acrylic-1.webp";

function AcraliWallp() {
  return (
    <div>
      <div className="first-sec">
        <div className="sub-head">
          <h2 className="head-m">Acrylic Wall PhotoAcrylic Wall Photo</h2>
          <p>Home / Customise / Acrylic Wall Photo</p>
        </div>
      </div>
      <div>
        <div className="image-c">
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc4} alt="Mountains" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc2} alt="Mountains" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc4} alt="Mountains" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
        </div>
        <div className="image-c">
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc2} alt="Mountains" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc4} alt="" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/ShopNow">
                <img src={imgc2} alt="" />
              </a>
              <div class="desc">Acrylic Wall Photo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="textsec">
        <div
          className="row row-large align-middle align-center"
          id="row-807006588"
        >
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner text-center dark">
              <h2>Why Acrylic Photo Print</h2>
              <p className="p1">
                {" "}
               <b>Acrylic picture frames</b> are all the rage replacing glass frames these days. Get your
                photographs printed on high-quality paper and framed on an
                ultra-transparent acrylic screen for that elegant-looking
                decoration. Although made of plastic, acrylic gives a glass
                finish. The print is sealed with a layer of an aluminum sheet at
                the back. As you look at the print from different angles, the
                light is refracted on the outline, offering a delicate
                appearance of movement.
              </p>
            </div>
          </div>
          <div className="col  " >
          <img className="Mountains" src={imgc2} alt="Mountains" />

          </div>
        </div>
      </div>
      <div className="textsec2">
        <div
          className="row row-large align-middle align-center"
          id="row-807006588"
        >
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner text-center dark">
              <h2>Why Acrylic Photo Print</h2>
              <p className="p1">
                {" "}
               <b>Acrylic picture frames</b> are all the rage replacing glass frames these days. Get your
                photographs printed on high-quality paper and framed on an
                ultra-transparent acrylic screen for that elegant-looking
                decoration. Although made of plastic, acrylic gives a glass
                finish. The print is sealed with a layer of an aluminum sheet at
                the back. As you look at the print from different angles, the
                light is refracted on the outline, offering a delicate
                appearance of movement.
              </p>
            </div>
          </div>
          <div className="col  " >
          <img className="Mountains" src={imgc4} alt="Mountains" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default AcraliWallp;
