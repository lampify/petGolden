import { useStoryblok } from "@storyblok/react";

import { Hero } from "components/Hero";
import { QualidadeDogs } from "components/QualidadeDogs";
import { SobreDogs } from "components/SobreDogs";
import { Depoimento } from "components/Depoimento";
import { BlogDiorDogs } from "components/BlogDiorDogs";
import { FaleConosco } from "components/FaleConosco";
import { Rodape } from "components/Rodape";
import { Loading } from "components/Loading";

export const Home = () => {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft", cv: "1699263279" });
  if (!story || !story.content) {
    return <Loading />;
  }

  const faleConoscoItems = story.content?.body?.find(
    (blokItem) => blokItem?.component === "faleConosco"
  );

  const linkWhatsApp =
    "https://api.whatsapp.com/send?phone=" +
    faleConoscoItems.whatsApp +
    "&text=" +
    faleConoscoItems.tituloWhatsApp;

  return (
    <div className="overflow-hidden">
      <Hero blok={story.content} />
      <QualidadeDogs blok={story.content} />
      <SobreDogs blok={story.content} />
      <BlogDiorDogs blok={story.content} />
      <Depoimento blok={story.content} />
      <FaleConosco linkWhatsApp={linkWhatsApp} blok={story.content} />
      <Rodape blok={story.content} />
    </div>
  );
};
