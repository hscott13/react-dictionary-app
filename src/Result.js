import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Gallery from "./Gallery";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="row">
        <div className="col-6">
          <h2 className="main-word text-decoration-underline fw-bolder">
            {props.results.word}
          </h2>
          <Phonetics data={props.results.phonetics[0]} />
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <ol>
                  <Meaning meaning={meaning} />
                </ol>
              </div>
            );
          })}
        </div>
        <div className="col">
          <Gallery photos={props.photos} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
