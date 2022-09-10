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
        <div className="flex flex-wrap flex-col justify-between space-y-6 sm:px-56">
          {results &&
            results.results.map((item) => (
              <div key={v4()} className="md:w-3/5 w-full">
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
                  <p className="text-lg hover:underline text-blue-300 w-[60%] ">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#bdc1c6] w-[70%]">
                    {item.description}
                  </p>
                </a>
              </div>
            ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-start">
          {results &&
            results.image_results.map((item) => (
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
      );
    case "/news":
      return <p>se</p>;
    case "/videos":
      return <p>se</p>;
    default:
      return <h1>Error</h1>;
  }
};

export default Results;
