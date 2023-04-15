import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="d-flex justify-content-center" onSubmit={search}>
        <input
          className="border border-0 bg-transparent fs-4 w-100"
          type="search"
          autoFocus={false}
          onChange={updateKeyword}
          placeholder="Search for a word"
        ></input>
        <button
          type="submit"
          className="btn-primary border border-0 bg-transparent fs-4"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
