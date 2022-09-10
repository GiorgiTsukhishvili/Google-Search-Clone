import React, { createContext, useState, ReactNode, useContext } from "react";

import { ResultContextProps } from "../interfaces/resultContextint";
import { ResultsData } from "../interfaces/resultsData";

const ResultContext = createContext({} as ResultContextProps);
const baseUrl: string = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<ResultsData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("JS Mastery");

  const getResults = async (type: string) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY!,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ results, getResults, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
