import React from "react";
import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ title, description, date, views, image }) => {
  return (
    <div className="blog-item">
      <div className="blog-thumbnail">
        <img src={image} alt="Blog Thumbnail" />
      </div>
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <div className="blog-meta">
          <span className="blog-date">
            <FontAwesomeIcon icon={faClock} /> {date}
          </span>
          <span className="blog-views">
            <FontAwesomeIcon icon={faEye} /> {views} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
