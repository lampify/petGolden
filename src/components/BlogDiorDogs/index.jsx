import Background from "../../assets/background-yellow.png";

export function BlogDiorDogs({ blok }) {
  const blogItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "blog"
  );

  return (
    <div className="mt-24 mb-12">
      <div
        className="h-[599px] relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-[60%]">
          <div className="justify-center flex">
            <div className="pb-[200px]">
              <img
                alt="banner dior dogs"
                className="h-[100%]"
                src={blogItems.banner}
              />
            </div>
          </div>
        </div>

        <div className="font-['Poppins'] w-[50%]">
          <h2 className="text-[20px] font-bold mb-8">{blogItems.titulo}</h2>
          <p className=" w-[60%] text-[14px] mb-8">{blogItems.subtitulo}</p>
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
