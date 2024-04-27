import profilePicture from "../../assets/images/profilePicture.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import './index.css';

function AppSlider() {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  };

  const navSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".slider",
    centerMode: false,
    focusOnSelect: true,
  };

  const images = [profilePicture, profilePicture, profilePicture]

    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    const slideHandler = (slider) => {
        setSlider1(slider)
    }

    const slideNavHandler = (slider) => {
        setSlider2(slider)
    }

  return (
    <div className="rtl-slider-flex">
        <div className="rtl-slider-nav">
        <Slider {...navSettings}   
        asNavFor={slider1}
        ref={slideHandler}
        className="slider-nav">
        {images.map((imageUrl) => {
            return <div className="rtl-slider-slide" key={imageUrl}/>;
          })}
        </Slider>
      </div>
      <div className="rtl-slider">
        <Slider {...sliderSettings} 
        asNavFor={slider2}
        ref={slideHandler}
    >
         {images.map((imageUrl) => {
            return <div className="rtl-slider-slide" key={imageUrl}>
            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default AppSlider;


