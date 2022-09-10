import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { v4 } from "uuid";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContext";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("/search/q=JavaScript Mastery&num=40");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results &&
            results.results.map((item) => (
              <div key={v4()} className="md:w-2/5 w-full">
                <a
                  href={item.link}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-sm">
                    {item.link.length > 30
                      ? item.link.substring(0, 30)
                      : item.link}
                  </p>
                </a>
              </div>
            ))}
        </div>
      );
    case "/images":
      return <p>se</p>;
    case "/news":
      return <p>se</p>;
    case "/videos":
      return <p>se</p>;
    default:
      return <h1>Error</h1>;
  }
};

export default Results;
