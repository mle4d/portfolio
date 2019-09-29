import React from 'react';
import PropTypes from 'prop-types';
import styles from './projects.css';



const Project = ({ image, link, github, stack }) => {

  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <div className={styles.imgContainer}><img className={styles.image} src={image} />
          <div className={styles.info}>
            <div className={styles.infobox}>
              <h2>Tech Stack:</h2>
              <p className={styles.TS}>{stack}</p>
              <a href={github}>Repo</a>&nbsp;&nbsp;
              <a href={link}>Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  stack: PropTypes.string
};

export default Project;
