import { ResultsData } from "./resultsData";

export interface ResultContextProps {
  getResults: (type: string) => void;
  searchTerm: string;
  setSearchTerm: (type: string) => void;
  isLoading: boolean;
  results: ResultsData | undefined;
}
