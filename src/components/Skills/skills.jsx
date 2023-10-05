import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDes">
        I am a skilled and passionate Full Stack Web Developer with experience
        in creating visually appealing and user friendly websites. I am
        proficient in HTML, CSS and JS. Am also proficient in JS frameworks like
        ReactJS, ExpressJs, NextJs; Database tools like MongoDB and Firebase;
        CSS frameworks like TailwindCSS, Material-UI, and API development.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Development</h2>
            <p>This is a demo text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
