import { Routes } from "react-router-dom";

import { HomeRoute } from "./home.routes";
import { BlogRoute } from "./blog.routes";

export const RoutesContent = () => {
  return (
    <Routes>
      {HomeRoute}
      {BlogRoute}
    </Routes>
  );
};
