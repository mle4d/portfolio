import React from 'react';
import PropTypes from 'prop-types';
import styles from './projects.css';



const Project = ({ name, image, description, link, github }) => {

  return (
    <div className={styles.project}>
      <div className={styles.projectInner}>
        <div className={styles.projectFront}>
          <img className={styles.image} src={image} />
        </div>
        <div className={styles.projectBack}>
          <h1>{name}</h1>
          <p>{github} & {link}</p>
          <p>{description}</p>
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
  github: PropTypes.string
};

export default Project;
