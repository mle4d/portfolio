import React from 'react';
import styles from './sidebar.css';



const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <img src="https://avatars0.githubusercontent.com/u/40907261?s=460&v=4"></img>
      <h3>About Me:</h3>
      <p className={styles.about}>About me here yadadadada</p>
      <h3>Find Me</h3><ul className={styles.links}>
        <a href="https://www.linkedin.com/in/mle4d/"><img src="https://image.flaticon.com/icons/png/512/61/61109.png"></img></a>
        <a href="https://github.com/mle4d"><img src="https://media.licdn.com/dms/image/C560BAQGO4Mxhy8KAgQ/company-logo_100_100/0?e=1576108800&v=beta&t=SeF1kdrezic2ehPERTLwbe8AlnLpF79B5rPretkAPYo"></img></a></ul>
    </div>
     
    
  );
};

export default Sidebar;
