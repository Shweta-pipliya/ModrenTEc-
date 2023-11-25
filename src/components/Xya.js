import React from "react";
import { useState } from "react";
import Slider from 'rc-slider';

import "../components/Xya.css";
import { AiOutlineZoomIn } from "react-icons/ai";
import { PiNotePencilFill } from "react-icons/pi";
import img2 from "../images/1.png";
import { Modal, Button, ProgressBar } from 'react-bootstrap';
import img3 from "../images/4.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import ReactPlayer from "react-player";
function Xya() {
  const [show , setShow] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const [playing4, setPlaying4] = useState(false);
  const [playing5, setPlaying5] = useState(false);
  const [selectedSize, setSelectedSize] = useState('12x9'); 
  const [selectedShape, setSelectedShape] = useState('normal'); 
  const handleClickPlaying = () => {
    setPlaying(true);
  };
  const handleClickPlaying1 = () => {
    setPlaying1(true);
  };
  const handleClickPlaying2 = () => {
    setPlaying2(true);
  };
  const handleClickPlaying3 = () => {
    setPlaying3(true);
  };
  const handleClickPlaying4 = () => {
    setPlaying4(true);
  };
  const handleClickPlaying5 = () => {
    setPlaying5(true);
  };
  const ShowNow = () => {
    if (show == true){
      setShow(false)
    }
    else{
      setShow(true)
    }
  }

const [Image , setImage ] = useState ("") ;
  


const handleImageChange = (event) => {
  const file = event.target.files[0] ;
 setImage(event.target.files[0] )
};
 
const handleShapeChange = (shape) => {
  setSelectedShape(shape);
};



  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("myImage");
    const changeButton = document.getElementById("changeButton");
    const fileInput = document.getElementById("fileInput");

    changeButton.addEventListener("click", function () {
      // Trigger the file input to open when the button is clicked
      fileInput.click();
    });

    fileInput.addEventListener("change", function () {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        image.src = objectURL;
      }
    });
  });

  const [zoomLevel, setZoomLevel] = useState(1.2);
  const [showModal, setShowModal] = useState(false);
  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel / 100);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    console.log(selectedSize)
  };


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  const getClipPath = (shape) => {
    switch (shape) {
      case 'RoundEdge':
        return 'path("M 100 100 h 600 a 30 30 0 0 1 30 30 v 400 a 30 30 0 0 1 -30 30 h -600 a 30 30 0 0 1 -30 -30 v -400 a 30 30 0 0 1 30 -30 z")';
      case 'BeanHorizontal':
        return 'polygon(61% 7%, 85% 17%, 96% 33%, 95% 65%, 88% 91%, 66% 98%, 20% 90%, 0% 70%, 4% 45%, 28% 18%)'
      case 'EggVertical':
        return 'ellipse(49% 35% at 50% 50%)';
      case 'ExtraRoundHorizontal':
        return 'inset(0% 0% 0% 0% round 5%)';
      default:
        return '';
      
    }
  };
  const containerStyle = {
    width: '480px',
    height: '360px',
    overflow: 'hidden',
  };
  
 
  const imageStyle = {
    transform: `scale(${zoomLevel})`,
    transition: 'transform 0.3s ease-in-out',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    clipPath: getClipPath(selectedShape),
  };

  
  // Function to calculate the width and height based on the selected size and layout type
  const calculateSize = () => {
    const [widthRatio, heightRatio] = selectedSize.split('x').map(Number);

    // Calculate the width and height based on the container size
    const containerWidth = parseInt(containerStyle.width, 10);
    const containerHeight = parseInt(containerStyle.height, 10);

    let width, height;

    if (containerWidth / containerHeight > widthRatio / heightRatio) {
      width = containerHeight * (widthRatio / heightRatio);
      height = containerHeight;
    } else {
      width = containerWidth;
      height = containerWidth / (widthRatio / heightRatio);
    }

    // Update the container style with the new aspect ratio
    const updatedContainerStyle = {
      ...containerStyle,
      width: `${width}px`,
      height: `${height}px`,
    };

    return {
      width: `${width}px`,
      height: `${height}px`,
      aspectRatio: `${width / height * 100}%`, // Calculate aspect ratio
      containerStyle: updatedContainerStyle,
    };
  
  };

  
 




  return (
    <div style={{width:'70%',margin:'0 auto'}}>
      <div className="first-sec">
        <div className="sub-head">
          <p>Home / Premium Acrylic Photo</p>
          <h2 className="head-m">Customised Premium Acrylic Picture </h2>
        </div>
      </div>
      <div className="image-Sec">
        <a
          class="sizeguide image-lightbox lightbox-galleryx"
          title=""
          href=""
        >
          Size guide?
        </a>
        <div className="m-img" >
          <span className="width">Width 12 inch</span>
          <div className="change-img" id="imageContainer" style={{ ...calculateSize().containerStyle }} >
            { Image ?   <img className="change-img"
          id="uploadedImage"
          src={URL.createObjectURL(Image)}
          style={imageStyle}
          alt="Uploaded"
        /> : <img className="change-img"
        id="uploadedImage"
        style={imageStyle}
        src="https://t4.ftcdn.net/jpg/06/46/88/95/360_F_646889538_XuyP72HgjZERXbliwD8SpqtytQg3wVsZ.jpg"
        alt="Uploaded"
      /> } 
      
      </div>
          <span className="height">Height 9 inch (22.86 cm)</span>
        </div>
      </div>

      <div className="second">
        <div className="description">
          <p>
            By uploading an image you agree to our <b>Terms of Service.</b>
          </p>
        </div>

        <div class="btn-group">
          <button className="button">
            Change <br />
            Background
          </button>


          <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zoom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-3 flex justify-content-center align-items-center">
          <Slider
              min={10}
              max={200}
              step={10}
              value={zoomLevel * 100}
              onChange={handleZoomChange}
              railStyle={{ backgroundColor: '#ccc' }}
              trackStyle={{ backgroundColor: '#3498db' }}
              handleStyle={{ borderColor: '#3498db' }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          <button className="button" onClick={handleShow} >
            <AiOutlineZoomIn /> <br />
            Zoom
          </button>
         
          {/* <div class="choose-img" id="changeButton">
            <input
              className="file-input"
              name="original_image"
              id="file"
              type="file"
              accept="image/*"
            />
            <label for="file" class="label">
              <strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="12"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                </svg>
                <i class="upload-txt">Select Photo</i>
              </strong>
            </label>
          </div> */}

<div className="choose-img" id="changeButton">
        <input
          className="file-input"
          name="original_image"
          id="file"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="file" className="label">
          <strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
            </svg>
            <i className="upload-txt">Select Photo</i>
          </strong>
        </label>
      </div>
   






          <button className="button">
            <PiNotePencilFill />
            <br />
            Text
          </button>
          <button className="button">How?</button>
        </div>

        <div id="cpanel-shape" class="cpanel-share li">
          {" "}
          Available Shapes
          <div id="availableShape">
            <svg
              viewBox="0 0 600 400"
              width="600"
              height="400"
              r="horizontal"
              i="0"
              className={`normal ${selectedShape === 'normal' && 'activeshape'}`}
            onClick={() => handleShapeChange('normal')}
            >
              <path
                d="M 0,0 L 600,0 L 600,400 L 0,400 Z"
                logo_pos='{"x_div":1,"y_div":1,"isShadow":1,"shape":"normal"}'
                fill="#c1995d"
              ></path>
            </svg>
            <svg
              viewBox="70 100 660 460"
              width="660"
              height="460"
              r="horizontal"
              i="1"
              className={`RoundEdge ${selectedShape === 'RoundEdge' && 'activeshape'}`}
              onClick={() => handleShapeChange('RoundEdge')}
            >
              <path
                d="M 100 100 h 600 a 30 30 0 0 1 30 30 v 400 a 30 30 0 0 1 -30 30 h -600 a 30 30 0 0 1 -30 -30 v -400 a 30 30 0 0 1 30 -30 z"
                logo_pos='{"x_div":1.1,"y_div":1,"isShadow":0,"shape":"Round Edge"}'
                fill="#c1995d"
              ></path>
            </svg>
            <svg
              viewBox="58.279762268066406 -2640.34716796875 2980.8994140625 2308.86962890625"
              width="660"
              height="460"
              r="horizontal"
              i="2"
              className={`BeanHorizontal ${selectedShape === 'BeanHorizontal' && 'activeshape'}`}
              onClick={() => handleShapeChange('BeanHorizontal')}
            >
              <path
                d="M 3029.7457 -1159.5494 c -35.387 217.8021 -111.8997 385.9889 -240.7208 535.1537 c -86.9696 101.7364 -156.9923 153.0862 -286.3171 211.1646 c -121.1772 54.3883 -227.1746 78.337 -357.3859 81.3407 c -123.2165 3.2724 -203.6961 -11.8282 -454.0911 -84.4939 c -303.8562 -87.729 -403.052 -84.5346 -696.1768 17.288 c -169.4105 59.5406 -217.7974 68.6899 -323.7192 64.6208 c -257.8098 -9.9041 -439.72 -145.9875 -552.5333 -413.5153 c -55.9646 -132.2459 -66.1527 -205.6911 -58.0913 -415.5363 c 6.4875 -168.8754 10.8289 -203.7344 39.149 -315.7299 c 85.9213 -334.9485 230.8794 -591.5731 446.7491 -792.4344 c 205.4165 -189.254 428.6312 -294.7631 745.0102 -350.6592 c 125.9827 -23.1809 325.1431 -23.5358 454.4715 -3.5564 c 578.8455 93.2894 1049.4752 450.6192 1218.4871 922.4549 c 64.9987 183.6305 89.9897 392.744 65.1688 543.9026 z"
                logo_pos='{"x_div":5,"y_div":1,"isShadow":0,"shape":"Bean horizontal"}'
                fill="#c1995d"
              ></path>
            </svg>
            <svg
              viewBox="-490 71.9000015258789 490 346.20001220703125"
              width="490"
              height="346"
              r="horizontal"
              i="3"
              className={`EggVertical ${selectedShape === 'EggVertical' && 'activeshape'}`}
              onClick={() => handleShapeChange('EggVertical')}
            >
              <path
                d="M -302.6 418.1 C -437.9 418.1 -490 340.7 -490 245 S -437.9 71.9 -302.6 71.9 S 0 149.3 0 245 S -167.2 418.1 -302.6 418.1 z"
                logo_pos='{"x_div":2,"y_div":1,"isShadow":0,"shape":"Egg vertical"}'
                fill="#c1995d"
              ></path>
            </svg>
            <svg
              viewBox="-2754.613037109375 11.048904418945312 2745.62158203125 1800.828125"
              width="274.62158203125"
              height="180.828125"
              r="horizontal"
              i="4"
              className={`ExtraRoundHorizontal ${selectedShape === 'ExtraRoundHorizontal' && 'activeshape'}`}
              onClick={() => handleShapeChange('ExtraRoundHorizontal')}
            >
              <path
                d="M -2750 615 c 8 -133 31 -211 91 -311 c 49 -81 162 -183 251 -227 c 141 -68 135 -68 1063 -65 c 828 3 830 3 895 25 c 218 75 380 256 424 475 c 22 108 23 700 1 803 c -48 228 -234 423 -460 480 c -89 23 -1698 22 -1794 0 c -216 -51 -399 -231 -455 -448 c -17 -65 -27 -545 -16 -732 z"
                logo_pos='{"x_div":2,"y_div":1,"isShadow":0,"shape":"Extra Round horizontal"}'
                fill="#c1995d"
              ></path>
            </svg>
          </div>
        </div>
        <div class="qualityLi">
          <div class="Imgquality">
            {" "}
            Photo quality for{" "}
            <span>
              <strong>12x9</strong>
            </span>{" "}
            is <strong>Good</strong>
          </div>
        </div>
        <div class="mountingLi">
          <div id="monting_method">
            <a
              id="mountingLink"
              class=" image-lightbox lightbox-galleryx"
              title=""
              href=""
            >
              Quick Mount <strong>Adhesive Hooks</strong>
            </a>
          </div>
        </div>

        <table className="variations" cellspacing="0" role="presentation">
          <tbody>
            <tr>
              <th class="l-option">
                <label for="size-inch">Size (Inch)</label>
              </th>
              <td class="value">
                <select
                  id="size-inch"
                  class=""
                  name="attribute_size-inch"
                  data-attribute_name="attribute_size-inch"
                  data-show_option_none="yes"
                >
                  {/* <option value="">Choose an option</option> */}
                  <option
                    value="12x9"
                    selected="selected"
                    class="attached enabled"
                  >
                    12x9
                  </option>
                  <option value="11x11" class="attached enabled">
                    11x11
                  </option>
                  <option value="16x12" class="attached enabled">
                    16x12
                  </option>
                  <option value="18x12" class="attached enabled">
                    18x12
                  </option>
                  <option value="16x16" class="attached enabled">
                    16x16
                  </option>
                  <option value="21x15" class="attached enabled">
                    21x15
                  </option>
                  <option value="30x20" class="attached enabled">
                    30x20
                  </option>
                  <option value="35x23" class="attached enabled">
                    35x23
                  </option>
                </select>
                <label class="generatedRadios selected">
                  <input name="attribute_size-inch"
                   type="radio"
                    value="12x9"
                    checked={selectedSize === '12x9'}
                    onChange={handleSizeChange}
                    />{" "}
                  12x9{" "}
                </label>
                <label className={`generatedRadios ${selectedSize === '11x11' && 'selected'}`}>
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="11x11"
                    checked={selectedSize === '11x11'}
                    onChange={handleSizeChange}
                  />{" "}
                  11x11
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="16x12"
                    checked={selectedSize === '16x12'}
                    onChange={handleSizeChange}
                  />
                  <span>16x12 🔥 </span>
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="18x12"
                    checked={selectedSize === '18x12'}
                    onChange={handleSizeChange}
                  />{" "}
                  18x12{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="16x16"
                    checked={selectedSize === '16x16'}
                    onChange={handleSizeChange}
                  />{" "}
                  16x16{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="21x15"
                    checked={selectedSize === '21x15'}
                    onChange={handleSizeChange}
                  />{" "}
                  21x15{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="30x20"
                    checked={selectedSize === '30x20'}
                    onChange={handleSizeChange}
                  />{" "}
                  30x20{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_size-inch"
                    type="radio"
                    value="35x23"
                    checked={selectedSize === '35x23'}
                    onChange={handleSizeChange}
                  />{" "}
                  35x23{" "}
                </label>
              </td>
            </tr>
            <tr>
              <th class="l-option">
                <label for="thickness-mm">Thickness (mm)</label>
              </th>
              <td class="value">
                {/* <select id="thickness-mm" class="" name="attribute_thickness-mm" data-attribute_name="attribute_thickness-mm" data-show_option_none="yes"> */}
                {/* <option value="">Choose an option</option> */}
                {/* <option value="3mm" selected="selected" class="attached enabled">3mm</option> */}
                {/* <option value="5mm" class="attached enabled">5mm</option> */}
                {/* <option value="8mm" class="attached enabled">8mm</option> */}
                {/* </select> */}
                {/* <a class="reset_variations" href="#">Clear</a> */}
                <label class="generatedRadios selected">
                  <input
                    name="attribute_thickness-mm"
                    type="radio"
                    value="3mm"
                  />{" "}
                  3MM{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_thickness-mm"
                    type="radio"
                    value="5mm"
                  />{" "}
                  5MM{" "}
                </label>
                <label class="generatedRadios">
                  <input
                    name="attribute_thickness-mm"
                    type="radio"
                    value="8mm"
                  />{" "}
                  <span>8MM (PREMIUM)</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="single_variation_wrap">
          <div class="woocommerce-variation single_variation">
            <div class="woocommerce-variation-description"></div>
            <div class="woocommerce-variation-price">
              <span class="price">
                <ins>
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      1,999
                    </bdi>
                  </span>
                </ins>
                <del>
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      3,499
                    </bdi>
                  </span>
                </del>
              </span>
            </div>
            <div class="woocommerce-variation-availability">
              <p class="stock in-stock">
                Only <span> 6 Acrylic's </span> left!
              </p>
            </div>
          </div>
          <div class="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
            <h6>
              Current <i>Processing Time</i> 4 hours
            </h6>
            <div class="quantity buttons_added form-minimal">
              {/* <input type="button" value="-" class="minus button is-form"/>  */}
              {/* <label class="screen-reader-text" for="quantity_6545db4aa89eb">Customised Premium OMGs Acrylic Picture quantity
    </label>  */}
              {/* <input type="number" id="quantity_6545db4aa89eb" class="input-text qty text" name="quantity" value="1" aria-label="Product quantity" size="4" min="1" max="6" step="1" placeholder="" inputmode="numeric" autocomplete="off"/>
       <input type="button" value="+" class="plus button is-form"/> */}

              <button
                type="submit"
                class="single_add_to_cart_button button alt"
              >
                BUY IT NOW
              </button>
              <input type="hidden" name="add-to-cart" value="152269" />
              <input type="hidden" name="product_id" value="152269" />
              <input
                type="hidden"
                name="variation_id"
                class="variation_id"
                value="496890"
              />
            </div>
          </div>
        </div>

      


 
      </div>
{/* <hr/> */}
      <div className="sec" style={{padding:'0'}}>
        <div className="Description">
          <button style={{display:'flex',gap:'5px',background:show?'#eee':'none',padding:'10px 5px'}} className="btn" onClick={ShowNow}><span><IoChevronDownSharp style={{fontSize:'25px',rotate: show?'180deg':'0deg',marginTop:'-3px',color:'rgb(89 87 87)'}} /></span><div style={{fontSize:'18px'}}>Description</div> </button>
          
{
  show && (
    <div>
            <p>
            Home Décor Gift: Perfect for Home Decor as it’s a Beautiful Gift.
          </p>
          <h2>Why Acrylic Photo ?</h2>
          <ul class="b" style={{listStyle:'disc'}}>
            <li>Fastest processing from Jaipur / Bengaluru Facility</li>
            <li>Unidirectional pixel perfect direct printing on Acrylic</li>
            <li>Ultra HD print (Highest DPI)</li>
            <li>Image Processing at 600×600 PPi</li>
            <li>Acrylic Chemical treatment before printing</li>
            <li>Never peel off, Even Moisture Environment</li>
            <li>Unidirectional mode means we give 2x time each picture</li>
            <li>Same Day Processing of orders</li>
            <li>Advanced use of Artificial Intelligence</li>
          </ul>

          {/* <div className="html5video" style={{ background: "url(https://omgs.in/wp-content/uploads/2023/03/loading-1.gif)", backgroundSize: 'cover', marginLeft: '-10px' }}>
  <img decoding="async" className="videobtnc aligncenter lazy-load-active" src="https://s.omgs.in/wp-content/uploads/2021/12/video-play-happy.jpg" data-src="https://s.omgs.in/wp-content/uploads/2021/12/video-play-happy.jpg" style={{ display: "none" }} />
  <video id="" preload="none" style={{ maxWidth: '99.99%' }} loop="loop" muted="" width="1240" height="1240" playsInline>
    <source src="https://v.omgs.in/480p/Acrylic-Wall-Photo-480.mov" type="video/mp4" />
  </video>
</div> */}
        <div style={{margin:'80px 0'}}>
      <div style={{position:'relative'}} onClick={handleClickPlaying}>
        <ReactPlayer
          url="https://v.omgs.in/480p/Acrylic-Wall-Photo-480.mov"
          playing={playing}
          controls={false}
          width="100%"
          height="100%"
        />
        {!playing && <div style={{position:'absolute',left:'40%',top:'40%'}}>
            <FaYoutube style={{color:'#CE201F',fontSize:'200px',zIndex:'1'}}/>
        </div>}
      </div>
    </div>

    <div>
      <p>The perfect home decor gift with a beautiful gloss finish.</p>
      <h3>Our Acrylic Wall Photo Reviews</h3>
      <div style={{margin:'20px 0'}}>
      <div style={{position:'relative'}} onClick={handleClickPlaying1}>
        <ReactPlayer
          url="https://v.omgs.in/480p/customer_reviews480P.mov"
          muted
          playing={playing1}
          controls={false}
          width="100%"
          height="100%"
        />
        {!playing1 && <div style={{position:'absolute',left:'40%',top:'40%'}}>
            <FaYoutube style={{color:'#CE201F',fontSize:'200px',zIndex:'1'}}/>
        </div>}
      </div>
    </div>
    </div>

    <div>
      <p>Every picture has a story to tell, We Bring your story to life by printing it on a super glossy premium Acrylic Picture, preserving it as a colorful memory.</p>
      <div style={{margin:'0px 0'}}>
      <div style={{position:'relative'}} onClick={handleClickPlaying2}>
        <ReactPlayer
          url="https://v.omgs.in/480p/Most Memorable Gift.mp4"
          muted
          playing={playing2}
          controls={false}
          width="100%"
          height="100%"
        />
        {!playing2 && <div style={{position:'absolute',left:'40%',top:'40%'}}>
            <FaYoutube style={{color:'#CE201F',fontSize:'200px',zIndex:'1'}}/>
        </div>}
      </div>
    </div>
    </div>

    <div>
      <p className="padL-2">Acrylic picture is tough to break and weather proof.</p>
      <p className="padL-2">Weather proof & Non-Breakable Acrylic picture made using Waterproof UV printing on high quality imported acrylic sheet</p>
      <p className="padL-2">Decorate your home with our custom acrylic prints. Personalize your space with the best moments.</p>
      <p style={{width:'100%',display:'flex',justifyContent:'center',fontWeight:600,fontSize:'17px'}}>Video of 8×6 Inch Size</p>

      <div style={{margin:'0px 0'}}>
      <div style={{position:'relative'}} onClick={handleClickPlaying3}>
        <ReactPlayer
          url="https://v.omgs.in/480p/Customized-Premium-Acrylic.mp4"
          muted
          playing={playing3}
          controls={false}
          width="100%"
          height="100%"
        />
        {!playing3 && <div style={{position:'absolute',left:'40%',top:'40%'}}>
            <FaYoutube style={{color:'#CE201F',fontSize:'200px',zIndex:'1'}}/>
        </div>}
      </div>
    </div>
    </div>

    <div>
      <p className="padL-2">Waterproof UV printing: Imported high quality Acrylic sheet</p>
      <p className="padL-2" style={{fontWeight:600}}>Comes with transparent double-sided tape</p>

      <div style={{margin:'0px 0'}}>
      <div style={{position:'relative'}} onClick={handleClickPlaying4}>
        <ReactPlayer
          url="https://v.omgs.in/480p/Picture-Quick-Mounting.mp4"
          muted
          playing={playing4}
          controls={false}
          width="100%"
          height="100%"
        />
        {!playing4 && <div style={{position:'absolute',left:'40%',top:'40%'}}>
            <FaYoutube style={{color:'#CE201F',fontSize:'200px',zIndex:'1'}}/>
        </div>}
      </div>
    </div>
    </div>

<div>
  <p className="padL-2"><b>Quick Mounting</b>: with provided industrial level two-sided tapes, no nail or hammer required.</p>
  <p className="padL-2">Industrial level transparent double-sided tape on the back for quick mounting, no nail or hammer required.</p>
  <p className="padL-2">Buy your acrylic photo online with us in different sizes. The available size option for you to choose from to customize your acrylic photo prints in inches are:</p>
  <ul style={{listStyle:'none'}}>
    <li>8×6 or 6×8</li>
    <li>12×9 or 9×12</li>
    <li>11×11, 16×16 Square</li>
    <li>18×12 or 12×18</li>
    <li>21×15 or 15×21</li>
    <li>35×23 or 23×35</li>
  </ul>
  <p className="padL-2">We use Auto orientation for best acrylic print quality.</p>
  <p className="padL-2">We apply auto-detection of the image to optimise each order according to image dimensions (vertical or horizontal). You can also choose the thickness of your acrylic picture from the two available options of 3 mm and 8 mm.</p>
  <img src="https://omgs.in/wp-content/uploads/2021/12/Acrylic-Size-Chart-Done1.jpg" width="100%" height="100%" />
  <img src="https://omgs.in/wp-content/uploads/2021/02/omgs-quality.jpg" width="100%" height="100%" />
  <img src="https://omgs.in/wp-content/uploads/2023/10/Mounting-opttionss.jpg" width="100%" height="100%" />
</div>

          <div className="next-content">
            <h2>Image requirement</h2>
            <p>
              Kindly provide high resolution, non-blurry pictures for printing.
              We cannot fix quality/blur and other such issues at our end.
              Refund will not be eligible due to poor quality or blurred
              pictures provided from customer end.
            </p>
            <p>
              A high-quality image is required from your end to print the
              acrylic wall photo in high-definition. Make sure the photos you
              upload have a high resolution, are crystal clear and the contents
              are visible. As we cannot fix blurred or poor-quality pictures,
              your order will not be eligible for returns or refunds in case you
              provide low-quality images or screenshots.
            </p>
            <div style={{width:'100%',display:'flex',justifyContent:'center',marginBottom:'40px'}}>
            <img src="https://s.omgs.in/wp-content/uploads/2021/02/wall-photo-picture-requirement.jpg" width="80%" height="100%" />
            </div>
          </div>
          <div className="d-section">
            <h4>
              Ideal gift for anniversary, birthday, festivals, valentine’s day
              and all other lovely occasions.
            </h4>
            <img src={img2} className="d-block w-100" alt="..." />

            <p>
              Note: This product isn’t eligible for Cash on Delivery and this is
              CMYK print, expect little difference as digital screen uses RBG to
              produce colors with brightness.{" "}
            </p>
          </div>
          <div className="d-section2">
            <h3>How to order Your Customised Acrylic Picture?</h3>
            <ul class="c">
              <li>
                Select your Acrylic frame size from available options and
                Acrylic thickness from 3mm or 8mm size.
              </li>
              <li>
                Upload your best quality picture, which is bright, clear and is
                your favorite among all.
              </li>
              <li>
                Adjust the picture inside the frame by simply dragging it.
              </li>
              <li>
                Pay for the Acrylic photo frame and wait for the magic to be
                delivered at your doorstep.
              </li>
            </ul>
            <img src={img3} className="d-block w-100" alt="..." />
            <img
              src="https://omgs.in/wp-content/uploads/2021/02/pexels-%E7%A5%9D-%E9%B9%A4%E6%A7%90-683929-1536x1024.jpg"
              className="d-block w-100"
              alt="..."
            />
            <h5>
              Please, don’t use screenshots or social media shared photos.
            </h5>
            <h4>Why buy Acrylic Print from us?</h4>
            <p>Simply because,</p>
            <ul class="c">
              <li>
                We source high quality imported Acrylic sheets which are premium
                to the core.
              </li>
              <li>
                We use UV printing technology which prints accurate colors on
                the Acrylic sheet.
              </li>
              <li>Our Acrylic photo prints are shinny and non-breakable.</li>
              <li>
                We have been delivering customised gifts since 2016 and our
                brands are rated excellent on multiple platforms.
              </li>
            </ul>
            <p>
              Every picture has a story to tell. Make the story even better by
              getting it printed on shiny Acrylic frame, converting it to a
              livable and colorful memory.
            </p>
            <h4>Processing & Shipping (Fastest Delivery via BlueDart)</h4>
            <p>Fulfilment & Processing Time: 1-3 Working days</p>
            <p>Shipping & Delivery Time: 3-7 Working days across India</p>
            <p>Note: Actual shipping & delivery time might be affected by COVID-19 restrictions and other non-avoidable issues affecting transportation.</p>
          </div>
    </div>



    
  )
}
        
        </div>
      </div>




    </div>
  );
}

export default Xya;
