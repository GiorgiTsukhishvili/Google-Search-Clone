import React, { useState } from "react";

import { v4 } from "uuid";
import { ResultsImagesProps } from "../../interfaces/resultsComponentsint";
import Pagination from "../pagination/Pagination";
import usePageCalc from "../../hooks/usePageCalc";

const ResultsImages = ({ results }: { results: ResultsImagesProps[] }) => {
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
      <div className="flex flex-wrap">
        {currentsearch.map((item) => (
          <a
            href={item.link.href}
            className="sm:p-3 p-5"
            key={v4()}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.image.src}
              alt={item.link.title}
              loading="lazy"
              className="w-[300px] h-[300px] object-contain"
            />
            <p className="w-[300px] h-25 break-words text-sm mt-2">
              {item.link.title}
            </p>
          </a>
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

export default ResultsImages;
