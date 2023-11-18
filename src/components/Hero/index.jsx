import { Header } from "../Header";
import Circle from "../../assets/circle.png";
import Dog from "../../assets/dog.png";
import Ellipse from "../../assets/ellipse.png";

export const Hero = ({ blok }) => {
  const itensHero = blok?.body?.find(
    (blokItem) => blokItem?.component === "hero"
  );

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #000000, #000000, #200908, #290e06, #311100)",
      }}
      className="w-[100%] h-[100vh]"
    >
      <Header blok={blok} />
      <div className="text-white h-[calc(100%-110px)] flex justify-between">
        <div className="w-[40%] flex  items-center justify-end">
          <div className="w-[475px] h-[317px] relative">
            <div className="w-[600px]  left-0 top-0 text-white text-5xl font-bold font-['Roboto'] uppercase">
              {itensHero?.titulo}
            </div>
            <div className="w-[475px]  left-0 my-5 text-white text-[13px] font-normal font-['Poppins']">
              {itensHero?.subtitulo}
            </div>
            <div className="w-[201px] h-[52px] left-0 ">
              <div className="w-[201px] h-[52px] left-0 top-0  bg-amber-200 rounded-[110px] shadow" />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[100%] flex items-end relative justify-end">
          <img src={Circle} alt="fundo do banner" className="w-[79%]" />
          <img src={Ellipse} alt="fundo claro" className="absolute w-[95%]" />
          <img
            src={Dog}
            alt="patas de cachorro"
            className="absolute w-[65%] right-[5%] top-[7%]"
          />

          <img
            src={itensHero.bannerPrincipal}
            alt="patas de cachorro"
            className="absolute w-[70%] top-[20%]"
          />
        </div>
      </div>
    </div>
  );
};
