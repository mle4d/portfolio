import React from 'react';
import styles from './sidebar.css';



const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <img src="https://avatars0.githubusercontent.com/u/40907261?s=460&v=4"></img>
      <h3>About Me:</h3>
      <p>About me here yadadadada</p>
      <h3>Find Me</h3><ul>
        <li><a href="linkedin.com/mle4d">LinkedIn</a></li>
        <li><a href="github.com/mle4d">GitHub</a></li></ul>
    </div>
     
    
  );
};

export default Sidebar;
