import React, { useEffect, useState } from "react";
import About from "./About";
import Faq from "./Faq";
import Features from "./Features";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";
import Home from "./Home";
import NaveBar from "./NaveBar";
import { useHistory } from "react-router-dom";

function Main(props) {
  const history = useHistory();
  const [changeroute, setchangeRoute] = useState(props.chagngeroute);
  if (changeroute) {
    history.push("/dashboard");
  }

  // else if (!changeroute) {
  //   history.push("/");
  // }
  // console.log("current account from main.js", props.referrerID);
  // props.chagngeroute = movetodashboard;
  // =======call on bulion base

  return (
    <div>
      {/* ...///// preloader - start */}
      {/* <div id="preloader" className="saas-classic-preloader" />
      <div className="up">
        <a href="#" id="scrollup" className="saas-classic-scrollup text-center">
          <i className="fas fa-angle-up" />
        </a>
      </div> */}

      {/* <NaveBar/> */}
      <Home
        account={props.account}
        idinput={props.idinput}
        referrerID={props.referrerID}
        registerUser={props.registerUser}
        viewingData={props.viewingData}
      />
      <Services />
      <About />
      <Features />
      <Team />
      <Faq />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Main;
