import React from "react";
import HeroLeft from "../ReusableComponents/HeroComp/HeroLeft";
import HeroRight from "../ReusableComponents/HeroComp/HeroRight";
import Article3Cards from "../ReusableComponents/ArticleCard/Article3Cards";

const MainPage = () => {
  return (
    <div className="main_page_container">
      <HeroLeft />
      <HeroRight />
      <HeroLeft />
      <Article3Cards />
      <HeroRight />
      <HeroLeft />
      <Article3Cards />
      <HeroRight />
      <Article3Cards />
        {/* footer things */}
    </div>
  );
};

export default MainPage;
