import { useStoryblok } from "@storyblok/react";

import { Loading } from "components/Loading";

import { HeaderBlog } from "./components/Header";
import { ConteudoBlog } from "./components/ConteudoBlog";
import { Rodape } from "components/Rodape";

export const Blog = () => {
  let slug =
    window.location.pathname === "/"
      ? "blog"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft", cv: "1703690117" });
  if (!story || !story.content) {
    return <Loading />;
  }

  const blok = story.content?.body?.find(
    (blokItem) => blokItem?.component === "paginaBlog"
  );

  return (
    <div className="pt-7">
      <HeaderBlog blok={blok} />
      <ConteudoBlog blok={blok} />
      <Rodape blok={story.content} />
    </div>
  );
};
