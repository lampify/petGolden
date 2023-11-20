import { ReactNode } from "react";
import { Sliders } from "../Sliders";

export function SobreDogs({ blok }) {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "sobreEmpresa"
  );
  return (
    <div className="flex mt-28 justify-around pb-10 ">
      <Sliders
        slide={itens.cards.map((itemCard) => ({
          content: (
            <div className="w-[478px] h-[345px] flex items-center font-['Poppins']">
              <div>
                <h4 className="text-[20px] text-[#F63D3D] mb-2 font-bold">
                  {itemCard.titulo}
                </h4>
                <p className="text-[14px]">{itemCard.subtitulo}</p>
              </div>
            </div>
          ),
          key: itemCard._uid,
        }))}
      />
      <div
        style={{
          backgroundColor: itens.corFundo,
        }}
        className="w-[571px] rounded-[10px] h-[380px] relative"
      >
        <img
          alt="imagem da Gabi com um filhote de golden"
          src={itens.imagem}
          className="absolute w-[571px] rounded-[10px] h-[380px] object-center top-[-35px] right-[-35px] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
