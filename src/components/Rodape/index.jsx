import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

export function Rodape({ blok, linkWhatsApp }) {
  const rodapeItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "rodape"
  );

  const valueYear = new Date().getFullYear();

  return (
    <div className="bg-[#003962] sm:pt-0 pt-7 px-5 sm:px-10 xl:px-40 sm:mt-24 h-[452px]">
      <div className="sm:flex  justify-between h-[80%] items-center ">
        <div className="flex sm:grid">
          {rodapeItems.patrocinadores.map((item) => (
            <img
              alt=""
              className="w-[130px] sm:mr-0 mr-2 mb-4 sm:mb-2 bg-white rounded-lg"
              src={item.img}
            />
          ))}
        </div>
        <div className="font-['Poppins']  text-white">
          <p className="font-semibold text-[26px]">Contato:</p>
          <a target="_blank" href={linkWhatsApp} rel="noreferrer">
            <p className="flex mb-2 items-center text-[14px]">
              <FaWhatsapp size={14} className="mr-2" />
              {rodapeItems.whatsApp}
            </p>
          </a>
          <a
            target="_blank"
            href={rodapeItems.contatoInstagran[0].link.url}
            rel="noreferrer"
          >
            <p className="flex  mb-2 items-center cursor-pointer text-[14px]">
              <FaInstagram size={14} className="mr-2" />
              {rodapeItems.contatoInstagran[0].titulo}
            </p>
          </a>
          <a
            target="_blank"
            href={rodapeItems.contatoTiktok[0].link.url}
            rel="noreferrer"
          >
            <p className="flex  mb-2 items-center text-[14px]">
              <FaTiktok size={14} className="mr-2" />
              {rodapeItems.contatoTiktok[0].titulo}
            </p>
          </a>
          <a
            target="_blank"
            href={rodapeItems.contatoYoutube[0].link.url}
            rel="noreferrer"
          >
            <p className="flex  mb-2 items-center text-[14px]">
              <FaYoutube size={14} className="mr-2" />
              {rodapeItems.contatoYoutube[0].titulo}
            </p>
          </a>
          <p className="flex  mb-2 items-center text-[14px]">
            <FaHome size={14} className="mr-2" />
            {rodapeItems.endereco}
          </p>
        </div>
      </div>
      <div className="flex font-['Poppins'] text-[14px] text-white items-center h-[10%] justify-center">
        <div>
          <p className="sm:text-[14px] text-[13px] ">
            {rodapeItems.direitosReservados} {valueYear} | Todos os direitos
            reservados
          </p>
          <p className="text-center font-semibold">
            Desenvolvido por: Marcielen Barbosa{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
