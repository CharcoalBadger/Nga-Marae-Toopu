import React, { useEffect, useState } from "react";
import "./hne3.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hne3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    gsap.from(".hne3-title", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hne3-title",
        start: "top 80%",
      },
    });

    gsap.from(".event-section h2", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".event-section",
        start: "top 80%",
      },
    });

    gsap.from(".event-image", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".events-grid",
        start: "top 80%",
      },
    });
  }, []);

  const events = [
    {
      title: "The Kings Coronation",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
        "./images/test23.jpg",
      ],
    },
    {
      title: "Celebration of an Education Program",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
        "./images/test23.jpg",
      ],
    },
    {
      title: "Waka Ama Sprint Nationals 2023",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
        "./images/test23.jpg",
      ],
    },
  ];

  const handleAlbumClick = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const CustomPrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
      Prev
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
      Next
    </div>
  );

  return (
    <div className="hne3-container">
      <h2 className="hne3-title">Past Hui & Events</h2>
      {events.map((event, index) => (
        <div key={index} className="event-section">
          {/* Event title as a clickable element */}
          <button
            className="event-title-button"
            onClick={() => handleAlbumClick(event.images)}
          >
            {event.title}
          </button>
        </div>
      ))}

      {/* Modal for displaying selected album */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <Slider
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1} // Number of images to show at once
              slidesToScroll={1} // Number of images to scroll when navigating
            >
              {selectedImages.map((image, index) => (
                <div key={index} className="image-slide-container">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </Slider>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
