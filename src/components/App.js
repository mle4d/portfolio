import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Projects from './projects/Projects';
// import getProjects from './projects/ProjectList';
import styles from './app.css';

export default function App() {

  
  // getProjects();


  return (
    <body>
      <Header />
      <Sidebar />
      <Projects />
    </body>
  );
}
  
