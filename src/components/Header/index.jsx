import Background from "../../assets/group.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import jsonHeader from "../../json/header.json";

import { MobileNavigationDialog } from "./components/MobileNavigationDialog";

export const Header = ({ blok }) => {
  const blokHeader = blok?.body?.find(
    (blokItem) => blokItem?.component === "header"
  )?.itensCabecalho;

  const linkLogo = blokHeader.find((item) => item.img).img;

  const itemsHeader = jsonHeader.map((itemHeader) => ({
    ...itemHeader,
    logo: linkLogo,
  }));

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const scrollToForm = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className="w-[100%] h-[120px] lg:pl-0 pl-10  text-black items-center justify-start lg:justify-center flex ">
      {isMobile ? (
        <>
          <MobileNavigationDialog navItems={itemsHeader} />
        </>
      ) : (
        <div className="ml-[-6%] items-center justify-center flex">
          {itemsHeader.map((itemBlok) => (
            <>
              {itemBlok?.img ? (
                <div
                  style={{
                    backgroundImage: `url(${Background})`,
                  }}
                  className="w-[133px] flex justify-center items-center ml-5 h-[105px] "
                >
                  <div>
                    <img
                      className="w-[100px] mb-2 ml-2"
                      alt="logo da página"
                      src={itemBlok.logo}
                    />
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => scrollToForm(itemBlok.id)}
                  className="hover:text-[#F4D779] cursor-pointer text-center ml-[24px] text-[14px] font-bold font-['Montserrat'] "
                >
                  {itemBlok?.name}
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
