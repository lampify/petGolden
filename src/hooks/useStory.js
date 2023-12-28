import { useStoryblok } from "@storyblok/react";
import { Loading } from "components/Loading";

export const useStory = (nameStory) => {
  console.log(nameStory);
  let slug =
    window.location.pathname === "/"
      ? nameStory
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft", cv: "1703690117" });
  if (!story || !story.content) {
    return <Loading />;
  }

  return {
    story,
  };
};
