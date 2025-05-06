import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import p1 from '../images/gallery/1.JPG'
import p2 from '../images/gallery/2.JPG'
import p3 from '../images/gallery/3.JPG'
import p4 from '../images/gallery/4.JPG'
import p5 from '../images/gallery/5.JPG'
import p6 from '../images/gallery/6.JPG'
import p7 from '../images/gallery/7.JPG'
import p8 from '../images/gallery/8.JPG'
import p9 from '../images/gallery/9.JPG'
import p10 from '../images/gallery/10.JPG'
import p11 from '../images/gallery/11.JPG'
import p12 from '../images/gallery/12.JPG'
import p13 from '../images/gallery/13.JPG'
import p14 from '../images/gallery/14.JPG'
import p15 from '../images/gallery/15.JPG'
import p16 from '../images/gallery/16.JPG'
import p17 from '../images/gallery/17.JPG'
import p18 from '../images/gallery/18.JPG'
import p19 from '../images/gallery/19.JPG'
import p20 from '../images/gallery/20.JPG'
import p21 from '../images/gallery/21.JPG'
import p22 from '../images/gallery/22.JPG'
import p23 from '../images/gallery/23.JPG'
import p24 from '../images/gallery/24.JPG'
import p25 from '../images/gallery/25.JPG'
import p26 from '../images/gallery/26.JPG'
import background from '../images/gallery_background2.jpg'


const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // screens below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gImages = [
    { img: p1 },
    { img: p2 },
    { img: p3 },
    { img: p4 },
    { img: p5 },
    { img: p6 },
    { img: p7 },
    { img: p8 },
    { img: p9 },
    { img: p10 },
    { img: p11 },
    { img: p12 },
    { img: p13 },
    { img: p14 },
    { img: p15 },
    { img: p16 },
    { img: p17 },
    { img: p18 },
    { img: p19 },
    { img: p20 },
    { img: p21 },
    { img: p22 },
    { img: p23 },
    { img: p24 },
    { img: p25 },
    { img: p26 }
  ];

  return (
    <div className='m-auto text-center py-5' id="gallery" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      
      <h1 className="story mb-4">Gallery</h1>
      <p className="fs-6 col-12 col-lg-9 m-auto mb-4">"Every moment tells a story, every frame holds a memory. From heartfelt laughter to stolen glances, 
        this gallery is a collection of the love, joy, and magic that brought us to this day"</p>
      <div className='w-75 mx-auto' style={{minWidth:"330px"}}>
      <Slider {...settings}>
  {gImages.map((item, index) => (
    <div key={index} className="slide-wrapper px-3">
      <div className="image-center-wrapper">
        <img
          src={item.img}
          alt={`Gallery ${index}`}
          className="gallery-img"
          onClick={() => handleImageClick(item.img)}
        />
      </div>
    </div>
  ))}
</Slider>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImg} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
