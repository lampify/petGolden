import React from "react";
import { createRoot } from "react-dom/client";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import App from "./App";

storyblokInit({
  accessToken: "Alqit3DhTkW64Hr4nmwcxQtt",
  use: [apiPlugin],
  components: {},
  apiOptions: {
    region: "",
  },
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
