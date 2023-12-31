import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "hooks/useMediaQuery";
import { substituteRouteParameter } from "hooks/useSubstituteRouteParameter";

export const ItemBlogMobile = ({ blogItems }) => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  const navigate = useNavigate();

  const route = substituteRouteParameter("/blog:id", "id", blogItems?.rota);

  const handleAcessarBlog = () => {
    navigate(route);
  };

  return (
    <div
      className="mobile:h-[770px]  h-[100%] mobile:mb-[170px] mb-0 relative flex justify-center mobile:items-end items-center"
      style={{
        backgroundImage: isMobile ? "" : `url(${blogItems.banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="font-['Poppins'] flex justify-center  w-[100%] mb-0 mobile:mb-[13%]">
        <div className="bg-white p-5 rounded-3xl w-[90%]">
          <h2 className="text-[20px] text-center font-bold mb-8">
            {blogItems.titulo}
          </h2>
          <p className="text-center  text-[14px] mb-8">{blogItems.subtitulo}</p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleAcessarBlog}
              className="text-white w-[200px] bg-orange-400 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center me-2 mb-2"
            >
              Acesse o Blog!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
