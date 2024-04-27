import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profilePicture from "../../assets/images/profilePicture.jpg";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider-container'>
        <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='slider-item'>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
    </div>
    
  );
};

// Title Component
const Title = ({ text }) => <h1>{text}</h1>;

// Description Component
const Description = ({ text }) => <p>{text}</p>;

// Buttons Component
const Buttons = ({ primaryAction, secondaryAction }) => (
  <div>
    <button onClick={primaryAction}>Button</button>
    <button onClick={secondaryAction} className="secondary">Button</button>
  </div>
);

// Bullet Points Component
const BulletPoints = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// The layout component that puts everything together
const Layout = () => {
    const settings = {
        infinite: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        adaptiveHeight: true,
        accessibility: true,
        centerMode: true,
        vertical: true,
        focusOnSelect: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        touchMove: true,
        rtl: true,
        centerPadding: '60px', // Set vertical option to true
        verticalSwiping: true ,// Allow vertical swiping on touch devices
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 451,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
      };
      const slideStyle = {
        width: '500px', // Set width to 500px
        margin: '0 auto' // Center the slide horizontally
      };
      return (
        <div>
          <h2>Slider Grid</h2>
          <Slider {...settings}>
            <div>
              <h3>Slide 1</h3>
              <p>Content of slide 1</p>
            </div>
            <div>
              <h3>Slide 2</h3>
              <p>Content of slide 2</p>
            </div>
            <div>
              <h3>Slide 3</h3>
              <p>Content of slide 3</p>
            </div>
          </Slider>
        </div>
      );
};

export default Layout;