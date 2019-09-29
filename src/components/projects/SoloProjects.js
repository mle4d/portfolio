import React from 'react';
import Project from './Project';
import meowmachine from '../../assets/meowmachine.png';
import sanrio from '../../assets/sanrio.png';
import emoji from '../../assets/emoji.png';
import styles from './projects.css';


export default function SoloProjects() {

  return (
    <section className={styles.Projects}>
      <div className={styles.container}>
        <Project name="Meow Machine" image={meowmachine} stack="React, HTML, CSS"link="https://meowmachine.netlify.com/" github="https://github.com/mle4d/MeowMachine" />
        <Project name="Sanrio API" image={sanrio} stack="Sanrio Character API. In Progress!"link="hold tight" github="it's coming" />
        <Project name="Emoji Fullstack" image={emoji} stack="Fullstack Emoji Story Tweeter. Coming Soon!"link="hold tight" github="it's coming" />
      </div>
    </section>
  );
}
