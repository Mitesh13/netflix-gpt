import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSugesstions from "./GPTMovieSugesstions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="login-bg" />
      </div>
      <GPTSearchBar />
      <GPTMovieSugesstions />
    </div>
  );
};

export default GPTSearch;
