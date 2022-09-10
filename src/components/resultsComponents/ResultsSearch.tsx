import React, { Fragment } from "react";
import { v4 } from "uuid";

import { ResultsSearchAndVideosProps } from "../../interfaces/resultsComponentsint";

const ResultsSearch = ({
  results,
}: {
  results: ResultsSearchAndVideosProps[];
}) => {
  return (
    <Fragment>
      {results.map((item) => (
        <div key={v4()} className="md:w-3/5 w-full">
          <a href={item.link} className="" target="_blank" rel="noreferrer">
            <p className="text-sm">
              {item.link.length > 30 ? item.link.substring(0, 30) : item.link}
            </p>
            <p className="text-lg hover:underline text-blue-300 w-[60%] ">
              {item.title}
            </p>
            <p className="text-sm text-[#bdc1c6] w-[70%]">{item.description}</p>
          </a>
        </div>
      ))}
    </Fragment>
  );
};

export default ResultsSearch;
