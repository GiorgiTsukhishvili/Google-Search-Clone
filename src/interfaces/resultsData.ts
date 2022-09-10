interface ResultsDatains {
  additional_links: [href: string, text: string][];
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

export interface ResultsData {
  answers: string[];
  device_region: string;
  device_type: string;
  results: ResultsDatains[];
  total: number;
  ts: number;
  image_results: ImageResults[];
}
