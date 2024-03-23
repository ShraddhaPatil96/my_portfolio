import React from "react";
import "./skills.css";
import fullstack from '../../assets/fullstack.jpeg';
import webdevIcon from '../../assets/webdevIcon.png';

const Skills = () => {
    return (
        <seciton id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm a skilled Web Developer with a strong interest for creating interactive and user friendly websites.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={webdevIcon} alt="WevDev" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Developer</h2>
                    <p>Web developers create functional, user-friendly websites and web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={fullstack} alt="FullStack" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Full Stack Developer</h2>
                    <p>A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
                </div>
            </div>

        </div>
        
        </seciton>
    )
} 

export default Skills;