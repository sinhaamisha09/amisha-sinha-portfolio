import React from 'react';
import '../App.css'

const About = (props) =>  {

    let resumeData = props.resumeData;
    return (
      <section id="about">
        <div className="row">
         
          <div className="seven columns header-col ">
            <h2>Me, Myself & I</h2>
            <p>{resumeData.aboutme}
            <br/>
            <span>{resumeData.roleDescription}</span>
            <br/>
            </p>
          </div>
          <div className="five columns">
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Me</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.email}</span>
                  <br />
                  <span>{resumeData.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default About;

// <div className="three columns">
//             <img className="profile-pic" src="" alt="" />
//           </div>