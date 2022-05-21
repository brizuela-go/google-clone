import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 Todo" },
  { url: "/news", text: "📰 Noticias" },
  { url: "/image", text: "📷 Imágenes" },
  { url: "/video", text: "📺 Vídeos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map((obj, index) => (
        <NavLink
          key={index}
          to={obj.url}
          className="active:text-blue-700 active:border-b-2 active:dark:text-blue-300 active:border-blue-700 active:pb-2 p-3"
        >
          {obj.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
