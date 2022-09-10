import { Videos } from "./resultsData";

export interface ResultsSearchAndVideosProps {
  additional_links: Videos[];
  cities: {
    domain: string;
    span: string;
  };
  description: string;
  link: string;
  title: string;
}

export interface ResultsImagesProps {
  image: { src: string };
  link: {
    href: string;
    title: string;
  };
}

export interface ResultsImagesNews {
  links: { href: string }[];
  id: string;
  source: { href: string };
  title: string;
}
