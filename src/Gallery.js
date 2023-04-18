import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  if (props.photos) {
    return (
      <div className="gallery">
        {props.photos.map(function (photo, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
