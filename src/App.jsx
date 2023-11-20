import { useStoryblok, StoryblokComponent } from "@storyblok/react";

import "./index.css";
import { Hero } from "./components/Hero";
import { QualidadeDogs } from "./components/QualidadeDogs";
import { SobreDogs } from "./components/SobreDogs";
import { Depoimento } from "./components/Depoimento";

function App() {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft", cv: "1699263279" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero blok={story.content} />
      <QualidadeDogs blok={story.content} />
      <SobreDogs blok={story.content} />
      <Depoimento blok={story.content} />
    </>
  );
}
export default App;
