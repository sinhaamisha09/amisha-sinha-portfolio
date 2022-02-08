import React  from 'react';
import '../App.css'

const Resume = (props) => ({
  render() {
    let resumeData = props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span> || </span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            
            <div className="nine columns main-col">
              <div className="contain">
                <div className="columns-skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item) => {
                      return (
                        <img
                          className="grid-item"
                          src={`${item.imgurl}`}
                        />
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          
      </section>
    );
  }
})

export default Resume;
