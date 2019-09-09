import React from 'react';
import PropTypes from 'prop-types';
import styles from './projects.css';



const Project = ({ name, image, description, link }) => {

  return (

    <div className={styles.Project}>
      <h3 className={styles.name}>{name}
        <img className={styles.ProjectImage}src={image} alt=""/>
        <p>{description}</p>
        <a href={link}>{link}</a>
      </h3>
    </div>

  );

};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

export default Project;
