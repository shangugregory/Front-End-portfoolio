import React from "react";
import "./Footer.css";
import foot from "../../../assets/Home/shape-bg.png";

export default function Footer() {
  return (
    <div className="t-footer-container">
      <div className="t-footer-parent">
        <img src={foot} alt="No Internet" />
      </div>
    </div>
  );
}
