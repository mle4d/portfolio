import React from 'react';
import Project from './Project';
import Soto from '../../assets/soto.png';
import Moddo from '../../assets/moddo.png';
import ACB from '../../assets/acb.png';
import styles from './projects.css';


export default function Projects() {

  return (
    <section className={styles.Projects}>
      <div className={styles.container}>
        <Project name="Soto" image={Soto} link="https://spark-joy.github.io/" github="https://github.com/spark-joy/spark-joy.github.io" />
        <Project name="Moddo" image={Moddo} link="https://moddo.netlify.com/" github="https://github.com/rubber-ducky-squad/Adviser" />
        <Project name="ACL Twitter Bot" image={ACB} link="https://twitter.com/AlchemyPDXBot" github="https://github.com/rainbow-robots" />
      </div>
    </section>
  );
}




