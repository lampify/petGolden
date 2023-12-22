export const ItemBlog = ({ blogItems }) => {
  return (
    <>
      <div className="w-[60%] mt-6 ">
        <div className="justify-center flex">
          <div className="pb-[200px]">
            <img
              alt="banner dior dogs"
              className="h-[98.4%]"
              src={blogItems.banner}
            />
          </div>
        </div>
      </div>
      <div className="font-['Poppins'] w-[50%]">
        <h2 className="text-[20px] font-bold mb-8">{blogItems.titulo}</h2>
        <p className=" w-[60%] text-[14px] mb-8">{blogItems.subtitulo}</p>
        <div className="w-[201px] h-[52px] relative">
          <a target="_blank" href={blogItems.button.url} rel="noreferrer">
            <button
              type="button"
              className="text-white w-[200px] bg-orange-400 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center me-2 mb-2"
            >
              Acesse o Blog!
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
