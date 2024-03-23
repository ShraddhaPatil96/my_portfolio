import React from "react";
import "./work.css";

const Works = () => {
    return (
        <section id="works">
        <span className="workTitle">My Projects and Certification.</span>
        <span className="workDesc">I have done some projects during my academics which are mentioned below.</span>
        <div className="workList">
            <div className="projects">
                <h2 className="projectHeading">PROJECTS</h2>
                <div className="project">
                    <div className="projectText">
                        <h2>Online Unused Medicine Donation for NGOs</h2>
                        <p>This is my final year project in MCA which is developed using the latest technology MERN(MongoDB, Express.js, React.js, Node.js) stack.Uing this online platform any donor can donate the unused medicines to the poor and needy people.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectText">
                        <h2>Note App</h2>
                        <p>This project is developed using HTML, CSS, JavaScript using which we can note down our personal and useful information.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="projectText">
                        <h2>Automatic Plant Watering System using IoT </h2>
                        <p>This is my mini-project which is developed with IoT system that helps us to take care of our plants in our absence too.</p>
                    </div>
                </div>
            </div>
            <div className="certificates">
            <h2 className="certHeading">CERTIFICATION</h2>
            <div className="certificate">
            <div className="certificateText">
                        <h2>Web Development Course </h2>
                        <p>I have done the web Development certification course provided by Udemy in 2023.</p>
                    </div>

            </div>
            </div>
        </div>
        </section>
    )
}

export default Works;