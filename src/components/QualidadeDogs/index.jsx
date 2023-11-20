import React from "react";

export const QualidadeDogs = ({ blok }) => {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "qualidadeDogs"
  );

  return (
    <>
      <div className="bg-[#F6F6F6] py-6 justify-center flex">
        <div>
          <div className="flex justify-center">
            <img alt="logo de um cachorro" src={itens.imagem} />
          </div>
          <h2 className="flex text-[48px] font-['Roboto']">
            <p className="mr-3 text-[#F63D3D]">{itens.titulo}</p>
            <p>{itens.subtitulo}</p>
          </h2>
        </div>
      </div>
      <div className="flex justify-evenly bg-[#F6F6F6] pt-4 pb-6">
        {itens.cards.map((itemQualidadeDogs) => (
          <div className="w-[200px]">
            <div className="flex justify-center">
              <div
                className="p-2 rounded-md mb-2"
                style={{
                  background: itemQualidadeDogs.color,
                }}
              >
                <img
                  className="w-[50px]"
                  src={itemQualidadeDogs.img}
                  alt="Imagem de qualidade dos dogs"
                />
              </div>
            </div>
            <h3 className="text-center font-['Montserrat']  leading-5 font-bold text-[#F63D3D]">
              {itemQualidadeDogs.subtitulo}
            </h3>
            <h4 className="text-[12px] font-['Montserrat']  text-center">
              {itemQualidadeDogs.titulo}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};
