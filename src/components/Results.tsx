import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContext";
import {
  ResultsImages,
  ResultsNews,
  ResultsSearch,
  ResultsVideos,
} from "./resultsComponents";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex min-h-[80vh] flex-wrap  justify-between space-y-6 sm:px-56">
          {results?.results && <ResultsSearch results={results.results} />}
        </div>
      );
    case "/image":
      return (
        <div className="flex min-h-[80vh] flex-wrap justify-center items-start">
          {results?.image_results && (
            <ResultsImages results={results.image_results} />
          )}
        </div>
      );
    case "/news":
      return (
        <div className="flex min-h-[80vh] flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.entries && <ResultsNews results={results.entries} />}
        </div>
      );
    case "/videos":
      return (
        <div className="flex min-h-[80vh] flex-wrap justify-center items-center ">
          {results?.results && <ResultsVideos results={results.results} />}
        </div>
      );
    default:
      return <h1>Error</h1>;
  }
};

export default Results;
