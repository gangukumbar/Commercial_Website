import React from "react";
import Map from "../assets/images/MAP.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import "../CSS/Contact.css";

function contact() {
  return (
    <div className="contactcontainer">
      <div className="menu"></div>
      <div className="contact">
        <div className="cont">
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "700",
              marginLeft: "40%",
              fontFamily: "Alumni Sans Collegiate One",
            }}
          >
            CONTACT
          </h1>
          <div className="contactcont1">
            <div>
              <BiPhoneCall className="Icon" />
            </div>
            <div>
              <p>+420 000 000 000</p>
            </div>
          </div>
          <div className="contactcont2">
            <div>
              <GoLocation className="Icon" />{" "}
            </div>
            <div>
              <p>India 1160/60 150 00</p>
            </div>
          </div>
        </div>
        <div className="contactmap">
          <img
            src={Map}
            alt=""
            style={{ width: "300px", height: "230px", borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default contact;
