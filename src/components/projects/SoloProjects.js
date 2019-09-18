import React from 'react';
import Project from './Project';
import meowmachine from '../../assets/meowmachine.png';
import styles from './projects.css';


export default function SoloProjects() {

  return (
    <section className={styles.Projects}>
      <div className={styles.container}>
        <Project name="Meow Machine" image={meowmachine} description="Solo Project. Front End React build. A fun and cute build made when I was starting to learn the magic of React!" link="https://meowmachine.netlify.com/" github="https://github.com/mle4d/MeowMachine" />
      </div>
    </section>
  );
}
