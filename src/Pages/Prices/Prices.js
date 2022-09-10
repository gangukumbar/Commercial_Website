import React from "react";
import "../../CSS/Prices.css";

function Prices() {
  return (
    <div className="PricesContainer">
      <div className="menu"></div>

      <h1
        style={{
          fontSize: "60px",
          fontWeight: "700",
          marginLeft: "30%",

          fontFamily: "Alumni Sans Collegiate One",
        }}
      >
        PRICE LIST
      </h1>
      <div className="grid">
        <div className="box1">
          <div className="head">
            <p style={{ fontWeight: "800" }}>delka</p>
            <p style={{ fontWeight: "800" }}>sirka</p>
            <p style={{ fontWeight: "800" }}>tloustka</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1000</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1000</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />

          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1100</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1100</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />
        </div>

        <div className="box2">
          <div className="head">
            <p style={{ fontWeight: "800" }}>m3</p>
            <p style={{ fontWeight: "800" }}>sena m3</p>
            <p style={{ fontWeight: "800" }}>sena ks</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,012</p>
            <p>1100</p>
            <p>462</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,0130</p>
            <p>11000</p>
            <p>508</p>
          </div>
          <hr />

          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,00960</p>
            <p>1100</p>
            <p>369,2</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,0108</p>
            <p>1100</p>
            <p>415,8</p>
          </div>
          <hr />
        </div>

        <div className="box3">
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1000</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1000</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />

          <div className="head" style={{ paddingRight: "10%" }}>
            <p>1100</p>
            <p>300</p>
            <p>40</p>
          </div>
          <hr />
        </div>
        <div className="box4">
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,012</p>
            <p>1100</p>
            <p>462</p>
          </div>
          <hr />
          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,0130</p>
            <p>11000</p>
            <p>508</p>
          </div>
          <hr />

          <div className="head" style={{ paddingRight: "10%" }}>
            <p>0,00960</p>
            <p>1100</p>
            <p>369,2</p>
          </div>
          <hr />
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

export default Prices;
