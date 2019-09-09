import React from 'react';
import Project from './Project';
import Soto from '../../assets/Soto.png';
import Moddo from '../../assets/Moddo.png';
import ACB from '../../assets/ACB.png';
import meowmachine from '../../assets/meowmachine.png';
import styles from './projects.css';


export default function Projects() {

  return (
    <section className={styles.Projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.container}>
        <Project name="Soto" image={Soto} description="Collab Project.Vanilla JS Front End. Sorting game inspired by Marie Kondo and the minimialist lifestyle." link="https://spark-joy.github.io/" github="https://github.com/spark-joy/spark-joy.github.io" />
        <Project name="Moddo" image={Moddo} description="Collab Project. Vanilla JS Front End build utilizing two APIs and using Firebase. An app designed for daily morning use. Users get a randomly generated paired photo and quote from two different APIs for a daily motto, can also make lists of all sorts and set alerts on list-items." link="https://moddo.netlify.com/" github="https://github.com/rubber-ducky-squad/Adviser" />
        <Project name="ACL Twitter Bot" image={ACB} description="Collab Project.  NodeJS, Express and Mongo DB Back End build. A twitter-bot built for the use of a tech community. The bot can retweet questions, reply when asked for a joke, retweet memory submits AND has a neotrellis/raspberry pi emoji keypad hooked up for emoji stories to be tweeted from." link="https://twitter.com/AlchemyPDXBot" github="https://github.com/rainbow-robots" />
        <Project name="Meow Machine" image={meowmachine} description="Solo Project. Front End React build. A fun and cute build made when I was starting to learn the magic of React!" link="https://meowmachine.netlify.com/" github="https://github.com/mle4d/MeowMachine" />
        <Project name="ACL Twitter Bot" image={ACB} description="Collab Project.  NodeJS, Express and Mongo DB Back End build. A twitter-bot built for the use of a tech community. The bot can retweet questions, reply when asked for a joke, retweet memory submits AND has a neotrellis/raspberry pi emoji keypad hooked up for emoji stories to be tweeted from." link="https://twitter.com/AlchemyPDXBot" github="https://github.com/rainbow-robots" />
      </div>
    </section>
  );
}




