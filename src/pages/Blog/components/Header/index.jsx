import Group from "assets/group.png";

export const HeaderBlog = ({ blok }) => {
  return (
    <div className="px-7 ">
      <div className="w-[100%] border-b-2 pb-5 flex sm:justify-between justify-center">
        <div className="sm:flex sm:w-[100%] w-[auto] grid items-center justify-items-center justify-between">
          <div
            style={{
              backgroundImage: `url(${Group})`,
            }}
            className="w-[133px] flex justify-center items-center h-[105px] "
          >
            <div>
              <img
                className="w-[100px] h-[105px] object-fill mb-2 ml-2"
                alt="logo da página"
                src={blok.logo}
              />
            </div>
          </div>
          <div>
            <h2 className="text-[30px] font-['Poppins'] font-semibold">
              {blok.nomeBlog}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
