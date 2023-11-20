import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "Alqit3DhTkW64Hr4nmwcxQtt",
  use: [apiPlugin],
  components: {},
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
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
