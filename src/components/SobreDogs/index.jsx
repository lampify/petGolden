import BabyGolden from "../../assets/baby-golden.jpeg";
import Patas from "../../assets/patterns.png";

import { Sliders } from "../Sliders";

export function SobreDogs({ blok }) {
  const sobreDogsItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "sobreEmpresa"
  );
  return (
    <div
      id="sobreNosId"
      style={{
        backgroundImage: `url(${Patas})`,
        backgroundSize: "cover",
      }}
      className="flex px-5  xl:px-0 sm:px-10 md:pt-28 bg-[#003962] py-10 justify-around pb-24 "
    >
      <div className="">
        <Sliders
          color="bg-white"
          slide={sobreDogsItems.cards.map((itemCard) => ({
            content: (
              <div className="xl:w-[478px] z-50 lg:w-[430px] w-[100%] sm:w-[500px] h-[345px] flex items-center font-['Poppins']">
                <div>
                  <h4 className="text-[20px]  text-[#F4D779] mb-2 font-bold">
                    {itemCard.titulo}
                  </h4>
                  <p className="lg:text-[14px] text-[14px] sm:text-[16px]  text-white">
                    {itemCard.subtitulo}
                  </p>
                </div>
              </div>
            ),
            key: itemCard._uid,
          }))}
        />
      </div>
      <div className="xl:w-[571px] w-[450px] lg:flex hidden rounded-[10px] h-[380px] relative">
        <img
          alt="imagem da Gabi com um filhote de golden"
          src={BabyGolden}
          className="absolute w-[571px] rounded-[10px] h-[380px] object-center top-[-35px] right-[-35px] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
