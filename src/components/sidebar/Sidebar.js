import React from 'react';
import styles from './sidebar.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import Resume from '../../assets/Resume.png';
import Email from '../../assets/Email.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import mongo from '../../assets/mongo.png';
import express from '../../assets/express.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import node from '../../assets/node.png';

const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <div className={styles.content}>
        <p className={styles.about}>I'm a software engineer with experience
         in the MERN stack and a strong background in art & design. 
         I'm seeking a position that will provide me opportunities for 
         personal and professional growth through challenging work and 
         mentorship. I'm especially interested in roles that leverage my 
         experience with usability and interface design while offering 
         experience working farther down the stack.</p></div>
      <div className={styles.stack}>
        <div className={styles.stack1}>
          <img src={html}></img>
          <img src={react}></img>
        </div>
        <div className={styles.stack2}>
          <img src={css}></img>
          <img src={javascript}></img>
        </div>
        <div className={styles.stack3}>
          <img src={mongo}></img>
          <img src={node}></img>
        </div>
        <div className={styles.stack4}>
          <img src={express}></img>
          <img src={redux}></img>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/mle4d/"><img src={linkedin}></img></a>
          <a href="https://github.com/mle4d"><img src={github}></img></a>
          <a href="https://twitter.com/cybruja"><img src={twitter}></img></a>
          <a href="mailto: mle4d@me.com"><img src={Email}></img></a>
          <a href="https://drive.google.com/file/d/1GBcmtAeS0w4jskm_QaAB0sAyYmvwbpoQ/view?usp=sharing"><img src={Resume}></img></a></div>
      </div>
    </div>
     
    
  );
};

export default Sidebar;
