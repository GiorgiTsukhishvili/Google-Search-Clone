import React, { Fragment } from "react";

import { v4 } from "uuid";
import { ResultsImagesProps } from "../../interfaces/resultsComponentsint";

const ResultsImages = ({ results }: { results: ResultsImagesProps[] }) => {
  return (
    <Fragment>
      {results.map((item) => (
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
    </Fragment>
  );
};

export default ResultsImages;
