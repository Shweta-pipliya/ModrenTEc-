import React from 'react'
import "./Namep.css";
import imgc4 from "../images/nameplate.png";
function Namep() {
  return (
    <div>
          <div className="first-sec">
        <div className="sub-head">
          <h2 className="head-m">Acrylic Name Plate</h2>
          <p>Home / Customise / Acrylic Name Plate</p>
        </div>
      </div>
      <div className='mainsec'>
      <div className="image-c">
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img className='imgc' src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
          </div>
          <div className="image-c">
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img className='imgc' src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery1">
                <a target="_blank" href="/Nameplate">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Krishna Acrylic Designer Name Plate</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Namep
