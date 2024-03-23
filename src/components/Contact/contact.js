import React from 'react';
import './contact.css';
import LinkedinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";

const Contact = () => {
    return (
        <section className="contactPage">
            <div className="contactText">
                <h2>Contact Me</h2>
            </div>
            <div id="contact">
                <div className="contactInfo">
                    <span className="heading">Email:  patilshraddha564@gmail.com</span><br />
                    <span className="heading1">Address:  Belgaum, Karnataka</span><br />
                    <span className="heading2">Phone.No:  **********</span><br />
                </div>
                <div className="links">
                    <img src={LinkedinIcon} alt="link" className="link" />
                    <img src={GithubIcon} alt="link" className="link" />
                </div>
                <div className="linkInfo">
                    <a className='linkedin' href='https://www.linkedin.com/in/shraddha-patil-12116123b'>Linkedin</a><br />
                    <a className='github' href='https://github.com/ShraddhaPatil96'>Github</a>
                </div>
                
            </div>
        </section>
    )
}

export default Contact;