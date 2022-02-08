import React, {Component} from 'react';
import '../App.css'

const Experience = (props) => {
    let resumeData = props.resumeData
  return <div>
  <section id="work">
        <div className="row work">
          <div className="three columns header-col">
            <h1 >
              <span>Work Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <ul className="timeline">
            {   
              resumeData.work && resumeData.work.map( (experience) => {
                return(<li className="event">
                    <div className="text"  style={{lineHeight:"28px"}}>
                        {experience.specialization}
                        <br></br>
                        <div style={{fontSize:"17px", color:"#E8E8E8"}}>
                            <i>{experience.CompanyName}</i>
                        </div>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        {experience.DateOfStarting} – {experience.DateOfLeaving}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        - {experience.Achievements}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        - Technologies Used: {experience.TechnologiesUsed}
                    </div>
                </li>  )       
                })
            }
            </ul>
            </div>
          </div>
        </section>
  </div>;
}

export default Experience;
