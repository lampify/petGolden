import { useState, useEffect, useCallback } from "react";

export const Sliders = ({
  slide,
  isVisibleFooter = true,
  bg = "gray-200",
  ...rest
}) => {
  const slidesVisiveis = slide;

  const [listSlide, setListSlide] = useState();
  const [slideSelecionado, setSlideSelecionado] = useState(0);

  const existeProximoSlide = slidesVisiveis.length > 1;

  const exibirSlideSelecionado = useCallback(
    (indexItem) => {
      if (slidesVisiveis) {
        setListSlide(slidesVisiveis[indexItem]);
      }
    },
    [slidesVisiveis]
  );

  useEffect(() => {
    exibirSlideSelecionado(slideSelecionado);
  }, [exibirSlideSelecionado, slideSelecionado]);

  console.log(listSlide);
  return (
    <div className="rounded-5px">
      <div className="h-full relative">
        <div className="mb-[20px]">{listSlide?.content}</div>
        {existeProximoSlide && isVisibleFooter && (
          <div className="flex justify-center">
            {slide.map((slideItem, index) => {
              return (
                <div
                  key={slideItem.key}
                  className={`${
                    listSlide?.key === slideItem.key
                      ? "transform transition-transform duration-1000 ease-in-out"
                      : ""
                  }`}
                >
                  <div
                    className={`${
                      listSlide?.key === slideItem.key
                        ? "bg-[#f63d3d]"
                        : "bg-gray-400"
                    } w-[10px] h-[10px] border-1px border-solid mr-1 cursor-pointer rounded-full`}
                    onClick={() => setSlideSelecionado(index)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
