import { Header } from "../Header";
import blob from "../../assets/blob.png";
import Patas from "../../assets/patas.png";

export const Hero = ({ blok }) => {
  const heroItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "hero"
  );

  return (
    <div
      style={{
        backgroundImage: `url(${Patas})`,
        backgroundSize: "cover",
      }}
      className="w-[100%] overflow-hidden h-[100vh] bg-[#F6F6F6]"
    >
      <Header blok={blok} />
      <div className="text-black overflow-hidden h-[calc(100%-110px)] flex justify-between">
        <div className="w-[53%] lg:w-[40%]  flex  items-center  justify-end">
          <div className="w-[475px] 2xl:pl-0 pl-10  h-[317px] relative">
            <div className="w-[600px]  left-0 top-0 text-black text-5xl font-bold font-['Roboto'] uppercase">
              {heroItems?.titulo}
            </div>
            <div className="w-[475px]  left-0 my-5 text-black text-[13px] font-normal font-['Poppins']">
              {heroItems?.subtitulo}
            </div>
            <div className="w-[201px] h-[52px] left-0 ">
              <div className="w-[201px] h-[52px] left-0 top-0  bg-amber-200 rounded-[110px] shadow" />
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] w-[45%] overflow-hidden 2xl:mr-0 mr-[-6%] h-[91%] flex items-end justify-end">
          <div className="relative lg:mb-0 mb-20">
            <img src={blob} alt="fundo do banner" />

            <img
              src={heroItems.bannerPrincipal}
              alt="cachorro"
              className="absolute object-cover w-[90%] left-[1%] top-[23%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
