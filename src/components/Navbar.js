import React, { useState, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSistrix } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FcLock } from "react-icons/fc";
import { BsFillCartDashFill } from "react-icons/bs";
import { FcCallback } from "react-icons/fc";
import { IoMenuSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar = () => {

  const [showMainuoption, setShowMainuoption] = useState(false);


  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className=" container-fluid sticky-top">
        <div className="menu">
          <button
            class="btn btn-outline-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <IoMenuSharp /> MENU
          </button>

          <div
            class="offcanvas offcanvas-start side_bar"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="sidebar-menu scrollbar ">
              <ul className="nav nav-sidebar nav-vertical nav-uppercase nav-slide">
                <li
                  id="menu-item-679689"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-679689 has-icon-left"
                >
                  <a href="/" aria-current="page">
                    <img
                      class="ux-sidebar-menu-icon"
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2021/12/home-150x150.png"
                      alt=""
                    />
                    Home
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-139214"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-139214 has-icon-left"
                >
                  <a href="/ShopNow">
                    <img
                      class="ux-sidebar-menu-icon"
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2021/02/Premium-acrylic-wall-photo-compressed-150x150.jpg"
                      alt=""
                    />
                    Premium Acrylic Photo
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-279894"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-279894 has-icon-left"
                >
                  <a href="/AcraliWallp">
                    <img
                      class="ux-sidebar-menu-icon"
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2021/10/2-Photo-Collage-Acrylic-Wall-Photo-150x150.jpg"
                      alt=""
                    />
                    Acrylic Photo with Design
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-355440"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-355440 has-icon-left"
                >
                  <a href="/Wall">
                    <img
                      class="ux-sidebar-menu-icon"
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2022/08/Acrylic-Wall-Clock-150x150.jpg"
                      alt=""
                    />
                    Acrylic Wall Clock
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-482028"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-482028 has-icon-left"
                >
                  <a href="/Namep">
                    <img
                      class="ux-sidebar-menu-icon"
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2022/10/Framed-Acrylic-min-e1669283512299-150x150.jpg"
                      alt=""
                    />
                    Name plate Acralic photo
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-1382111"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1382111 has-icon-left"
                >
                  <a href="/FramedA">
                    <img
                      class="ux-sidebar-menu-icon "
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2023/10/3-150x150.jpg"
                      alt=""
                    />
                    Framed Acrylic Wall photos
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-1382111"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1382111 has-icon-left"
                >
                  <a href="/AcraliCar">
                    <img
                      class="ux-sidebar-menu-icon "
                      width="50"
                      height="50"
                      src="https://omgs.in/wp-content/uploads/2023/10/3-150x150.jpg"
                      alt=""
                    />
                    Acrylic Car photos
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-129310"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-129310"
                >
                  <a href="/">
                    Track Your Order
                  </a>
                </li>
                <hr/>
                <li
                  id="menu-item-241378"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-241378"
                >
                  <a href="/Footer">Contact Us</a>
                </li>
                <hr/>
                <li
                  id="menu-item-281120"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-281120"
                >
                  <a href="/">Blog</a>
                </li>
                <hr/>
                <li
                  id="menu-item-129311"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-129311"
                >
                  <a href="/Footer">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={
            showMainuoption
              ? "mainu-option mobile-mainu-option"
              : "mainu-option"
          }
        >
          <ul className="nav">
            {/* <li className="icon">
              {" "}
              <BsFillGeoAltFill />
            </li> */}
            <li className="logo">
              
                <h1>LOGO</h1>
            
            </li>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {" "}
                <FaSistrix />
              </button>
            </form> */}
            {/* <li className="icon">
              {" "}
              <FcLock />
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span>log In </span>
              </a>
              Register
            </li> */}
            {/* <li className="icon">
              {" "}
              <FcCallback />
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <h3>Cart /</h3>
              </a>
            </li>
            <li className="icon">
              <BsFillCartDashFill />
            </li>
            <li className="nav-item">
<button id="myBtn" onClick={openModal}>
       Log In
      </button>
 
      {modalVisible && (
        <div
          style={{
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              border: '1px solid #ccc',
            }}
          >
            <span style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px', cursor: 'pointer' }} onClick={closeModal}>&times;</span>
            <form action="action_page.php" >
  <div class="container">
    <h1>Log In</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>


    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

    <p>Lost your password?</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn cancelbtn">Sign Up</button>
    </div>
  </div>
</form>

          </div>
        </div>
      )}
</li>

          </ul>
        </div>
       










   



        {/* <div className="menu">
          <a href="#" onClick={() => setShowMainuoption(!showMainuoption)}>
            <GiHamburgerMenu />
          </a>
        </div> */}
      </div>
      {/* <nav className="sticky-top">
      <div className="container-nav">
      <div className="nav menu">
        <ul class="nav nav-underline">
          <li class="nav-option">
            <a class="nav-link " href="#">
            Prints
            </a>
          </li>
          <li class="nav-option">
            <a class="nav-link" href="#">
            Home Décor
            </a>
          </li>
          <li class="nav-option">
            <a class="nav-link" href="#">
            Personalised Gifts
            </a>
          </li>
          <li class="nav-option">
            <a class="nav-link" href="#">
            Occasions
            </a>
          </li>
          <li class="nav-option">
            <a class="nav-link" href="#">
            Country/Cities
            </a>
          </li>
          <li class="nav-option option">
            <a class="nav-link " href="#">
            Special Offers
            </a>
          </li>
          <li class="nav-option">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
      </div>
      </nav> */}
    </>
  );
};

export default Navbar;
