import React, { useState } from "react";
import ReactPlayer from "react-player";
import { v4 } from "uuid";

import { ResultsSearchAndVideosProps } from "../../interfaces/resultsComponentsint";
import Pagination from "../pagination/Pagination";
import usePageCalc from "../../hooks/usePageCalc";

const ResultsVideos = ({
  results,
}: {
  results: ResultsSearchAndVideosProps[];
}) => {
  const {
    currentPage,
    setCurrentPage,
    indexOfFirstSearch,
    indexOfLastSearch,
    searchPerPage,
  } = usePageCalc();

  const currentsearch = results.slice(indexOfFirstSearch, indexOfLastSearch);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {currentsearch.map((video) => (
          <div key={v4()} className="p-2">
            {video.additional_links && (
              <ReactPlayer
                url={video.additional_links[0].href}
                controls
                width="455px"
                height="300px"
              />
            )}
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        length={results.length}
        perPage={searchPerPage}
      />
    </div>
  );
};

export default ResultsVideos;
