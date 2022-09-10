import React, { Fragment } from "react";

import { v4 } from "uuid";
import { ResultsImagesNews } from "../../interfaces/resultsComponentsint";

const ResultsNews = ({ results }: { results: ResultsImagesNews[] }) => {
  return (
    <Fragment>
      {results.map((item) => (
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
    </Fragment>
  );
};

export default ResultsNews;
