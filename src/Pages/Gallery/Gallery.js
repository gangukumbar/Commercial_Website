import React from "react";
import "../../CSS/Gallery.css";
import Oak from "../../assets/images/oak.jpg";
import Buk from "../../assets/images/Buk.jpg";
import Ash from "../../assets/images/Ash.jpg";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";

import img4 from "../../assets/images/wood 1.jpg";
import img5 from "../../assets/images/workshop 1.jpg";
import img6 from "../../assets/images/paper 1.jpg";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Kichen from "../../assets/images/kichen.png";
import video from "../../assets/images/video.jpg";

function Gallery() {
  return (
    <div className="GalleryContainer">
      <div className="menu"></div>
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "700",
          marginTop: "8rem",
          marginLeft: "23%",
          fontFamily: "Alumni Sans Collegiate One",
        }}
      >
        OUR WORK
      </h1>
      <div className="homecont2" style={{ marginLeft: "20%" }}></div>
      <div className="homecont1" style={{ marginTop: "-7rem" }}>
        <div
          className="hHead"
          style={{ marginTop: "10rem", marginLeft: "15%" }}
        >
          <h1>THE WOOD WE </h1>
          <h1>WORK WITH</h1>
        </div>
        <div className="Gallerycont1">
          <div className="Imgcont">
            <img src={Oak} alt="" style={{ borderRadius: "42px" }} />
            <img src={Buk} alt="" style={{ borderRadius: "42px" }} />
            <img src={Ash} alt="" style={{ borderRadius: "42px" }} />
          </div>
          <div
            className="ImgNames"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <p>Oak</p>
            <p>Buk</p>
            <p>Ash</p>
          </div>
          <div className="Galfeats">
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
            <div className="featsCols" style={{ paddingRight: "10%" }}>
              <p>
                <FaCheck className="check" /> Durability
              </p>
              <p>
                <ImCross className="check" /> Hard to handle
              </p>
            </div>
          </div>
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
        <div className="hc5cont1" style={{ marginLeft: "20%" }}>
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
          style={{ padding: "5% 8.5%", fontSize: "30px", marginRight: "-20%" }}
        >
          <p>
            Write to us we will be sure to answer all your questions and give
            you a comprehensive consultation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
