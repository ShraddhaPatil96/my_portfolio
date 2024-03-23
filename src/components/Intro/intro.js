import React from "react";
import './intro.css';
import spImg from "../../assets/sp_image.jpg";


const Intro = () => {
    return (
        <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Shraddha Patil</span> <br /> Website Developer</span>
        <p className="introPara">I'm a skilled web developer with a strong interest for <br /> creating user friendly website.</p>
        
        </div>
        <img src={spImg} alt="spImage" className="bg"/>

        </section>
    )
}

export default Intro;

