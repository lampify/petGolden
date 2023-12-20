import Background from "../../assets/background-yellow.png";

export function BlogDiorDogs({ blok }) {
  const itens = blok?.body?.find((blokItem) => blokItem?.component === "blog");
  console.log(itens);
  return (
    <div className="mt-24 mb-12">
      <div
        className="h-[80vh] relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="w-[60%]">
          <div className="justify-center flex">
            <div className="absolute top-[-116px]">
              <img
                alt="banner dior dogs"
                className="h-[700px]"
                src={itens.banner}
              />
            </div>
          </div>
        </div>

        <div className="font-['Poppins'] w-[50%]">
          <h2 className="text-[20px] font-bold mb-8">{itens.titulo}</h2>
          <p className=" w-[60%] text-[14px] mb-8">{itens.subtitulo}</p>
          <div className="w-[201px] h-[52px] relative">
            <div className="w-[250px] h-[52px] left-0 top-0 absolute bg-orange-400 rounded-[26px] shadow" />
            <div className="left-[42px] top-[8px] absolute whitespace-nowrap text-white text-2xl font-medium font-['Poppins']">
              Acesse o Blog!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
