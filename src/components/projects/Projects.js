import React from 'react';
import Project from './Project';
import Soto from '../../assets/soto.png';
import Moddo from '../../assets/moddo.png';
import ACB from '../../assets/acb.png';
import happytrees from '../../assets/happytrees.png';
import styles from './projects.css';


export default function Projects() {

  return (
    <section className={styles.Projects}>
      <div className={styles.container}>
        <Project name="Soto" image={Soto} stack="Vanilla JS,  HTML, CSS" link="https://spark-joy.github.io/" github="https://github.com/spark-joy/spark-joy.github.io" />
        <Project name="Moddo" image={Moddo} stack="Vanilla JS, firebase, HTML, CSS" link="https://moddo.netlify.com/" github="https://github.com/rubber-ducky-squad/Adviser" />
        <Project name="ACL Twitter Bot" image={ACB} stack="MongoDB, Express, NodeJS, Neotrellis, Raspberry Pi" link="https://twitter.com/AlchemyPDXBot" github="https://github.com/rainbow-robots" />
        <Project name="Happy Trees" image={happytrees} stack=" MongoDB, Express, React/Redux, NodeJS, P5, Bootstrap, Socket.io, HTML, CSS" link="https://happy-trees.netlify.com" github="https://github.com/happy-trees" />
      </div>
    </section>
  );
}




