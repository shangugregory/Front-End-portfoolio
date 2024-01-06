import React from "react";
import "./Testimonial.css";
import img from "../../assets/Home/IMG-20230810-WA0022.jpg";

export default function TestimonialList() {
  return (
    <>
      <div className="testimonial-container-parent">
        <h1 className="test-header">Testimonial</h1>
        <p className="head-p">What My Client Say About Me</p>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-detail">
          <div className="testimonial-text-container">
            <p className="testimonial-text">
              <span className="testimonial-quote">"</span>A Personal Website to
              showcase all my details and projects at one place A Personal
              Website to showcase all my details and projects at one place
              <span className="testimonial-quote">"</span>
            </p>
            <div className="testimonial-ratings"></div>
          </div>
          <div className="testimonial-person-container">
            <img
              src={img}
              alt="Failed load an image"
              className="testimonial-image"
            />
            <div className=" person-title-container">
              <h1 className="title"> Gregory Mukite</h1>
              <p className="company">CEO G-COMPUTERS</p>
            </div>
          </div>
        </div>
        <div className="testimonial-detail">
          <div className="testimonial-text-container">
            <p className="testimonial-text">
              <span className="testimonial-quote">"</span>A Personal Website to
              showcase all my details and projects at one place A Personal
              Website to showcase all my details and projects at one place
              <span className="testimonial-quote">"</span>
            </p>
            <div className="testimonial-ratings"></div>
          </div>
          <div className="testimonial-person-container">
            <img
              src={img}
              alt="Failed load an image"
              className="testimonial-image"
            />
            <div className=" person-title-container">
              <h1 className="title"> Gregory Mukite</h1>
              <p className="company">CEO G-COMPUTERS</p>
            </div>
          </div>
        </div>
        <div className="testimonial-detail">
          <div className="testimonial-text-container">
            <p className="testimonial-text">
              <span className="testimonial-quote">"</span>A Personal Website to
              showcase all my details and projects at one place A Personal
              Website to showcase all my details and projects at one place
              <span className="testimonial-quote">"</span>
            </p>
            <div className="testimonial-ratings"></div>
          </div>
          <div className="testimonial-person-container">
            <img
              src={img}
              alt="Failed load an image"
              className="testimonial-image"
            />
            <div className=" person-title-container">
              <h1 className="title"> Gregory Mukite</h1>
              <p className="company">CEO G-COMPUTERS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
