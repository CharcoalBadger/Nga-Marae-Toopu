import React from "react";
import "./creditmodal.css";

function CreditsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2>Image Credits</h2>
        <ul>
          <li>
            <strong>Homepage Splash:</strong>{" "}
            <a
              href="https://www.facebook.com/767562823354871/photos/pb.100069609000292.-2207520000/953908598053625/?type=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Whare Tuupuna" by Tuurangawaewae Marae
            </a>
          </li>
          <li>
            <strong>About Us Splash:</strong>{" "}
            <a
              href="https://www.facebook.com/photo/?fbid=10161047672059299&set=pcb.10161047672249299"
              target="_blank"
              rel="noopener noreferrer"
            >
              "at Tuurangawaewae Marae" by Bodie Friend
            </a>
          </li>
          <li>
            <strong>History Splash:</strong>{" "}
            <a
              href="https://www.facebook.com/Kiingitanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              "at Tuurangawaewae Marae" by Kiingitanga
            </a>
          </li>
          <li>
            <strong>Events Splash:</strong>{" "}
            <a
              href="https://www.facebook.com/Kiingitanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              "at Tuurangawaewae Marae" by Kiingitanga
            </a>
          </li>
          <li>
            <strong>Ngaa Toopu Kaumaatua Splash:</strong>{" "}
            <a
              href="https://www.facebook.com/Kiingitanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              "at Tuurangawaewae Marae" by Kiingitanga
            </a>
          </li>
          <li>
            <strong>Join The Whaanau Banner:</strong>{" "}
            <a
              href="https://www.facebook.com/Kiingitanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              "at Tuurangawaewae Marae" by Kiingitanga
            </a>
          </li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CreditsModal;
