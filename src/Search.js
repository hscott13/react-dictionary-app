import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
