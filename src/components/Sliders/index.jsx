import { useState, useCallback } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./style.css";

export const Sliders = ({
  slide,
  isVisibleChevron = false,
  bg = "gray-200",
  color = "bg-[#003962]",
  ...rest
}) => {
  const slidesVisiveis = slide;

  const [listSlide, setListSlide] = useState(slide[0]);
  const [slideSelecionado, setSlideSelecionado] = useState(0);

  const existeProximoSlide = slidesVisiveis.length > 1;

  const amountSlide = slide.length - 1;

  const modificarSlide = useCallback(
    (index) => {
      if (slidesVisiveis) {
        setListSlide(slidesVisiveis[index]);
        setSlideSelecionado(index);
      }
    },
    [slidesVisiveis]
  );

  const nextSlide = useCallback(() => {
    const indexItem = slideSelecionado + 1;

    const isLastSlide = slideSelecionado === amountSlide;

    if (isLastSlide) {
      modificarSlide(0);
    } else {
      modificarSlide(indexItem);
    }
  }, [modificarSlide, amountSlide, slideSelecionado]);

  const prevSlide = useCallback(() => {
    const indexItem = slideSelecionado - 1;

    const isFirstSlide = slideSelecionado === 0;

    if (isFirstSlide) {
      modificarSlide(amountSlide);
    } else {
      modificarSlide(indexItem);
    }
  }, [modificarSlide, amountSlide, slideSelecionado]);

  return (
    <div className=" rounded-5px">
      <div className="h-full relative">
        <div className="mb-[20px] flex justify-center">
          {isVisibleChevron && (
            <div className="items-center flex justify-center">
              <FiChevronLeft
                className="cursor-pointer"
                onClick={prevSlide}
                size={30}
              />
            </div>
          )}
          <div>{listSlide?.content}</div>
          {isVisibleChevron && (
            <div className="items-center flex justify-center">
              <FiChevronRight
                className="cursor-pointer"
                onClick={nextSlide}
                size={30}
              />
            </div>
          )}
        </div>

        {existeProximoSlide && (
          <div className="flex   justify-center">
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
                      listSlide?.key === slideItem.key ? color : "bg-gray-400"
                    } w-[15px]   h-[15px] border-1px border-solid mr-1 cursor-pointer rounded-full`}
                    onClick={() => modificarSlide(index)}
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
