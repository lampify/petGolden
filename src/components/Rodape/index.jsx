import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

export function Rodape({ blok }) {
  const itens = blok?.body?.find(
    (blokItem) => blokItem?.component === "rodape"
  );

  const valueYear = new Date().getFullYear();

  return (
    <div className="bg-[#003962]  px-40 mt-24 h-[452px]">
      <div className="flex justify-between h-[80%] items-center ">
        <div>
          {itens.patrocinadores.map((item) => (
            <img
              alt=""
              className="w-[130px] mb-2 bg-white rounded-lg"
              src={item.img}
            />
          ))}
        </div>
        <div className="font-['Poppins']  text-white">
          <p className="font-semibold text-[26px]">Contato:</p>
          <p className="flex mb-2 items-center text-[14px]">
            <FaWhatsapp size={14} className="mr-2" />
            {itens.whatsApp}
          </p>
          <p className="flex  mb-2 items-center text-[14px]">
            <FaInstagram size={14} className="mr-2" />
            {itens.contatoInstagran[0].titulo}
          </p>
          <p className="flex  mb-2 items-center text-[14px]">
            <FaTiktok size={14} className="mr-2" />
            {itens.contatoTiktok[0].titulo}
          </p>
          <p className="flex  mb-2 items-center text-[14px]">
            <FaYoutube size={14} className="mr-2" />
            {itens.contatoYoutube[0].titulo}
          </p>
          <p className="flex  mb-2 items-center text-[14px]">
            <FaHome size={14} className="mr-2" />
            {itens.endereco}
          </p>
        </div>
      </div>
      <div className="flex font-['Poppins'] text-[14px] text-white items-center h-[10%] justify-center">
        <div>
          <p>
            {itens.direitosReservados} {valueYear} | Todos os direitos
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
