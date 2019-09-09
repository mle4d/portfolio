import React from 'react';
import Project from './Project';
import Soto from '../../assets/Soto.png';
import Moddo from '../../assets/Moddo.png';
import ACB from '../../assets/ACB.png';
import meowmachine from '../../assets/meowmachine.png';
import styles from './projects.css';


export default function Projects() {

  return (
    <div className={styles.Projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        <Project name="Soto" image={Soto} description="A front end, vanilla Javascript sorting game inspired by Marie Kondo" link="https://spark-joy.github.io/" />
        <Project name="Moddo" image={Moddo} description="A front end, vanilla Javascript sorting game inspired by Marie Kondo" link="https://spark-joy.github.io/" />
        <Project name="ACL Twitter Bot" image={ACB} description="A front end, vanilla Javascript sorting game inspired by Marie Kondo" link="https://spark-joy.github.io/" />
        <Project name="Meow Machine" image={meowmachine} description="A front end, vanilla Javascript sorting game inspired by Marie Kondo" link="https://spark-joy.github.io/" />
      </div>
    </div>
  );
}




