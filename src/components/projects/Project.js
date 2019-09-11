import React from 'react';
import PropTypes from 'prop-types';
import styles from './projects.css';



const Project = ({ name, image, description, link, github }) => {

  return (

    <div className={styles.Project}>
      <h3 className={styles.name}>{name}
        <img className={styles.ProjectImage}src={image} alt=""/>
        <p className={styles.description}><a className={styles.projectLinks} href={link}>Site</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a className={styles.projectLinks} href={github}>Repo</a></p>
        <section>{description}</section>
      
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
