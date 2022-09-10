import React from "react";

import "../../CSS/Home.css";
import TopCoverImage from "../../assets/images/CoverImage1.jpg";
import TopImgComp from "../CustomComps/TopImgComp";
import Oak from "../../assets/images/oak.jpg";
import Buk from "../../assets/images/Buk.jpg";
import Ash from "../../assets/images/Ash.jpg";

import img4 from "../../assets/images/wood 1.jpg";
import img5 from "../../assets/images/workshop 1.jpg";
import img6 from "../../assets/images/paper 1.jpg";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Home() {
  return (
    <>
      <TopImgComp imageUrl={TopCoverImage} />

      <div className="homeContainer">
        <div className="hHead">
          <h1>THE WOOD WE</h1>
          <h1>WORK WITH</h1>
        </div>

        <div className="homecont1">
          <div className="Imgcont">
            <img src={Oak} alt="" style={{ borderRadius: "42px" }} />

            <img src={Buk} alt="" style={{ borderRadius: "42px" }} />
            <img src={Ash} alt="" style={{ borderRadius: "42px" }} />
          </div>
          <div className="ImgNames">
            <p>Oak</p>
            <p>Buk</p>
            <p>Ash</p>
          </div>
          <div className="feats">
            <div className="featsCols">
              <p>
                <FaCheck className="check" />
                Durability
              </p>
              <p>
                <FaCheck className="check" /> Beautiful texture
              </p>
              <p>
                <FaCheck className="check" /> Water resistance
              </p>
              <p>
                <ImCross className="check" />
                Expensive
              </p>
            </div>
            <div className="featsCols">
              <p>
                <FaCheck className="check" /> Durability
              </p>
              <p>
                <ImCross className="check" />
                Hard to handle
              </p>
            </div>
            <div className="featsCols">
              <p>
                <FaCheck className="check" /> Durability
              </p>
              <p>
                <ImCross className="check" /> Hard to handle
              </p>
            </div>
          </div>
        </div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "700",
            marginLeft: "10%",
            fontFamily: "Alumni Sans Collegiate One",
          }}
        >
          OUR WORK
        </h1>
        <div className="homecont2"></div>
        <div className="hHead">
          <h1>ADVANTAGES </h1>
          <h1>WORKING WITH US</h1>
        </div>
        <div className="homecont3">
          <div className="hc3content"></div>
          <div className="imgcontent">
            <p>In-house carpentry production</p>
            <p>
              we only treat wood with environmentally friendly and safe
              products.
            </p>
            <p>Prices from the manufacturer, no extra charges.</p>
          </div>
        </div>
        <button className="hbtn">Receive a Consultation</button>
        <div className="homecont4">
          <div className="hcont4Col1">
            <h1
              style={{
                fontWeight: "500",
                fontSize: "70px",
                lineHeight: "103px",
                fontStyle: "normal",
                marginTop: "-1rem",
                marginBottom: "-.5rem",
                fontFamily: "Alumni Sans Collegiate One",
              }}
            >
              ABOUT US
            </h1>
            <p style={{ paddingRight: "65%", fontSize: "18px" }}>
              <span style={{ fontWeight: "700", fontSize: "20px" }}>
                BIO CWT
              </span>{" "}
              -We manufacture solid wood products according to individual
              drawings.we make chairs,armchairs,wardrobes,beds and much more in
              our own workshop,equipped with all the necessary industrial
              equipment.
            </p>
          </div>

          <div className="topImgsubCol2">
            <img
              src={img4}
              alt=""
              style={{
                width: "160px",
                marginLeft: "-60%",
                height: "160px",
                borderRadius: "42px",
              }}
            />
            <img
              src={img5}
              alt=""
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "-120%",
                marginTop: "-5rem",
                borderRadius: "42px",
              }}
            />
            <img
              src={img6}
              alt=""
              style={{
                width: "160px",
                marginLeft: "-60%",
                height: "160px",
                marginTop: "1rem",
                borderRadius: "42px",
              }}
            />
          </div>
        </div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "700",
            marginLeft: "40%",
            fontFamily: "Alumni Sans Collegiate One",
          }}
        >
          ANY QUESTIONS?
        </h1>
        <div className="homecont5">
          <div className="hc5cont1">
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input type="text" value="Your Name..." />
              <input type="text" name="name" value="Your Phone Number..." />
              <textarea name="" id="" cols="30" rows="10">
                Questions...
              </textarea>
              <button className="formbtn">Send</button>
            </form>
          </div>
          <div
            className="hc5cont2"
            style={{ padding: "5% 15%", fontSize: "30px", marginRight: "-20%" }}
          >
            <p>
              Write to us we will be sure to answer all your questions and give
              you a comprehensive consultation.
            </p>
          </div>
        </div>
      </div>

      {/*
       */}
    </>
  );
}

export default Home;
