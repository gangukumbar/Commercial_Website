import React from "react";
import "../Footer/Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="content1">
          <h1>BIOCWT</h1>
        </div>
        <div className="content2">
          <div>
            <BiPhoneCall className="icon" />
          </div>
          <div>
            <p>+420 000 000 000</p>
          </div>
        </div>
        <div className="content3">
          <div>
            <GoLocation className="icon" />{" "}
          </div>
          <div>
            <p>India 1160/60 150 00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
