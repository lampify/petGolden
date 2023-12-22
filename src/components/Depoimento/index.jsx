import Patas from "../../assets/patterns.png";
import { Sliders } from "../Sliders";

export function Depoimento({ blok }) {
  const depoimentoItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "depoimentos"
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Patas})`,
          backgroundSize: "cover",
        }}
        className="mt-24 h-[auto] pb-14 bg-[#003962] relative"
      >
        <div className="flex pt-5 px-10 text-white justify-center">
          <h2 className="sm:text-[28px] text-center text-[18px] font-bold font-['Roboto']">
            {depoimentoItems.titulo}
            <span className="text-[#F4D779]">{depoimentoItems.titulo2}</span>
          </h2>
        </div>
        <div className="flex sm:px-10 px-3 mt-4 justify-center">
          <p className="sm:w-[800px] w-[100%] text-center text-white">
            {depoimentoItems.subtitulo}
          </p>
        </div>
        <div className="w-[100%] justify-center flex">
          <div className="flex mt-4 justify-center sm:px-20 ">
            <div className="shadow-md sm:p-7 sm:px-0 py-3 bg-white rounded-2xl md:w-[900px] w-[90%] mt-1 sm:mt-14 ">
              <Sliders
                isVisibleChevron
                slide={depoimentoItems.cardDepoimento.map((itemCard) => ({
                  content: (
                    <div className="md:w-[790px]  min-w-[250px] w-[100%] h-[380px] max-h-[380px] overflow-y-auto grid justify-between items-center font-['Poppins']">
                      <div className="flex justify-center">
                        <div className="w-[85%]">
                          <p className="sm:text-[16px] sm:flex hidden text-[14px] text-center ">
                            {itemCard.subtitulo}
                          </p>
                          <p className="sm:text-[16px] flex sm:hidden text-[14px] text-center ">
                            {itemCard.subtitulo.length > 300
                              ? `${itemCard.subtitulo.slice(0, 300)}...`
                              : itemCard.subtitulo}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <h4 className="sm:text-[20px] text-[16px] text-[#003962] mb-2 font-bold">
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
      </div>
    </>
  );
}
