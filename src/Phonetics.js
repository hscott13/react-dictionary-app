import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.data.audio) {
    return (
      <span className="d-flex align-items-center pb-1">
        <h2 className="fs-5 fw-light">{props.data.text}</h2>
        <ReactAudioPlayer src={props.data.audio} controls className="audio" />
      </span>
    );
  } else {
    return <h2 className="fs-5 fw-light">{props.data.text}</h2>;
  }
}
