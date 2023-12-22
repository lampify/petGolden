import Background from "../../assets/Group.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MobileNavigationDialog } from "./components/MobileNavigationDialog";

export const Header = ({ blok }) => {
  const itensCabecalho = blok?.body?.find(
    (blokItem) => blokItem?.component === "header"
  )?.itensCabecalho;

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const scrollToForm = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className="w-[100%] h-[120px] lg:pl-0 pl-10  text-black items-center justify-start lg:justify-center flex ">
      {isMobile ? (
        <>
          <MobileNavigationDialog navItems={itensCabecalho} />
        </>
      ) : (
        <div className="ml-[-6%] items-center justify-center flex">
          {itensCabecalho.map((itemBlok) => (
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
                      src={itemBlok.img}
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
