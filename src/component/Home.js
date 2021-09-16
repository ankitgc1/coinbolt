import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { user, approve, inputRefralid } from "../redux/sellerReducer";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { Button } from 'react-bootstrap';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";



function Home(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  //  current listed  refral id for refrrer
  const currentRefralid = useSelector(
    (state) => state.userslice.currentRefralid
  );
  const [inputValue, setInputValue] = useState();
  const [regNo, setRegNo] = useState();
  const [viewID, setviewID] = useState();

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    display: block;
    margin: 0 auto;
    z-index: 50;
    border: 5px solid #f1c645;
  `;

  const sendaddresandid = () => {
    console.log("current account from home.js", props.account);
    dispatch(user(props.account));
    dispatch(inputRefralid(inputValue));
  };
  const refrelinputfun = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <>
      {/* Start of Banner section    
  ============================================= */}
      <section
        id="saas_two_banner"
        className="saas_two_banner_section relative-position"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="s2-banner_area relative-position">
                <div className="s2-banner_content saas2-headline pera-content">
                  <span className="s2-tilte_tag">Coinsbolt</span>
                  <h1 style={{ color: "#000" }}>Opportunity starts here</h1>
                  <p style={{ color: "#ffffff!important" }}>
                    Decentralized networking platform based on smart contracts
                    that connects people from all over the world and opens up
                    the limitless possibilities of the new economic financial
                    system.
                  </p>
                  <div style={{ zIndex: 10 }}>
                    {" "}
                    <ClipLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={150}
                    />
                  </div>

                  <div className="banner_btn">
                    <div>
                      {/* {idinput ? ( */}
                      <input
                        type="text"
                        className="refralinput"
                        placeholder="Enter referrer ID"
                        onChange={(e) => {
                          let x = e.target.value;
                          x = parseInt(x);

                          setRegNo(x);
                        }}
                      />
                    </div>
                    <a style={{cursor:'pointer'}}
                      onClick={() => {
                        dispatch(approve("approve"));
                      }}
                    >
                      <i className="fas fa-cloud-download-alt" /> Connect Wallet
                    </a>
                    <a
                      className="registrationbtn"
                      onClick={() => {
                        // console.log(
                        //   "type of register id is----<<<",
                        //   typeof regNo
                        // );
                        props.registerUser(false, regNo);
                      }}
                    >
                    
                      <i className="fas fa-clipboard-list" />
                      Registration
                    </a>
                    <input 
                      type="number"
                      placeholder="Enter Id"
                      onChange={(e) => {
                        let y = e.target.value;
                        y = parseInt(y);

                        setviewID(y);
                      }}
                    />
                    <a
                      onClick={() => {
                        // console.log(
                        //   "type of view id is----<<<",
                        //   viewID
                        // );
                        props.registerUser(true, viewID);
                        history.push("/visitorDashboard");
                        // props.viewingData(viewID);
                      }}
                    // onClick={() => history.push("/visitorDashboard")}
                  >
                    See Dashboard
                  </a>
                  </div>
                </div>
                <div className="banner_mockup homeimg-container">
                  <img src="images/backimg.png" alt className="home-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="s2-banner_shape1 position-absolute"
          data-parallax='{"y" : 100}'
        >
          <img src="images/banner-b-shape4.png" alt />
        </div>
        <div className="s2-banner_shape2 position-absolute">
          <img src="images/banner-b-shape3.png" alt />
        </div>
        <div className="s2-banner_shape3 position-absolute">
          <img src="images/banner-b-shape2.png" alt />
        </div>
      </section>
      {/* End of Banner section
  ============================================= */}
    </>
  );
}

export default Home;
