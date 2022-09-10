import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { v4 } from "uuid";

import { ResultsSearchAndVideosProps } from "../../interfaces/resultsComponentsint";

const ResultsVideos = ({
  results,
}: {
  results: ResultsSearchAndVideosProps[];
}) => {
  return (
    <Fragment>
      {results.map((video) => (
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
    </Fragment>
  );
};

export default ResultsVideos;
