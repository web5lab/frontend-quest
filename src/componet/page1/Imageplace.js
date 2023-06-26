import React from "react";
import "./image.css";
import frame from "../images/Newphotos/framer.png";
import logo from "../images/Newphotos/logo.png";
import git from "../images/Newphotos/GitHub.png";
import face from "../images/Newphotos/Facebook.png";
import din from "../images/Newphotos/Linkedin.png";
import insta from "../images/Newphotos/Instagram.png";
import twitter from "../images/Newphotos/Twitter.png";
import image1 from '../images/Newphotos/snow.png'
function Imageplace() {
  return (
    <div className="wrapper">
      <div className="maindiv1">
        <div className="singlecol">
          <div className="textdiv1">
            <h1>Your engagement holds significance</h1>
            <h4>Get Personalized Opportunities with no barriers.</h4>
          </div>
          <img className="img1" src={image1} alt={'snow'} />
        </div>
      </div>

      <div className="maindiv2">
        <div>
          <img className="framecls" src={frame} alt="" />
        </div>
        <div className="img3">
          <div className="textOnImg">
            <p className="p-txt">
              Your actions are valuable, and they follow you wherever vou go.
              Enhance your reputation bv actively participating in exclusive
              missions winning personalized rewards, and a plethora ot other
              opportunities!
            </p>
          </div>
        </div>
      </div>

      <div className="maindiv1">
        <div className="textdiv">
          <h1 className="texts">Attain reputation</h1>
          <h2 className="texts2">dedication</h2>
        </div>
        <img className="img1" src={image1} alt={'snow'} />

      </div>



      <div className="maindiv3">
        <div>
          <img className="framecls" src={frame} alt="" />
        </div>
        <div className="img4">
          <div className="textOnImg">
            <p className="p-txt4">
              Gain knowledge about your preferred projects and brands, all in a
              singular location. Engage in their endeavors, fulfill their
              objectives, and receive crypto rewards. Earn your first crypto
              today!
            </p>
          </div>
        </div>
      </div>

      <div className="maindiv1">
        <div className="textdiv">
          <h1>Earn crypto rewards</h1>
        </div>
        <img className="img1" src={image1} alt={'snow'} />

      </div>

      <div className="maindiv3">
        <div >
          <img className="framecls" src={frame} alt="" />
        </div>
        <div className="img5">
          <div className="textOnImg">
            <p className="p-txt4">
              Your actions are valuable, and they follow you wherever vou go.
              Enhance your reputation bv actively participating in exclusive
              missions winning personalized rewards, and a plethora ot other
              opportunities!
            </p>
          </div>
        </div>
      </div>

      <div className="maindiv1">
        <div className="textdiv2">
          <h1>Spread the word</h1>
        </div>
        <img className="img1" src={image1} alt={'snow'} />
      </div>

      <div className="maindiv6" >
        <div>
          <img className="framecls" src={frame} alt="" />
        </div>

        <div className="img6">
          <div className="textOnImg">
            <p className="p-txt6">
              Invite others using your unique link and
              receive rewards when they
              join the platform and complete the
              missions you recommend.
            </p>
          </div>
        </div>
      </div>

      <div className="footer ">
        <div className="bottomlogo">
          <img src={logo} alt="" />
        </div>

        <div className="copyright">
          <p>© 2023 WINTERFUEL</p>
        </div>

        <div className="sociallist">
          <li>
            <div className="social">
              <img src={din} alt="" />
            </div>
          </li>
          <li>
            <div className="social">
              <img src={face} alt="" />
            </div>
          </li>
          <li>
            <div className="social">
              <img src={git} alt="" />
            </div>
          </li>
          <li>
            <div className="social">
              <img src={insta} alt="" />
            </div>
          </li>
          <li>
            <div className="social">
              <img src={twitter} alt="" />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Imageplace;
