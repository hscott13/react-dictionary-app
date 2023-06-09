import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Result from "./Result";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function handlePictures(response) {
    console.log(response.data);
    setPictures(response.data.photos);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    let picturesAPIkey = "0d6e6a447f07653a71842ab1529ot22b";
    let picturesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picturesAPIkey}`;

    axios.get(apiUrl).then(handleResponse);
    axios.get(picturesUrl).then(handlePictures);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="d-flex justify-content-center" onSubmit={search}>
        <input
          className="border border-0 bg-transparent fs-5 w-100"
          type="search"
          autoFocus={false}
          onChange={updateKeyword}
          placeholder="Search for a word"
        ></input>
        <button
          type="submit"
          className="btn-primary border border-0 bg-transparent fs-5"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <Result results={result} photos={pictures} />
    </div>
  );
}
