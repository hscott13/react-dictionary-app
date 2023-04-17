import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
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
    );
  } else {
    return null;
  }
}
