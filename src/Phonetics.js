import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div>
      <h2>{props.data.text}</h2>
      <ReactAudioPlayer src={props.data.audio} controls />
    </div>
  );
}
