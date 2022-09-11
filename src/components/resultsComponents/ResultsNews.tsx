import React, { useState } from "react";

import { v4 } from "uuid";
import { ResultsImagesNews } from "../../interfaces/resultsComponentsint";
import Pagination from "../pagination/Pagination";
import usePageCalc from "../../hooks/usePageCalc";

const ResultsNews = ({ results }: { results: ResultsImagesNews[] }) => {
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
      {currentsearch.map((item) => (
        <div key={v4()} className="md:w-2/5 w-full">
          <a
            href={item.links[0].href}
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-lg hover:underline text-blue-300 ">
              {item.title}
            </p>
          </a>
          <div className="flex gap-4">
            <a
              href={item.source.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {item.source.href}
            </a>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        length={results.length}
        perPage={searchPerPage}
      />
    </div>
  );
};

export default ResultsNews;
