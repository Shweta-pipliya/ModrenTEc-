import React from "react";
import { useState } from "react";
import "../components/Nameplate.css";
import { AiOutlineZoomIn } from "react-icons/ai";
import { PiNotePencilFill } from "react-icons/pi";
import img2 from "../images/1.png";
import img3 from "../images/4.png";
import imgG from "../images/nameplate.png";
import { RiArrowDropDownFill } from "react-icons/ri";
function Nameplate() {
  const [show , setShow] = useState(false);
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

 
  const [inputText2, setInputText2] = useState('');
  
  const updateText2 = () => {
    const textElement = document.getElementById('userText2');
    if (textElement) {
      textElement.textContent = inputText2;
    }
  };

 
    const [inputText, setInputText] = useState('');
  
    const updateText = () => {
      const textElement = document.getElementById('userText');
      if (textElement) {
        textElement.textContent = inputText;
      }
    };
  return (
    <div>
      <div className="first-sec">
        <div className="sub-head">
          <h2 className="head-m">Krishna Acrylic Designer Name Plate</h2>
          <p>Home / Premium Acrylic Photo</p>
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
        <div className="m-img">
         
           <div className="change-img" id="imageContainer">
           <div style={{ position: 'relative' }}>
      <img className="change-img"
src={imgG}
        // width="600"
        // height="400"
        alt="Sample"
      />
    
      <div
        id="userText"
       
      ></div>
           <div
        id="userText2"
       
      ></div>
    
    </div>
      
      </div> 
          
        </div>
      
      </div>

      <div className="second">
        <div className="description0">
        <input
        type="text"
        placeholder="Name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={updateText}>Edit Text</button>
        </div>
   
        <div className="description2">
        <input
        type="text"
        placeholder="Adress"
        value={inputText2}
        onChange={(e) => setInputText2(e.target.value)}
      />
      <button onClick={updateText2}>Edit Text</button>
        </div>
   
        <div class="btn-group">
   
   






        </div>

    
        
        <table class="variations" cellspacing="0" role="presentation"><tbody>
            <tr>
                <th class="label1">
            <label for="size">Size</label>
        </th>
        
        <td class="value"> 
        <select id="size" class="" name="attribute_size" data-attribute_name="attribute_size" data-show_option_none="yes">
            <option value="">Choose an option</option>
            <option value="12x8" selected="selected" class="attached enabled">12x8</option>
            <option value="18x12" class="attached enabled">18x12</option>
            </select></td></tr>
            <tr><th class="label1">
                <label for="thickness">Thickness</label>
        </th><td class="value"> 
        <select id="thickness" class="" name="attribute_thickness" data-attribute_name="attribute_thickness" data-show_option_none="yes">
            <option value="">Choose an option</option>
            <option value="3MM" selected="selected" class="attached enabled">3MM</option>
            <option value="8MM" class="attached enabled">8MM</option>
            </select>
            {/* <a class="reset_variations" href="#">Clear</a> */}
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
<hr/>
      <div className="sec">
        <div className="Description">
          <button className="btn" onClick={ShowNow}><h2>Description</h2> </button>
          
{
  show && (
    <div>
            <p>
            Home Décor Gift: Perfect for Home Decor as it’s a Beautiful Gift.
          </p>
          <h2>Why Acrylic Photo ?</h2>
          <ul class="b">
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

export default Nameplate;






















// import React from 'react'
// import img from '../images/download (1).png';
// import { useState } from "react";
// function Nameplate() {
//     const [Image , setImage ] = useState ("") ;
  


// const handleImageChange = (event) => {
//   const file = event.target.files[0] ;
//  setImage(event.target.files[0] )
// };
 
//   return (
//     <div className='main'>
// <div id='content' className='blog-wrapper blog-single page-wrapper'>
//     <div className='row align-center'>
//         <div className='large-10 col'>
// <article id='post-295304' className='post-295304 custom type-custom status-publish has-post-thumbnail hentry customise-acrylic-name-plate'>
// <div className='article-inner '>
// <header class="entry-header"><div class="entry-header-text entry-header-text-top text-left">
//     <h6 class="entry-category is-xsmall"></h6>
//     <h1 class="entry-title">Ganesa Acrylic Designer Name Plate</h1>
//     <div class="entry-divider is-divider small">
//     <div className='entry-content single-page'>
//         <div className='is-xsmall cbreadcums'>
//         <nav class="woocommerce-breadcrumb breadcrumbs "><a href="https://omgs.in">Home</a> / <a href="./ShopNow.js">Acrylic Name Plate</a></nav>
//         </div>
//         </div>
//         <div className='mainEditor'>
//         <div class="canvas-container" >
//         <div className="first-sec">
//         <div className="sub-head">
//           <p>Home / Premium Acrylic Photo</p>
//           <h2 className="head-m">Customised Premium Acrylic Picture </h2>
//         </div>
//       </div>
//       <div className="image-Sec">
//         <a
//           class="sizeguide image-lightbox lightbox-galleryx"
//           title=""
//           href=""
//         >
//           Size guide?
//         </a>
//         <div className="m-img">
//           <span className="width">Width 12 inch</span>
//           <div className="change-img" id="imageContainer">
//             { Image ?   <img className="change-img"
//           id="uploadedImage"
//           src={URL.createObjectURL(Image)}
//           alt="Uploaded"
//         /> : 
//         <img className="change-img"
//         id="uploadedImage"
//         src="https://t4.ftcdn.net/jpg/06/46/88/95/360_F_646889538_XuyP72HgjZERXbliwD8SpqtytQg3wVsZ.jpg"
//         alt="Uploaded"
//       /> } 
//       </div>
//       </div>
//             {/* <canvas id="canvas" width="1296" height="864" class="lower-canvas" >
//                 <img src={img}/>
//                 </canvas>
//                 <canvas class="upper-canvas " width="1296" height="864">

//                 </canvas> */}
//         </div>
//         </div>
//         <div className='imgUpload'>
//         <div id="imgUpload">
//              <span id="closeUpload">x</span>
//               <label for="image-input" id="uploadlabel" class="btnlabel">Select Photo</label> 
//               <input type="file" accept="image/*" id="image-input" />
//         </div>
//         <div id="removemsg" >

//         </div>
//         </div>

//         </div>
//     </div>
// </div>
//  </header>

// </div>
// </article>
//         </div>


//     </div>

// </div>
      
//     </div>
//   )
// }

// export default Nameplate
