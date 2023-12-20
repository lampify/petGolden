import { ReactNode } from "react";
import { Sliders } from "../Sliders";

export function Depoimento({ blok }) {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "depoimentos"
  );
  return (
    <>
      <div className="mt-24 h-[calc(100vh-200px)] relative">
        <div className="flex justify-center">
          <h2 className="flex text-[28px] font-bold font-['Roboto']">
            <p className="mr-3">{itens.titulo}</p>
            <p className="text-[#003962]">{itens.titulo2}</p>
          </h2>
        </div>
        <div className="flex mt-4 justify-center">
          <p className="w-[800px] text-center  text-gray-500">
            {itens.subtitulo}
          </p>
        </div>
        <div className="flex mt-4 justify-center ">
          <div className="shadow-md p-7 bg-white rounded-2xl absolute mt-14 ">
            <Sliders
              isVisibleChevron
              slide={itens.cardDepoimento.map((itemCard) => ({
                content: (
                  <div className="w-[790px] h-[380px] grid justify-between items-center font-['Poppins']">
                    <div className="flex justify-center">
                      <div className="w-[85%]">
                        <p className="text-[16px] text-center ">
                          {itemCard.subtitulo}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <h4 className="text-[20px] text-[#003962] mb-2 font-bold">
                        {itemCard.titulo}
                      </h4>
                    </div>
                  </div>
                ),
                key: itemCard._uid,
              }))}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#003962]  w-[full] h-[150px]" />
    </>
  );
}
