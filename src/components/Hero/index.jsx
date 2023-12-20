import { Header } from "../Header";
import Circle from "../../assets/blob.png";
import Patas from "../../assets/patas.png";

import Ellipse from "../../assets/ellipse.png";

export const Hero = ({ blok }) => {
  const itensHero = blok?.body?.find(
    (blokItem) => blokItem?.component === "hero"
  );

  return (
    <div
      style={{
        backgroundImage: `url(${Patas})`,
      }}
      className="w-[100%] h-[100vh] bg-[#F6F6F6]"
    >
      <Header blok={blok} />
      <div className="text-black h-[calc(100%-110px)] flex justify-between">
        <div className="w-[40%] flex  items-center justify-end">
          <div className="w-[475px] h-[317px] relative">
            <div className="w-[600px]  left-0 top-0 text-black text-5xl font-bold font-['Roboto'] uppercase">
              {itensHero?.titulo}
            </div>
            <div className="w-[475px]  left-0 my-5 text-black text-[13px] font-normal font-['Poppins']">
              {itensHero?.subtitulo}
            </div>
            <div className="w-[201px] h-[52px] left-0 ">
              <div className="w-[201px] h-[52px] left-0 top-0  bg-amber-200 rounded-[110px] shadow" />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[100%] flex items-end relative justify-end">
          <img src={Circle} alt="fundo do banner" className="w-[79%]" />

          <img
            src={itensHero.bannerPrincipal}
            alt="patas de cachorro"
            className="absolute w-[70%] left-[25%] top-[10%]"
          />
        </div>
      </div>
    </div>
  );
};
