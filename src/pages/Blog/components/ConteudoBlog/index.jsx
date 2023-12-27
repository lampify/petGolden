import { RichTextResolver } from "@storyblok/react";

import "../../style.css";
import { Carousel } from "components/Carousel";

export const ConteudoBlog = ({ blok }) => {
  const listConteudo = blok.conteudo;

  const textoInformativo = blok.conteudo[0].textoInformativo;

  const richTextResolver = new RichTextResolver();
  const html = richTextResolver.render(textoInformativo);

  return (
    <>
      <div className="pt-6">
        <Carousel title="Últimos posts" items={listConteudo} />
      </div>
    </>
  );
};
