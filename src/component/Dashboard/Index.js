import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import { userRefralid } from "../../redux/sellerReducer";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Clock from "react-live-clock";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function Dashboard(props) {
  const [regId, setregId] = useState();
  const [levelNo, setLevelNo] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const [copied, setCopied] = useState();
  const { loadContract, contract } = props;

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    display: block;
    margin: 0 auto;
    z-index: 50;
    border: 5px solid #f1c645;
  `;

  const curretwallet = useSelector((state) => state.userslice.userId);

  console.log(
    "console user data in chailddata chailddata //////",
    props.chailddata,
    "//////"
    );
  // debugger;
  const date = new Date(props.createdDate);
  console.log("props.earnBusd", props.earnBusd, "props.createdDate", props.createdDate);

  const genratrefral = "abc";
  // window.location + "/id:/" + props.userdata.id + "/" + props.account;
  useEffect(() => {
    const dasboarddata = async () => {
      if (!props.userdata.isExist) {
        await props.user(curretwallet);
        setLoading(true);
      }
      // else if (props.userdata.isExist === "") {
      //   history.push("/");
      // }
    };
    dasboarddata();
  }, [!props.userdata.id]);

  const userRefralid = () => {
    dispatch(userRefralid(props.reguserId));
  };

  return (
    <div>
      <body class="hold-transition dark-skin dark-sidebar sidebar-mini theme-mix">
        <div class="wrapper">
          <header class="main-header">
            <nav class="navbar navbar-static-top">
              <div className="menuebar">
                <div class="mob-logo-con">
                  <img
                    className="mob-logo-icon"
                    style={{ width: "100px" }}
                    src="logo512.png"
                    alt="logo"
                  />
                </div>
                <div class="profile-info">
                  {/* log out icon */}
                  <div class="text-center d-inline-block">
                    <a
                      href="/"
                      class="link"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Logout"
                    >
                      <i
                        class="ion ion-power"
                        style={{ fontSize: "35px", color: " #f1c645" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <aside class="main-sidebar">
            <div class="user-profile">
              <div class="ulogo">
                <a href="#">
                  <img
                    src="favicons/img-logo.png"
                    style={{
                      width: "130px",
                      height: "60px",
                      borderRadius: "none",
                    }}
                  />
                </a>
              </div>
              <div class="profile-pic" style={{ marginTop: "50px" }}>
                <div id="chartdiv3" >
                  <div className="asideuser-data">
                    <h4>Your ID </h4>&nbsp;&nbsp;&nbsp;
                    <h2> {props.userdata.id}</h2>
                  </div>

                  <div className="asideuser-data">
                    <h4>Level </h4>&nbsp;&nbsp;&nbsp;
                    <h2>{props.userdata.currentLevel}</h2>
                  </div>
                  <div className="asideuser-data">
                    {" "}
                    <h4>Referrer ID </h4>&nbsp;&nbsp;&nbsp;
                    <h2> {props.userdata.referrerID}</h2>
                  </div>

                  {props.chailddata[0] ? (
                    <div
                      style={{
                        backgroundColor: "#343A40",
                        margin: "20px",
                        minHeight: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div className="asideuser-data">
                        <h6>First Diract ID </h6>&nbsp;&nbsp;&nbsp;
                        <h3 style={{ color: "#f1c645" }}>
                          {props.chailddata[0].id}
                        </h3>
                      </div>
                      <div className="asideuser-data">
                        <h6>First Diract level's </h6>&nbsp;&nbsp;&nbsp;
                        <h3 style={{ color: "#f1c645" }}>
                          {" "}
                          {props.chailddata[0].currentLevel}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {props.chailddata[1] ? (
                    <div
                      style={{
                        backgroundColor: "#343A40",
                        margin: "20px",
                        minHeight: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div className="asideuser-data">
                        <h6>Second Diract ID </h6>&nbsp;&nbsp;&nbsp;
                        <h3 style={{ color: "#f1c645" }}>
                          {" "}
                          {props.chailddata[1].id}
                        </h3>
                      </div>
                      <div className="asideuser-data">
                        <h6>Second Diract's level </h6>&nbsp;&nbsp;&nbsp;
                        <h3 style={{ color: "#f1c645" }}>
                          {" "}
                          {props.chailddata[1].currentLevel}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </aside>

          <div class="content-wrapper">
            <div className="copycontainer">
              <h5>
                Your referral link:
                {`${window.location.origin}/invite:${props.userdata.id}`}
              </h5>
              <Button
                variant="outline-warning"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `${window.location.origin}/invite:${props.userdata.id}`
                  )
                }
              >
                Copy
              </Button>
            </div>
            <div class="container-full">
              <div style={{ zIndex: 10 }} className="body-container">
                {" "}
                <ClipLoader
                  color={color}
                  loading={loading}
                  css={override}
                  style={{ zIndex: 12 }}
                  size={150}
                />
              </div>

              <section class="content" style={{ padding: "10px" }}>
                <div class="row">
                  <div class="col-lg-4 col-12">
                    <div class="row" style={{ marginTop: "15px" }}>
                      <div class="col-lg-6 col-12">
                        <div class="box">
                          <div
                            class="box-body bg-dark"
                            style={{ padding: "0px" }}
                          >
                            <div class="chart">
                              <div
                                id="chartdiv3"
                                style={{ textAlign: "center" }}
                              >
                                <div className="clock-container">
                                  <div className="clock-wall">
                                    <div className="clock-inerwall">
                                      <Clock
                                        className="clock-time"
                                        format={"HH:mm:ss"}
                                        ticking={true}
                                        style={{ color: " #f9d14a" }}
                                        timezone={"GMT"}
                                      // timezone={"US/Pacific"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {date ?
                                  <div style={{ marginTop: "5px" }}>
                                    <h5 style={{ color: "#f9d14a" }}>
                                      Joining Date
                                    </h5>
                                    <h5>{date.toLocaleDateString()}</h5>
                                  </div> : ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="box-body py-20 bg-dark">
                          <h2
                            class="font-weight-600 mt-0"
                            style={{ textAlign: "center" }}
                          >
                            BUSD
                          </h2>
                        </div>
                        <a class="box box-link-pop text-center" href="/">
                          <div
                            class="box-body "
                            style={{ backgroundColor: " #252930" }}
                          >
                            <p class="font-size-30 text-pink">
                              {/* <i class="fa fa-money text-muted mr-5 mb-20"></i> */}
                              {/* <br></br> */}
                              <strong className="busdbalance">
                                {props.earnBusd / 1000000000000000000 ? props.earnBusd : "0"}
                              </strong>
                            </p>
                          </div>
                          <div class="box-body py-20 bg-dark">
                            <h3 class="font-weight-600 mt-0">Balance</h3>
                          </div>
                        </a>
                      </div>
                      <div class="col-12">
                        <div class="box" style={{ backgroundColor: "#252930" }}>
                          <div class="box-header with-border">
                            <h2 class="box-title">Buy Level's</h2>
                            <div class="box-controls pull-right"></div>
                          </div>
                          <div class="box-body">
                            <div class="form-group">
                              <div
                                class="input-group"
                                style={{
                                  backgroundColor: "#252930",
                                }}
                              >
                                {/* <span class="input-group-addon"></span> */}
                                <input
                                  class=" levelinput"
                                  type="number"
                                  placeholder="0"
                                  min="1"
                                  max="8"
                                  onChange={(e) => {
                                    let x = parseInt(e.target.value);
                                    setLevelNo(x);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="levelbtncontin">
                              <button
                                className="levelbtn"
                                onClick={() => {
                                  props.approve();
                                }}
                              >
                                Connect wallet
                              </button>
                              <button
                                className="levelbtn"
                                onClick={() => {
                                  props.buyLevel(levelNo);
                                  // console.log("register id is----->",regId)
                                }}
                              >
                                Buy Level
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //// level cards */}
                  <div className="center-divs">
                    {/* mobile card  */}
                    <div className="user-pro-mob">
                      <div class="" style={{ marginTop: "50px" }}>
                        <div id="chartdiv3" >
                          <div className="asideuser-data">
                            <h4>Your ID </h4>&nbsp;&nbsp;&nbsp;
                            <h2> {props.userdata.id}</h2>
                          </div>

                          <div className="asideuser-data">
                            <h4>Level </h4>&nbsp;&nbsp;&nbsp;
                            <h2>{props.userdata.currentLevel}</h2>
                          </div>
                          <div className="asideuser-data">
                            {" "}
                            <h4>Referrer ID </h4>&nbsp;&nbsp;&nbsp;
                            <h2> {props.userdata.referrerID}</h2>
                          </div>

                          {props.chailddata[0] ? (
                            <div
                              style={{
                                backgroundColor: "#343A40",
                                margin: "20px",
                                minHeight: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                              }}
                            >
                              <div className="asideuser-data">
                                <h6>First Diract ID </h6>&nbsp;&nbsp;&nbsp;
                                <h3 style={{ color: "#f1c645" }}>
                                  {props.chailddata[0].id}
                                </h3>
                              </div>
                              <div className="asideuser-data">
                                <h6>First Diract level's </h6>&nbsp;&nbsp;&nbsp;
                                <h3 style={{ color: "#f1c645" }}>
                                  {" "}
                                  {props.chailddata[0].currentLevel}
                                </h3>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          {props.chailddata[1] ? (
                            <div
                              style={{
                                backgroundColor: "#343A40",
                                margin: "20px",
                                minHeight: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                              }}
                            >
                              <div className="asideuser-data">
                                <h6>Second Diract ID </h6>&nbsp;&nbsp;&nbsp;
                                <h3 style={{ color: "#f1c645" }}>
                                  {" "}
                                  {props.chailddata[1].id}
                                </h3>
                              </div>
                              <div className="asideuser-data">
                                <h6>Second Diract's level </h6>
                                &nbsp;&nbsp;&nbsp;
                                <h3 style={{ color: "#f1c645" }}>
                                  {" "}
                                  {props.chailddata[1].currentLevel}
                                </h3>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="center-divs-inner">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                        return (
                          <>
                            {item <= props.userdata.currentLevel ? (
                              <div className="center-box-buy">
                                <div>
                                  <h5>{item} Level</h5>
                                </div>
                                <div>
                                  <p>
                                    <FcBusinessman />
                                  </p>
                                </div>
                                <div>{/* <h6> Members</h6> */}</div>
                              </div>
                            ) : (
                              <div className="center-box">
                                <div>
                                  <h5>{item} Level</h5>
                                </div>
                                <div>
                                  <p>
                                    <FcBusinessman />
                                  </p>
                                </div>
                                <div>{/* <h6> Members</h6> */}</div>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div class="col-lg-5 col-12" style={{ marginTop: "10px" }}>
                    <div class="box" style={{ backgroundColor: "#252930" }}>
                      <div class="box-header">
                        <h4 class="box-title">
                          <i class="fa fa-file mr-15"></i>Compensation plan
                        </h4>
                      </div>
                      <div class="box-body p-0">
                        <div class="table-responsive">
                          <table class="table table-hover mb-0">
                            <thead>
                              <tr>
                                <th>Level</th>
                                <th>Levels Price</th>
                                <th>Team</th>
                                <th>you pay</th>
                                <th>you Earn</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>$10</td> <td>2</td>
                                <td>$10</td>
                                <td>$20</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>$20</td>
                                <td>4</td>
                                <td>$20</td>
                                <td>$80</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>$40</td> <td>8</td>
                                <td>$40</td>
                                <td>$320</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>$80</td> <td>16</td>
                                <td>$80</td>
                                <td>$1280</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>$160</td> <td>32</td>
                                <td>$160</td>
                                <td>$5120</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>$320</td> <td>64</td>
                                <td>$320</td>
                                <td>$20480</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>$640</td> <td>128</td>
                                <td>$640</td>
                                <td>$81920</td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>$1280</td> <td>256</td>
                                <td>$1280</td>
                                <td>$327680</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside class="control-sidebar">
            <div class="rpanel-title">
              <span class="pull-right btn btn-circle btn-danger">
                <i
                  class="ion ion-close text-white"
                  data-toggle="control-sidebar"
                ></i>
              </span>{" "}
            </div>
            <ul class="nav nav-tabs control-sidebar-tabs">
              <li class="nav-item">
                <a href="#control-sidebar-home-tab" data-toggle="tab">
                  Chat
                </a>
              </li>
              <li class="nav-item">
                <a href="#control-sidebar-settings-tab" data-toggle="tab">
                  Todo
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane" id="control-sidebar-home-tab">
                <div class="flexbox">
                  <a href="/" class="text-grey">
                    <i class="ti-more"></i>
                  </a>
                  <p>Users</p>
                  <a href="/" class="text-right text-grey">
                    <i class="ti-plus"></i>
                  </a>
                </div>
                <div class="lookup lookup-sm lookup-right d-none d-lg-block">
                  <input
                    type="text"
                    name="s"
                    placeholder="Search"
                    class="w-p100"
                  />
                </div>
                <div class="media-list media-list-hover mt-20">
                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-success" href="/">
                      <img src="images/avatar/1-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-danger" href="/">
                      <img src="images/avatar/2-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-warning" href="/">
                      <img src="images/avatar/3-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-primary" href="/">
                      <img src="images/avatar/4-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-success" href="/">
                      <img src="images/avatar/1-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-danger" href="/">
                      <img src="images/avatar/2-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-warning" href="/">
                      <img src="images/avatar/3-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div class="media py-10 px-0">
                    <a class="avatar avatar-lg status-primary" href="/">
                      <img src="images/avatar/4-2.jpg" alt="..." />
                    </a>
                    <div class="media-body">
                      <p class="font-size-16">
                        <a class="hover-primary" href="/">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="control-sidebar-settings-tab">
                <div class="flexbox">
                  <a href="/" class="text-grey">
                    <i class="ti-more"></i>
                  </a>
                  <p>Todo List</p>
                  <a href="/" class="text-right text-grey">
                    <i class="ti-plus"></i>
                  </a>
                </div>
                <ul class="todo-list mt-20">
                  <li class="py-15 px-5 by-1">
                    <input
                      type="checkbox"
                      id="basic_checkbox_1"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_1" class="mb-0 h-15"></label>
                    <span class="text-line">Nulla vitae purus</span>
                    <small class="badge bg-danger">
                      <i class="fa fa-clock-o"></i> 2 mins
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5">
                    <input
                      type="checkbox"
                      id="basic_checkbox_2"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_2" class="mb-0 h-15"></label>
                    <span class="text-line">Phasellus interdum</span>
                    <small class="badge bg-info">
                      <i class="fa fa-clock-o"></i> 4 hours
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5 by-1">
                    <input
                      type="checkbox"
                      id="basic_checkbox_3"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_3" class="mb-0 h-15"></label>
                    <span class="text-line">Quisque sodales</span>
                    <small class="badge bg-warning">
                      <i class="fa fa-clock-o"></i> 1 day
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5">
                    <input
                      type="checkbox"
                      id="basic_checkbox_4"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_4" class="mb-0 h-15"></label>
                    <span class="text-line">Proin nec mi porta</span>
                    <small class="badge bg-success">
                      <i class="fa fa-clock-o"></i> 3 days
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5 by-1">
                    <input
                      type="checkbox"
                      id="basic_checkbox_5"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_5" class="mb-0 h-15"></label>
                    <span class="text-line">Maecenas scelerisque</span>
                    <small class="badge bg-primary">
                      <i class="fa fa-clock-o"></i> 1 week
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5">
                    <input
                      type="checkbox"
                      id="basic_checkbox_6"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_6" class="mb-0 h-15"></label>
                    <span class="text-line">Vivamus nec orci</span>
                    <small class="badge bg-info">
                      <i class="fa fa-clock-o"></i> 1 month
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5 by-1">
                    <input
                      type="checkbox"
                      id="basic_checkbox_7"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_7" class="mb-0 h-15"></label>
                    <span class="text-line">Nulla vitae purus</span>
                    <small class="badge bg-danger">
                      <i class="fa fa-clock-o"></i> 2 mins
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5">
                    <input
                      type="checkbox"
                      id="basic_checkbox_8"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_8" class="mb-0 h-15"></label>
                    <span class="text-line">Phasellus interdum</span>
                    <small class="badge bg-info">
                      <i class="fa fa-clock-o"></i> 4 hours
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5 by-1">
                    <input
                      type="checkbox"
                      id="basic_checkbox_9"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_9" class="mb-0 h-15"></label>
                    <span class="text-line">Quisque sodales</span>
                    <small class="badge bg-warning">
                      <i class="fa fa-clock-o"></i> 1 day
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li class="py-15 px-5">
                    <input
                      type="checkbox"
                      id="basic_checkbox_10"
                      class="filled-in"
                    />
                    <label for="basic_checkbox_10" class="mb-0 h-15"></label>
                    <span class="text-line">Proin nec mi porta</span>
                    <small class="badge bg-success">
                      <i class="fa fa-clock-o"></i> 3 days
                    </small>
                    <div class="tools">
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <div class="control-sidebar-bg"></div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
