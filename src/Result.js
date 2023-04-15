import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <h2 className="main-word text-decoration-underline fw-bolder pb-3">
          {props.results.word}
        </h2>
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
