import React from "react";

export const QualidadeDogs = ({ blok }) => {
  const qualidadeItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "qualidadeDogs"
  );

  return (
    <div id="qualidadeDiorDogsId" className="md:px-0 bg-[#F6F6F6] px-10">
      <div className=" py-6 pt-24 justify-center flex">
        <div>
          <div className="flex justify-center">
            <img alt="logo de um cachorro" src={qualidadeItems.imagem} />
          </div>
          <h2 className="text-[28px] sm:text-[38px] text-center md:text-[48px] font-['Roboto']">
            <span className="text-[#003962]">{qualidadeItems.titulo}</span>{" "}
            {qualidadeItems.subtitulo}
          </h2>
        </div>
      </div>
      <div className="flex  justify-center pt-4 pb-24">
        <div className="md:flex md:justify-evenly md:w-[100%]">
          {qualidadeItems.cards.map((valueQualidadeDogs) => (
            <div
              style={{
                borderColor: valueQualidadeDogs.color,
              }}
              className="md:border-0 border-2 md:p-0 p-3 rounded-xl md:mb-0 mb-8 w-[250px] md:w-[200px]"
            >
              <div className="flex  justify-center">
                <div
                  className="p-2 rounded-md mb-2"
                  style={{
                    background: valueQualidadeDogs.color,
                  }}
                >
                  <img
                    className="w-[50px]"
                    src={valueQualidadeDogs.img}
                    alt="Imagem de qualidade dos dogs"
                  />
                </div>
              </div>
              <h3 className="text-center font-['Montserrat']  leading-5 font-bold text-[#003962]">
                {valueQualidadeDogs.subtitulo}
              </h3>
              <h4 className="text-[12px] font-['Montserrat']  text-center">
                {valueQualidadeDogs.titulo}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
