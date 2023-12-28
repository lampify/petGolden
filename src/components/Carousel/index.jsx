import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const Carousel = ({ title, items, handleSelecionarConteudoBlog }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 1);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const widthCard = 200;

  const tamanhoCard = items.length * widthCard;

  const tamanhoCardUltrapassandoTela =
    tamanhoCard + widthCard > window.innerWidth;

  const isValueUltimoCard = window.innerWidth - tamanhoCard - 86;

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 1);
    let listW = tamanhoCard;
    if (window.innerWidth - listW > x) {
      x = isValueUltimoCard;
    }
    setScrollX(x);
  };

  return (
    <div className="mb-[30px] relative">
      <h2 className="font-['Poppins'] text-[#003962] text-[30px] font-semibold">
        {title}
      </h2>
      {scrollX !== 0 && (
        <div
          className="left-0 absolute h-[226px] bg-[rgba(238,233,233,0.6)] rounded-tl-xl rounded-bl-xl mt-[12px] z-50 flex items-center justify-center overflow-hidden cursor-pointer transition-all ease-in-out duration-200"
          onClick={handleLeftArrow}
        >
          <FiChevronLeft size={50} />
        </div>
      )}
      {isValueUltimoCard !== scrollX && tamanhoCardUltrapassandoTela && (
        <div
          className="right-0 absolute bg-[rgba(238,233,233,0.6)]  h-[226px] mt-[12px]  rounded-tr-xl rounded-br-xl z-50 flex items-center justify-center overflow-hidden cursor-pointer  transition-all ease-in-out duration-200"
          onClick={handleRightArrow}
        >
          <FiChevronRight size={50} />
        </div>
      )}

      <div className="overflow-x-hidden ">
        <div
          className="transition-all flex ease-in-out duration-200"
          style={{
            marginLeft: scrollX,
            width: tamanhoCard,
          }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <div
                key={item.titulo}
                onClick={() => handleSelecionarConteudoBlog(key)}
                className="w-[100%]  hover:opacity-[0.6] cursor-pointer h-[250px] pb-2  border-2 rounded-xl scale-90 transition-all ease-in-out duration-200"
              >
                <img
                  alt={`imagem sobre ${item.titulo}`}
                  className="rounded-t-xl w-[100%] h-[170px]"
                  src={item.imagem}
                />
                <p className="w-[100%] px-2 text-[#003962] pt-2  text-center">
                  {item.titulo}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
