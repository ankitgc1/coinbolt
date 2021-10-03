import React from "react";

function Footer() {
  return (
    <>
      {/* Start of footer section
  ============================================= */}
      <footer
        id="saas_two_footer"
        className="saas_two_footer_section relative-position"
      >
        <div className="s2-newslatter_section relative-position">
          <div className="container">
            <div className="s2-newslatter_content relative-position">
              <div className="s2-newslatter_title  text-center saas2-headline pera-content">
                <h2>Subscribe now!</h2>
                <p>Get the latest update.</p>
              </div>
              <div className="s2-newslatter-form  relative-position">
                <form action="#">
                  <input
                    className="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <div className="nws-button position-absolute text-capitalize">
                    <button className="hover-btn" type="submit" value="Submit">
                      {" "}
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="newsletter_pattern_1">
              <img src="images/banner-nb.png" alt />
            </div>
            <div
              className="cloud_anim newsletter_pattern_2"
              style={{
                backgroundImage:
                  "url(https://old3.commonsupport.com/emu/wp-content/uploads/2020/02/cloud-2.png)",
              }}
            />
            <div
              className="cloud_anim newsletter_pattern_3"
              style={{
                backgroundImage:
                  "url(https://old3.commonsupport.com/emu/wp-content/uploads/2020/02/cloud-5.png)",
              }}
            />
            <div
              className="newsletter_pattern_4 "
              style={{
                backgroundImage: "url(assets/img/saas-c/banner/ns.png)",
              }}
            />
            <div
              className="newsletter_pattern_5 "
              style={{
                backgroundImage: "url(assets/img/saas-c/banner/ns2.png)",
              }}
            />
          </div>
        </div>
        <div className="footer_content pera-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="s2_footer_widget clearfix ul-li-block  saas2-headline">
                  <div className="s2_footer_about">
                    <div className="s2-footer_logo">
                      <img src="images/img-logo.png" alt />
                    </div>
                    <div className="footer_about">
                      Coinsbolt is governed by a decentralized community
                    </div>
                             </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="s2_footer_widget clearfix ul-li-block saas2-headline">
                  <div className="s2_footer_menu">
                    <h3 className="s2_widget_title">
                      <span>Links</span>
                      <i />
                    </h3>
                    <ul>
                      <li>
                        <a href="#"> Home</a>
                      </li>
                      <li>
                        <a href="#"> Team</a>
                      </li>
                      <li>
                        <a href="#"> FAQ</a>
                      </li>
                      <li>
                        <a href="#"> Services</a>
                      </li>
                      <li>
                        <a href="#"> Gallery</a>
                      </li>
                      <li>
                        <a href="#"> About us</a>
                      </li>
                      {/* <li>
                        <a href="#"> Contact</a>
                      </li> */}
                      {/* <li>
                        <a href="#"> Testimonials</a>
                      </li> */}
                      {/* <li>
                        <a href="#"> News</a>
                      </li>
                      <li>
                        <a href="#"> Portfolio</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="s2_footer_widget clearfix ul-li-block saas2-headline">
                  <div className="s2_footer_social">
                    <h3 className="s2_widget_title">
                      <span>Newsletter</span>
                      <i />
                    </h3>
                    <p>Send us a newsletter to get update</p>
                    <form action="#">
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                      <button type="submit" value="Submit">
                        {" "}
                        <i className="fas fa-paper-plane" />
                      </button>
                    </form>
                    <a href="https://www.facebook.com/ccoinsbolt">
                      <i className="fb-bg fab fa-facebook-f " />
                    </a>
                    {/*<a href="https://www.youtube.com/channel/UCReznJQy0J9_XlsGG1cas3A"><i class="dr-bg fab fa-youtube"></i></a>*/}
                    <a href="https://twitter.com/coinsbolt">
                      <i className="tw-bg fab fa-twitter" />
                    </a>
                    <a href="https://t.me/coinsboltofficia">
                      <i className="dr-bg fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="s2-copyright text-center">
        2020 © All rights reserved By <a href="/">Coinsbolt</a>
      </div>
      {/* End of footer section 
  ============================================= */}
    </>
  );
}

export default Footer;
