import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import Background from "../../assets/background-yellow-patas.png";

export function FaleConosco({ blok, linkWhatsApp }) {
  const faleConoscoItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "faleConosco"
  );

  return (
    <div
      id="contatoId"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center px-10 sm:my-24 my-8 h-[452px]"
    >
      <div className="2xl:w-[33%] w-[100%] sm:w-[60%] lg:w-[40%]">
        <h2 className="text-black text-center mb-5 text-2xl sm:text-3xl font-bold font-['Roboto']">
          {faleConoscoItems.titulo}{" "}
          <span className="text-[#003962]">
            {faleConoscoItems.tituloSublinhado}
          </span>{" "}
        </h2>
        <p className="font-['Roboto']  mb-5 text-center">
          {faleConoscoItems.subtitulo}
        </p>

        <div className="  mb-3 flex justify-center">
          <a target="_blank" href={linkWhatsApp} rel="noreferrer">
            <button
              type="button"
              className="text-white bg-[#47dc53] font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              <FaWhatsapp size={20} className="mr-3" />
              WhatApp
            </button>
          </a>
        </div>
        <div className=" mb-5 flex justify-center">
          <a
            target="_blank"
            href={faleConoscoItems.instagran.url}
            rel="noreferrer"
          >
            <button
              type="button"
              className="text-white inline-flex items-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <FaInstagram size={20} className="mr-3" />
              Instagran
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
