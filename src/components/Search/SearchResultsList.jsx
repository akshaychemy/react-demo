import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList= ({ results,textColor }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <>
          {results   &&<SearchResult result={result.first_name} data={result} id={id} key={id} textColor={textColor}/>}
          </>
          );
      })}
    </div>
  );
};
