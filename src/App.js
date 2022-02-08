import React  from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import resumeData from './resumeData';
import './App.css'
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
    
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Experience resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
  );
}

export default App;
