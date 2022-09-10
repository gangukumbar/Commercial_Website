import React from "react";
import "./style.css";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";

function TopImgComp(props) {
  return (
    <div
      className="topImgContainer"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="topImgCol1">
        <div className="topImgsubCol1">
          <h1
            style={{
              width: "20%",
              fontWeight: "450",
              fontSize: "70px",
              lineHeight: "103px",
              fontStyle: "normal",
              marginTop: "-1rem",
              marginBottom: "-.5rem",
              fontFamily: "Alumni Sans Collegiate One",
            }}
          >
            SOLID WOOD PRODUCTS
          </h1>
          <p>Oak,beech, ash from </p>
          <p>1700 CZK per m3</p>
          <button className="topImgBtn">Order</button>
        </div>
        <div className="verticalLine"></div>
        <div className="topImgsubCol2">
          <img
            src={img1}
            alt=""
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "42px",
            }}
          />
          <img
            src={img2}
            alt=""
            style={{
              width: "160px",
              height: "160px",
              marginLeft: "-100%",
              marginTop: "1rem",
              borderRadius: "42px",
            }}
          />

          <img
            src={img3}
            alt=""
            style={{
              width: "160px",
              height: "160px",
              marginTop: "-1rem",
              borderRadius: "42px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopImgComp;
