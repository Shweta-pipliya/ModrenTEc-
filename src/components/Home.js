import React from "react";
import "./Home.css";
import img1 from "../images/slider 1.jpg";
import imgc2 from "../images/Acralic  s-4.webp";
import imgc4 from "../images/OMGs-Cutout-Acrylic-1.webp";
import img2 from "../images/slider 2.png";
import imgi from "../images/ACRYLIC DESK.jpg";
import img3 from "../images/slider 3.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</link>;
const Home = () => {
  const navitage = useNavigate();
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block caption">
              <h5> ACRYLIC PHOTO</h5>
              <p className="pera-slider">SUPERIOR QUALITY</p>
              <button type="button" class="btn btn-outline-primary"onClick={()=>navitage("./ShopNow")}>
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block caption">
              <h5>CLEAR ACRYLIC</h5>
              <p className="pera-slider">Framed Object</p>
              <button type="button" class="btn btn-outline-primary"onClick={()=>navitage("./ShopNow")}>
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block caption">
              <h5 className="head">FRAMED ACRYLIC</h5>
              <p className="pera-slider">Glossy Framed</p>
              <button type="button" class="btn btn-outline-primary"onClick={()=>navitage("./ShopNow")}>
                Shop Now
              </button>
              {/* <button type="button" class="btn btn-outline-danger">Danger</button> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="icon-h">
            {" "}
            <BsArrowLeftCircle />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="icon-h">
            {" "}
            <BsArrowRightCircle />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* second section */}

      <div className="section1">
        <div class="bg-img ">
          <div className="details">
            <h className="h-2">CLEAR ACRYLIC</h>
            <h className="sub-2">Framed Object</h>
            <p className="p-1">
              Experience the brilliance and vibrancy of our acrylic prints,
              expertly crafted to bring your images to life. Create a
              captivating visual display that truly reflects your style and
              creates a lasting impression.
            </p>
            <button type="button" class="btn btn-outline-primary b-1" onClick={()=>navitage("./ShopNow")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div class="bg-img-b">
          <div className="details box">
            <h className="h-2">ACRYLIC CUTOUTS</h>
            <h className="sub-2">The Beloved’s Essence</h>

            <button type="button" class="btn btn-outline-primary b-1"onClick={()=>navitage("./ShopNow")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div class="bg-img-c">
          <div className="details">
            <h className="h-2">ACRYLIC DESK</h>
            <h className="sub-2">LONG LASTING MASTERPIECE</h>
            <p className="p-1">
              Experience the brilliance and vibrancy of our acrylic prints,
              expertly crafted to bring your images to life. Create a
              captivating visual display that truly reflects your style and
              creates a lasting impression.
            </p>
            <button type="button" class="btn btn-outline-primary b-1"onClick={()=>navitage("./ShopNow")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div class="bg-img-d">
          <div className="details">
            <h className="h-2">Acrylic Wall Photo</h>
            <h className="sub-2">Glossy Framed</h>
            <p className="p-1">
              Experience the brilliance and vibrancy of our acrylic prints,
              expertly crafted to bring your images to life. Create a
              captivating visual display that truly reflects your style and
              creates a lasting impression.
            </p>
            <button type="button" class="btn btn-outline-primary b-1"onClick={()=>navitage("./ShopNow")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div class="bg-img-e">
          <div className="details">
            <h className="h-2">ACRYLIC CLOCK</h>
            <h className="sub-2">Timeless Memories</h>
            <p className="p-1">
              Experience the brilliance and vibrancy of our acrylic prints,
              expertly crafted to bring your images to life. Create a
              captivating visual display that truly reflects your style and
              creates a lasting impression.
            </p>
            <button type="button" class="btn btn-outline-primary b-1"onClick={()=>navitage("./Wall")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="Experience ">
        <div className="head-E">
          {" "}
          <h1>Experience Sparkling Perfection</h1>
          <hr />
          <p className="pera-E">
            In today’s digital age, capturing memories has become effortless. We
            take countless photos with our smartphones and cameras, preserving
            precious moments in digital form. But what if you could elevate
            those memories and turn them into stunning pieces of art that you
            can proudly display on your walls? This is where acrylic photo
            prints come into play, offering a unique and captivating way to
            showcase your most cherished images.
          </p>
          <div className="image-c">
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src={imgc2} alt="Mountains" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src={imgc4} alt="Mountains" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
          </div>
          <div className="image-c">
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                  <img src={imgc2} alt="Mountains" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src={imgc4} alt="" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src={imgc2} alt="" />
                </a>
                <div class="desc">Acrylic Wall Photo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Why-choose">
        <h1>Why Choose Us</h1>
        <p>
          Whether it’s photo paper, photo frames, matting-free picture frames,
          or photo canvas, OMGs the premier photo printing service, only uses
          materials from carefully selected partners to ensure the greatest
          quality. Our staff in our online photo lab handles each step, from
          order to production, with the highest care.
        </p>
        <p>
          We ensure that your orders are delivered to your home as quickly as
          possible thanks to our nationwide presence. We’ve worked with some of
          India’s leading courier service companies, including Bluedart and
          Delhivery, to ensure that your items arrive on time. The average
          delivery time for metro cities is 1-3 days, while delivery time for
          smaller locations might range from 3 to 7 days following dispatch.
          More than 10000 evaluations and recommendations attest to OMGs photo
          goods’ perfect quality. You can find these in our reviews section
          where our ever-increasing family narrates their experience.
        </p>
      </div>

      <div className="insta">
        <div className="head-insta">
          <h4 className="h-i">OUR INSTAGRAM FEED</h4>

          <hr />
<div className="img-ins-s"> 
<div className="gallery">
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bI3f6KUybWzs14smWvyskvulfKGjtOSRNg&usqp=CAU" alt="Mountains" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgDGfR0mWzGDhzJrUX2mi-X1FIqs7xVG01Q&usqp=CAU" alt="" />
              
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.ulcdn.net/images/products/320946/original/aurora_Photo_Frame_LP.jpg?1614274048" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.incrediblegifts.in/wp-content/uploads/2022/08/calln-1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bI3f6KUybWzs14smWvyskvulfKGjtOSRNg&usqp=CAU" alt="Mountains" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgDGfR0mWzGDhzJrUX2mi-X1FIqs7xVG01Q&usqp=CAU" alt="" />
              
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.ulcdn.net/images/products/320946/original/aurora_Photo_Frame_LP.jpg?1614274048" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.incrediblegifts.in/wp-content/uploads/2022/08/calln-1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bI3f6KUybWzs14smWvyskvulfKGjtOSRNg&usqp=CAU" alt="Mountains" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgDGfR0mWzGDhzJrUX2mi-X1FIqs7xVG01Q&usqp=CAU" alt="" />
              
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.ulcdn.net/images/products/320946/original/aurora_Photo_Frame_LP.jpg?1614274048" alt="" />
                </a>
              </div>
            </div>
            <div class="insta-res">
              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="https://www.incrediblegifts.in/wp-content/uploads/2022/08/calln-1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
</div>
         
        </div>
      </div>
    </>
  );
};

export default Home;
