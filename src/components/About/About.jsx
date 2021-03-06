import React from 'react'
import FooterLink from '../Footer/FooterLink';
import Header from '../Header/Header'
import aboutVector from './../../assets/about_vector.png'
import "./About.css";
import hello from './../../assets/hello.gif';
const About = () => {
    return (
        <div className="section-container">
        <Header
        heading="About Me."
        details="Research Intern @ INMAS,DRDO | vGHC Scholar'21 | Azure Developer Community Lead | Member @LeanIN BV | Mentor "/>
        <div className="about-main">
            <div className="about-main-left">
            <h3 className="about-sub-head">My Experience</h3>
              <p className="about details">
                <b>Research Intern</b>
                <p>Working as Research Intern at INMAS, Defence Research and Development Organization (DRDO)</p>
                <b>DG Techno Soft</b>
                <p >
                I worked as an Full-Stack Dev Intern at DG Techno Soft India.Here I am Developed a website from scratch using React Framework,REST-APIs and developed ongoing projects and Made their UI better using different languages and framework
                </p> {/* <a className="about-link-element" href="https://drive.google.com/file/d/1aCpj38kxO8S2cMg-6hZc2pqv1MndPk0u/view">.Check here!</a> */}
              </p>
              <h3 className="about-sub-head">Open Source Contributor</h3>
              <p className="about details">
                  I am an Open Source enthusiast and had contributed to different projects.Check out my{''}
                  <a className="about-link-element" href="https://github.com/Khushi0321"> Contributions!</a>
              </p>
              <h3 className="about-sub-head">Blogger</h3>
              <p className="about details">
                  I write about personal growth and tech.Check out my{''}
                  <a className="about-link-element" href="https://khushi321.medium.com/"> Blogs here!</a>
              </p>
            </div>
            <div className="about-main-right">
 
              <img src={hello} alt="animation" className="about-anime"></img>
           
            </div>
        </div>
        <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
        />
        <div className="vector-frame">
          <img src={aboutVector} className="about-vector" alt="about"></img>
        </div>
        </div>
    )
}

export default About
