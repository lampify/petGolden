import Background from "../../assets/Group.png";

export const Header = ({ blok }) => {
  const itensCabecalho = blok?.body?.find(
    (blokItem) => blokItem?.component === "header"
  )?.itensCabecalho;

  return (
    <div className="w-[100%] h-[120px] text-black items-center justify-center flex ">
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
              <div className="hover:text-[#F4D779] cursor-pointer text-center ml-[24px] text-[14px] font-bold font-['Montserrat'] ">
                {itemBlok?.name}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
