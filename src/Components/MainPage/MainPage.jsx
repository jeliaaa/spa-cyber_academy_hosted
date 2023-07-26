import React from "react";
import HeroLeft from "../ReusableComponents/HeroComp/HeroLeft";
import HeroRight from "../ReusableComponents/HeroComp/HeroRight";
import Article3Cards from "../ReusableComponents/ArticleCard/Article3Cards";
import ArticleSwiper from "../ArticleSwiper/ArticleSwiper"; // Keep this import
import Info from "../ReusableComponents/InfoAfterArticle/Info";

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
      <ArticleSwiper /> {/* Keep this component */}
      <Info />
      {/* footer things */}
    </div>
  );
};

export default MainPage;

