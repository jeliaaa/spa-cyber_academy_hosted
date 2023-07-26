import React from "react";
import "./article.css";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <Link to={'/article-info'} className="article" >
      <div className="article_wrapper">
        <div className="article_front">
          <img src="https://picsum.photos/500/" alt="" />
        </div>
        <div className="article_back">
          <p className="article_back_desc">
            Staying in a Berkeley suite always feels special - why not treat
            yourself?
          </p>
        </div>
      </div>
      <div className="article_front_content">
        <h3 className="article_front_title">[title]</h3>
      </div>
    </Link>
    
  );
};

export default Article;
