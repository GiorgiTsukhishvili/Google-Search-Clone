export interface Videos {
  href: string;
  text: string;
}

interface ResultsDatains {
  additional_links: Videos[];
  cities: {
    domain: string;
    span: string;
  };
  description: string;
  link: string;
  title: string;
}

interface ImageResults {
  image: { src: string };
  link: {
    href: string;
    title: string;
  };
}

interface Entries {
  links: { href: string }[];
  id: string;
  source: { href: string };
  title: string;
}

export interface ResultsData {
  answers: string[];
  device_region: string;
  device_type: string;
  results: ResultsDatains[];
  entries: Entries[];
  total: number;
  ts: number;
  image_results: ImageResults[];
}
