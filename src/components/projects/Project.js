import React from 'react';
import PropTypes from 'prop-types';
import styles from './projects.css';



const Project = ({ name, image, description, link, github }) => {

  return (

    <div className={styles.Project}>
      <h3 className={styles.name}>{name}
        <img className={styles.ProjectImage}src={image} alt=""/>
        <a className={styles.projectLinks} href={link}>Site</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a className={styles.projectLinks} href={github}>Repo</a>
        <p className={styles.description}>{description}</p>
      </h3>
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
