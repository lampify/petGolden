export const Header = ({ blok }) => {
  const itensCabecalho = blok?.body?.find(
    (blokItem) => blokItem?.component === "header"
  )?.itensCabecalho;

  return (
    <div className="w-[100%] h-[110px] text-white items-center justify-center flex ">
      <div className="ml-[-6%] items-center justify-center flex">
        {itensCabecalho.map((itemBlok) => (
          <>
            {itemBlok?.img ? (
              <div className="w-[157px] ml-14 h-20 ">
                <div>
                  <img alt="logo da página" src={itemBlok.img} />
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
