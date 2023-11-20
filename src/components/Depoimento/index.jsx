import { ReactNode } from "react";
import { Sliders } from "../Sliders";

export function Depoimento({ blok }) {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "depoimentos"
  );
  return (
    <>
      <div className="mt-12 h-[calc(100vh-200px)] relative">
        <div className="flex justify-center">
          <h2 className="flex text-[28px] font-bold font-['Roboto']">
            <p className="mr-3">{itens.titulo}</p>
            <p className="text-[#F63D3D]">{itens.titulo2}</p>
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
              isVisibleFooter={false}
              slide={itens.cardDepoimento.map((itemCard) => ({
                content: (
                  <div className="w-[790px] h-[380px] grid justify-between items-center font-['Poppins']">
                    <div className="w-[85%]">
                      <p className="text-[14px] text-center ">
                        {itemCard.subtitulo}
                      </p>
                    </div>
                    <h4 className="text-[20px] text-[#F63D3D] mb-2 font-bold">
                      {itemCard.titulo}
                    </h4>
                  </div>
                ),
                key: itemCard._uid,
              }))}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F63D3D]  w-[full] h-[200px]" />
    </>
  );
}
