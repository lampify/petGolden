import { RichTextResolver } from "@storyblok/react";

import { substituteRouteParameter } from "hooks/useSubstituteRouteParameter";
import Patas from "assets/background-patterns-blue.jpg";

import { Carousel } from "components/Carousel";

import "../../style.css";
import { useNavigate, useParams } from "react-router-dom";

export const ConteudoBlog = ({ blok }) => {
  const navigate = useNavigate();
  const idRoute = useParams();

  const listConteudo = blok.conteudo;

  const itemConteudo = listConteudo.find((itemConteudo) =>
    itemConteudo.rota.includes(idRoute.id)
  );

  const textoInformativo = itemConteudo.textoInformativo;

  const handleSelecionarConteudoBlog = (valueRoute) => {
    const route = substituteRouteParameter("/blog:id", "id", valueRoute);

    navigate(route);
  };

  const richTextResolver = new RichTextResolver();
  const html = richTextResolver.render(textoInformativo);

  return (
    <>
      <div className="pt-6">
        <div className="px-[40px]">
          <Carousel
            title="Últimos posts"
            handleSelecionarConteudoBlog={handleSelecionarConteudoBlog}
            items={listConteudo}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${Patas})`,
            backgroundSize: "cover",
          }}
          className="sm:px-[40px] px-[15px] mt-8 text-black h-[auto] flex justify-center py-8 relative"
        >
          <div className="bg-white w-[100%] md:w-[70%] sm:p-10 p-5 rounded-2xl">
            <div>
              <h1 className="text-[30px] font-bold mb-6">
                {itemConteudo.titulo}
              </h1>
              <img
                alt={itemConteudo.titulo}
                className="rounded-2xl max-h-[600px] object-cover w-[100%]"
                src={itemConteudo.imagem}
              />
            </div>

            <div className="unreset">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
