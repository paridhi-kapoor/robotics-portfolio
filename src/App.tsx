import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Robotics Portfolio</h1>
        <p>
          Welcome to my robotics portfolio showcasing innovative projects and automation solutions.
        </p>
        <div className="App-navigation">
          <nav>
            <a href="#projects" className="App-link">Projects</a>
            <a href="#skills" className="App-link">Skills</a>
            <a href="#about" className="App-link">About</a>
            <a href="#contact" className="App-link">Contact</a>
          </nav>
        </div>
      </header>
      
      <main className="App-main">
        <section id="projects" className="App-section">
          <h2>Robotics Projects</h2>
          <p>Explore my collection of robotics and automation projects.</p>
        </section>
        
        <section id="skills" className="App-section">
          <h2>Technical Skills</h2>
          <p>Programming languages, frameworks, and robotics technologies I work with.</p>
        </section>
        
        <section id="about" className="App-section">
          <h2>About Me</h2>
          <p>Learn more about my background in robotics and automation.</p>
        </section>
        
        <section id="contact" className="App-section">
          <h2>Contact</h2>
          <p>Get in touch for collaboration opportunities.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
