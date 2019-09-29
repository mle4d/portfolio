import React from 'react';
import Project from './Project';
import meowmachine from '../../assets/meowmachine.png';
import styles from './projects.css';


export default function SoloProjects() {

  return (
    <section className={styles.Projects}>
      <div className={styles.container}>
        <Project name="Meow Machine" image={meowmachine} link="https://meowmachine.netlify.com/" github="https://github.com/mle4d/MeowMachine" />
      </div>
    </section>
  );
}
