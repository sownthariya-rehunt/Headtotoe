import React from "react";
import carousel3 from "../images/carousel3.mp4";
import carousel2 from "../images/carousel2.mp4";
import carousel1 from "../images/carousel1.mp4";
import "./Home.css";
import Buttonh from "../Buttonh/Buttonh";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import SliderNew from "./SliderNew";
const Home = () => {
  const videoStyle = {
    height: "50vh", // Set the height to be half the viewport height
    width: "100%", // Ensure the video takes full width
    objectFit: "cover", // Maintain aspect ratio and fill container
  };

  const setting ={
    dots:true,
     infinite:true,
     speed:500,
     slidesToShow:3,
     slideToScroll:2,
     autoPlay:true
  }

  

  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide p-0 m-0"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <video
              src={carousel1}
              autoPlay
              loop
              muted
              className="d-block"
              style={videoStyle}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-banner bannerbg py-5 hh1">
                <span class="word">
                  Treatment With Advance Manual
                  <span class="superscript">s</span>{" "}
                </span>
                <span class="word">
                  Therapy Techniques
                  <br /> <Buttonh value="Book a Consultation" />
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <video
              src={carousel3}
              autoPlay
              loop
              muted
              className="d-block"
              style={videoStyle}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-banner bannerbg py-5 hh1">
                <span class="word">
                  Treatment With World Class Imported Equipment
                  <span class="superscript">s</span>{" "}
                </span>
                <span class="word">
                  Imported Equipment <br />{" "}
                  <Buttonh value="Book a Consultation" />
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <video
              src={carousel2}
              autoPlay
              loop
              muted
              className="d-block"
              style={videoStyle}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-banner bannerbg py-5 hh1">
                <span class="word">
                  Treatment With Advance Manual
                  <span class="superscript">s</span>{" "}
                </span>
                <span class="word">
                  Therapy Techniques
                  <br />
                  <Buttonh value="Book a Consultation" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* -----------------welcome to head 2 toe */}
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-xl-6 bodybg ms-auto mx-auto p-4">
            <div class="frame">
              <div class="text">
                <span className="span1">❤</span>
                <span className="span1">E</span>
                <span className="span1">V</span>
                <span className="span1">O</span>
                <span className="span1">L</span>
                <span className="span1"></span>
                <span className="span1">H</span>
                <span className="span1">T</span>
                <span className="span1">I</span>
                <span className="span1">W</span>
                <span className="span1"></span>
                <span className="span1">E</span>
                <span className="span1">D</span>
                <span className="span1">A</span>
                <span className="span1">M</span>
                <span className="span1"></span>
                <span className="span1">❤</span>
                <span className="span1"></span>
                <span className="span1">E</span>
                <span className="span1">O</span>
                <span className="span1">T</span>
                <span className="span1"></span>
                <span className="span1">2</span>
                <span className="span1"></span>
                <span className="span1">D</span>
                <span className="span1">A</span>
                <span className="span1">E</span>
                <span className="span1">H</span>
                <span className="span1"></span>
                <span className="span1">O</span>
                <span className="span1">T</span>
                <span className="span1"></span>
                <span className="span1">E</span>
                <span className="span1">M</span>
                <span className="span1">O</span>
                <span className="span1">C</span>
                <span className="span1">L</span>
                <span className="span1">E</span>
                <span className="span1">W</span>
                <span className="span1"></span>
                <span className="span1">❤</span>
                <span className="span1"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <p className="hclr">
              HEAD <span className="clr2">2</span> TOE
            </p>
            <div className=" text-secondary fw-bold ">
              <p>
                &emsp; &emsp; Welcome to our HEAD 2 TOE physiotherapy clinic
                where we have been providing exceptional care to our patients
                from 2009 and remembered as the best physiotherapy clinic in
                Coimbatore. Our clinic was founded by Dr.Prabu & Dr.Priya Prabu
                who had a passion for helping people recover from physical
                ailments, injuries, and disabilities.
              </p>
              <p>
                &emsp; &emsp; Our Founders noticed and realized that there is a
                high demand for qualified physiotherapy services in society
                which led them to open the HEAD 2 TOE Physiotherapy Clinic,
                where they could provide the best possible care to patients in
                Coimbatore. Over the decade, our clinic has grown significantly,
                and we now have a team of dedicated and skilled physiotherapist
                and assistants. We are committed to providing our patients with
                the highest quality care, and we take a holistic approach to
                treatment. We understand that every patient is unique, and we
                take the time to understand their individual needs and
                circumstances.
              </p>
              <div>
                <Buttonh value="view more" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
        <SliderNew/>
        </div>
       
      </div>
      
    </div>
  );
};

export default Home;
