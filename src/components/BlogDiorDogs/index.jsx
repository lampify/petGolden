import Background from "../../assets/background-yellow.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import BackgroundYellow from "../../assets/background-yellow-patas.png";
import { ItemBlogMobile } from "./components/itemBlogMobile";
import { ItemBlog } from "./components/itemBlog";

export function BlogDiorDogs({ blok }) {
  const blogItems = blok?.body?.find(
    (blokItem) => blokItem?.component === "blog"
  );

  const isMobile = useMediaQuery("(max-width: 500px)");

  const isMaxLarget768 = useMediaQuery("(max-width: 768px)");

  return (
    <div className="mt-24 mb-12">
      <div
        className="h-[599px] bg-[#F4D779] relative flex justify-start items-center"
        style={{
          backgroundImage: isMobile
            ? `url(${BackgroundYellow})`
            : `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {isMaxLarget768 ? (
          <ItemBlogMobile blogItems={blogItems} />
        ) : (
          <ItemBlog blogItems={blogItems} />
        )}
      </div>
    </div>
  );
}
