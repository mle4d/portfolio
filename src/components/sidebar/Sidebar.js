import React from 'react';
import styles from './sidebar.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import Resume from '../../assets/Resume.png';
import Email from '../../assets/Email.png';


const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <div className={styles.content}>
        <p className={styles.about}>I am a full stack software engineer with experience
             in the MERN stack. With a background in art & floral design, it's been exciting seeing 
             my former career translate into my new venture. I'm great with attention to creative detail 
             & viewing things from a real user point of view, but also enjoy the organization 
             & pattern of backend development.</p></div>
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
