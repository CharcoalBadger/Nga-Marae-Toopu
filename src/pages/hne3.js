import React, { useEffect, useState, useRef } from "react";
import "./hne3.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hne3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

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
        "./images/test24.jpg",
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
        "./images/test24.jpg",
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
        "./images/test24.jpg",
      ],
    },
  ];

  const handleAlbumClick = (images) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    // Prevent scrolling on body
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling on body
    document.body.style.overflow = "auto";
  };

  const handleSwipe = (direction) => {
    let newIndex = currentImageIndex;
    if (direction === "left") {
      newIndex =
        currentImageIndex + 1 < selectedImages.length
          ? currentImageIndex + 1
          : 0;
    } else {
      newIndex =
        currentImageIndex - 1 >= 0
          ? currentImageIndex - 1
          : selectedImages.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  // Function to handle the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < selectedImages.length ? prevIndex + 1 : 0
    );
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : selectedImages.length - 1
    );
  };

  return (
    <div className="hne3-container">
      <h2 className="hne3-title">Past Hui & Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <button
            key={index}
            className="event-title-button"
            onClick={() => handleAlbumClick(event.images)}
          >
            {event.title}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className="image-modal-backing" onClick={closeModal}>
          <div
            className="image-modal-main"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left arrow for previous image */}
            <button className="image-point-left" onClick={prevImage}>
              &lt;
            </button>
            <img
              src={selectedImages[currentImageIndex]}
              alt="Current Slide"
              className="modal-image"
              onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
              onTouchMove={(e) => (touchEnd.current = e.touches[0].clientX)}
              onTouchEnd={() => {
                if (touchStart.current - touchEnd.current > 150) {
                  handleSwipe("left");
                } else if (touchStart.current - touchEnd.current < -150) {
                  handleSwipe("right");
                }
              }}
            />
            <span className="photo-count">
              {currentImageIndex + 1} of {selectedImages.length}
            </span>
            <button className="image-modal-close-button" onClick={closeModal}>
              ×
            </button>
            {/* Right arrow for next image */}
            <button className="image-point-right" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
