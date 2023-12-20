import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Background from "../../assets/background-yellow-patas.png";

export function FaleConosco({ blok }) {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "faleConosco"
  );

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center px-10 my-24 h-[452px]"
    >
      <div className="w-[33%]">
        <h2 className="text-black text-center mb-5 text-3xl font-bold font-['Roboto']">
          O seu <span className="text-[#003962]">melhor aumigo</span> esta aqui!
        </h2>
        <p className="font-['Roboto']  mb-5 text-center">
          Entre em contato com a gente! tire suas dúvidas sobre o nosso
          criadouro ou marque um visita
        </p>

        <div className="  mb-3 flex justify-center">
          <button
            type="button"
            className="text-white bg-[#47dc53] focus:outline-none font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <FaWhatsapp size={20} className="mr-3" />
            WhatApp
          </button>
        </div>
        <div className=" mb-5 flex justify-center">
          <button
            type="button"
            className="text-white inline-flex items-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <FaInstagram size={20} className="mr-3" />
            Instagran
          </button>
        </div>
      </div>
    </div>
  );
}
