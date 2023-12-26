import blob from "../../assets/blob.png";
import Patas from "../../assets/patterns-white.png";
import Mobile from "../../assets/dog-mobile.png";
import BannerPrincipal from "../../assets/banner.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { Header } from "../Header";

export const Hero = ({ blok }) => {
  const heroItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "hero"
  );

  const isMobile = useMediaQuery("(max-width: 850px)");

  return (
    <div
      style={{
        backgroundImage: isMobile ? "" : `url(${Patas})`,
        backgroundSize: "cover",
      }}
      className="w-[100%] overflow-hidden h-[100vh] bg-[#F6F6F6]"
    >
      <div className="sm:flex hidden">
        <Header blok={blok} />
      </div>
      <div className="text-black overflow-hidden h-[auto] sm:h-[calc(100%-110px)] flex justify-between">
        {isMobile ? (
          <div
            style={{
              backgroundImage: `url(${Patas})`,
              backgroundSize: "cover",
            }}
            className="w-[100%]  flex  items-center  justify-center"
          >
            <div>
              <div className="sm:hidden flex absolute">
                <Header blok={blok} />
              </div>
              <img
                alt=""
                className="sm:hidden mb-6 flex object-cover h-[300px] w-[100%]"
                src={Mobile}
              />
              <div className=" px-10 relative">
                <div className=" text-center left-0 top-0 text-black sm:text-5xl text-3xl font-bold font-['Roboto'] uppercase">
                  {heroItems?.titulo}
                </div>
                <div className=" text-center  left-0 my-5 text-black text-[13px] font-normal font-['Poppins']">
                  {heroItems?.subtitulo}
                </div>
                <div className="w-[100%] items-center flex justify-center ">
                  <a
                    target="_blank"
                    href={heroItems?.nossoEspaco}
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="text-black w-[200px] bg-amber-200 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center me-2 mb-2"
                    >
                      Nosso espaço
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="w-[50%] lg:w-[40%]  flex  items-center  justify-end">
              <div className="w-[475px] 2xl:pl-0 pl-10  h-[317px] relative">
                <div className="2xl:w-[670px]  w-[600px] left-0 top-0 text-black text-5xl font-bold font-['Roboto'] uppercase">
                  {heroItems?.titulo}
                </div>
                <div className="w-[475px]  left-0 my-5 text-black text-[13px] font-normal font-['Poppins']">
                  {heroItems?.subtitulo}
                </div>
                <div className="w-[100%] items-center flex justify-center ">
                  <a
                    target="_blank"
                    href={heroItems?.nossoEspaco}
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="text-black w-[200px] bg-amber-200 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center me-2 mb-2"
                    >
                      Nosso espaço
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[60%] w-[45%]  overflow-hidden 2xl:mr-[10%] mr-[-6%] h-[91%] flex items-end justify-end">
              <div className="relative lg:mb-0 2xl:mb-10 mb-20">
                <img src={blob} alt="fundo do banner" />

                <img
                  src={BannerPrincipal}
                  alt="cachorro"
                  className="absolute object-cover w-[90%] left-[1%] top-[23%]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
