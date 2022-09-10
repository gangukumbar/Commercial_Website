import React from "react";
import img4 from "../assets/images/wood 1.jpg";
import img5 from "../assets/images/workshop 1.jpg";
import img6 from "../assets/images/paper 1.jpg";
import Kichen from "../assets/images/kichen.png";

function About() {
  return (
    <div className="PricesContainer">
      <div className="menu"></div>
      <div
        className="homecont4"
        style={{ marginTop: "5rem", marginLeft: "2px" }}
      >
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
            <span style={{ fontWeight: "700", fontSize: "20px" }}>BIO CWT</span>{" "}
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
              mixBlendMode: "multiply",
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
            }}
          />
        </div>
      </div>
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "700",
          marginLeft: "20%",
          fontFamily: "Alumni Sans Collegiate One",
        }}
      >
        OUR WORK
      </h1>
      <div className="homecont2" style={{ marginLeft: "10%" }}></div>
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

export default About;
