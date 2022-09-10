import React from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const links: { url: string; text: string }[] = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/image", text: "Images" },
  { url: "/videos", text: "Videos" },
];

const Links = () => {
  return (
    <div className="flex justify-start pl-0 sm:pl-[204px]  gap-5 items-center mt-4 w-[90vw]">
      {links.map((item) => (
        <Link
          to={item.url}
          key={v4()}
          className="text-blue-300 border-b-2 border-blue-700 pb-2"
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Links;
