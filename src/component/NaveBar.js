import React from "react";
// import { Link } from "react-router-dom";

function NaveBar() {
  return (
    <>
      {/* ...///// preloader - start */}
      {/* <div id="preloader" className="saas-classic-preloader" />
      <div className="up">
        <a href="#" id="scrollup" className="saas-classic-scrollup text-center">
          <i className="fas fa-angle-up" />
        </a>
      </div> */}
      {/* Start of header section
  ============================================= */}
      <header
        id="header_main"
        className="saas_two_main_header"
        style={{ position: "fixed" }}
      >
        <div className="container">
          <div className="s_main_menu">
            <div className="row">
              <div className="col-md-2">
                <div className="brand_logo">
                  <a href="#saas_two_banner">
                    <img src="images/img-logo.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <div className="main_menu_list clearfix float-right">
                  <nav className="s2-main-navigation  clearfix ul-li">
                    <ul
                      id="main-nav"
                      className="navbar-nav text-capitalize clearfix"
                    >
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#saas_two_service">Service</a>
                      </li>
                      <li>
                        <a href="#saas_two_about">About</a>
                      </li>
                      <li>
                        <a href="#saas_two_feature">Features</a>
                      </li>
                      <li>
                        <a href="#saas_two_team">Team</a>
                      </li>
                      <li>
                        <a href="#s2-faq">FAQ</a>
                      </li>
                      <li>
                        <a href="#s2-pricing">Pricing</a>
                      </li>
                    </ul>
                  </nav>
                  {/*  <div class="saas_sign_up_btn text-center">
                              <a href="#!"> Free sign up</a>
                          </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* //desktop menu */}
          <div className="s2-mobile_menu relative-position">
            <div className="s2-mobile_menu_button s2-open_mobile_menu">
              <i className="fas fa-bars" />
            </div>
            <div className="s2-mobile_menu_wrap">
              <div className="mobile_menu_overlay s2-open_mobile_menu" />
              <div className="s2-mobile_menu_content">
                <div className="s2-mobile_menu_close s2-open_mobile_menu">
                  <i className="far fa-times-circle" />
                </div>
                <div className="m-brand-logo text-center">
                  <a href="">
                    <img src="images/logo-logo.png" alt />
                  </a>
                </div>
                <nav className="s2-mobile-main-navigation  clearfix ul-li">
                  <ul
                    id="m-main-nav"
                    className="navbar-nav text-capitalize clearfix"
                  >
                    <li>
                      <a herf="/">Home</a>
                    </li>
                    <li>
                      <a href="#saas_two_service">Service</a>
                    </li>
                    <li>
                      <a href="#saas_two_about">About</a>
                    </li>
                    <li>
                      <a href="#saas_two_feature">Features</a>
                    </li>
                    <li>
                      <a href="#saas_two_team">Team</a>{" "}
                    </li>
                    <li>
                      <a href="#s2-faq">FAQ</a>{" "}
                    </li>
                    <li>
                      <a href="#s2-pricing">Pricing</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NaveBar;
