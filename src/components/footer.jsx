import React from "react";
import '../App.css'

const Footer = (props) => ({
  render() {
    let resumeData = props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
          <p className="lead" style={{fontSize:"17px", color:"#E8E8E8"}}>Let's Catchup!</p>
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
})

export default Footer