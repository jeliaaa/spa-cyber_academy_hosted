import React from "react";
import HeroLeft from "../ReusableComponents/HeroComp/HeroLeft";
import HeroRight from "../ReusableComponents/HeroComp/HeroRight";
import Article3Cards from "../ReusableComponents/ArticleCard/Article3Cards";
import ArticleSwiper from "../ArticleSwiper/ArticleSwiper"; // Keep this import
import HomeVid from "../HomeVid/HomeVid";
import HeroLeftScroll from "../ReusableComponents/HeroComp/HeroLeftScroll";

const MainPage = () => {
  return (
    <div className="main_page_container">
      <HomeVid />
      <HeroLeftScroll />
      <HeroRight />
      <HeroLeft />
      <Article3Cards />
      <HeroRight />
      <HeroLeft />
      <Article3Cards />
      <HeroRight />
      <Article3Cards />
      <HeroRight />
      <ArticleSwiper />
    </div>
  );
};

export default MainPage;

