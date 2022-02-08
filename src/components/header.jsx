import React from 'react';
import Typewriter from 'typewriter-effect'
import '../App.css'

const Header = (props) =>  {
    let resumeData = props.resumeData;
    return (
      <React.Fragment>
        <header id="home" className="header">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>  
                <a className="smoothscroll" href="#resume">
                  Skills
                </a>
              </li>

              <li>  
                <a className="smoothscroll" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              
            </ul>
          </nav>

          <div className="row banner">
          <span className="tags top-tags"> &lt;html&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;body&gt; </span>
            <div className="banner-text slider-text-inner ">
              <h1 className="responsive-headline blast-root">Hi,
                <br/> I'm <img width="58" height="80px" src="logo1.png" alt="Name" />
                misha.
              </h1>
              <div className="typewriter">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Former Intern at Sharechat, Nasdaq')

                      .pauseFor(400)
                      .deleteChars(34)
                      .typeString('Full Stack Devloper')
                      .pauseFor(400)
                      .start()
                  }}
                />
              </div>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
                  <hr />
                <a
                  href="https://drive.google.com/file/d/1Ay7MkpY3_qWe3XOW0_Wawe0gO9MCAbps/view?usp=sharing"
                  target="_blank"
                >
                  <button className="button3">Resume</button>
                </a>
              </ul>
            </div>
            <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  } 

export default Header;