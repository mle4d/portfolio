import React from 'react';
import styles from './sidebar.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';


const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <div className={styles.content}>
        <div className={styles.picHead}>
          <img className={styles.myPic} src="https://avatars0.githubusercontent.com/u/40907261?s=460&v=4"></img>
          <div className={styles.aboutMe}><h3>About Me:</h3>
            <p className={styles.about}>I am a full stack software engineer with experience
             in the MERN stack. With a background in art & floral design, it's been exciting seeing 
             my former career translate into my new venture. I'm great with attention to creative detail 
             & viewing things from a real user point of view, but also enjoy the organization 
             & pattern of backend development.</p></div></div>
        <div className={styles.connect}>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/mle4d/"><img src={linkedin}></img></a>
            <a href="https://github.com/mle4d"><img src={github}></img></a>
            <a href="https://twitter.com/cybruja"><img src={twitter}></img></a></div>
        </div>
      </div>
    </div>
     
    
  );
};

export default Sidebar;
