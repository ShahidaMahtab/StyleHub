import Banner from "@/components/Home/Banner";
import StyleGuide from "./../components/Home/StyleGuide";
import CategoryProduct from "./../components/Home/CategoryProduct";
import StickyDiv from "@/components/StickyDiv/StickyDiv";

const Home = () => {
  return (
    <div className="space-y-20 ">
      <Banner />
      <StyleGuide />
      <CategoryProduct />
      <StickyDiv></StickyDiv>
    </div>
  );
};

export default Home;
