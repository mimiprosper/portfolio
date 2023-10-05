import React from "react";
import "./work.css";
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Work = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          I take pride in paying attention to small details and make sure my
          work is pixel perfect. I am excited to bring my skill to add value to
          your projects and help you achieve your goals
        </span>
        <div className="worksImgs">
          <img src={portfolio1} alt="portfolio" className="worksImg" />
          <img src={portfolio2} alt="portfolio" className="worksImg" />
          <img src={portfolio3} alt="portfolio" className="worksImg" />
          <img src={portfolio4} alt="portfolio" className="worksImg" />
          <img src={portfolio5} alt="portfolio" className="worksImg" />
          <img src={portfolio6} alt="portfolio" className="worksImg" />
          </div>
          <button className="worksBtn">See more</button>
    </section>
  );
};

export default Work;
