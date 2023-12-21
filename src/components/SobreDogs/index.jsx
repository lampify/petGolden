import { Sliders } from "../Sliders";

export function SobreDogs({ blok }) {
  const sobreDogsItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "sobreEmpresa"
  );
  return (
    <div className="flex md:pt-28 py-10 justify-around pb-24 ">
      <Sliders
        slide={sobreDogsItems.cards.map((itemCard) => ({
          content: (
            <div className="w-[478px] h-[345px] flex items-center font-['Poppins']">
              <div>
                <h4 className="text-[20px] text-[#003962] mb-2 font-bold">
                  {itemCard.titulo}
                </h4>
                <p className="text-[14px]">{itemCard.subtitulo}</p>
              </div>
            </div>
          ),
          key: itemCard._uid,
        }))}
      />
      <div
        style={{
          backgroundColor: sobreDogsItems.corFundo,
        }}
        className="w-[571px] rounded-[10px] h-[380px] relative"
      >
        <img
          alt="imagem da Gabi com um filhote de golden"
          src={sobreDogsItems.imagem}
          className="absolute w-[571px] rounded-[10px] h-[380px] object-center top-[-35px] right-[-35px] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
