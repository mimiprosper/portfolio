import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm <span className="introName">Emma</span>
          <br />
          Full Stack Web Developer
        </span>
        <div className="introPara">
          I am a Full Stack Web Developer with experience in creating <br /> visual
          stunning and user friendly web sites
        </div>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hire" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
