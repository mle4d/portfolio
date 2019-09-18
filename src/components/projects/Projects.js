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
        <Project name="Soto" image={Soto} description="Collab Project.Vanilla JS Front End. Sorting game inspired by Marie Kondo and the minimialist lifestyle." link="https://spark-joy.github.io/" github="https://github.com/spark-joy/spark-joy.github.io" />
        <Project name="Moddo" image={Moddo} description="Collab Project. Vanilla JS Front End build utilizing two APIs and using Firebase. An app designed for daily morning use. Users get a randomly generated paired photo and quote from two different APIs for a daily motto, can also make lists of all sorts and set alerts on list-items." link="https://moddo.netlify.com/" github="https://github.com/rubber-ducky-squad/Adviser" />
        <Project name="ACL Twitter Bot" image={ACB} description="Collab Project.  NodeJS, Express and Mongo DB Back End build. A twitter-bot built for the use of a tech community. The bot can retweet questions, reply when asked for a joke, retweet memory submits AND has a neotrellis/raspberry pi emoji keypad hooked up for emoji stories to be tweeted from." link="https://twitter.com/AlchemyPDXBot" github="https://github.com/rainbow-robots" />
      </div>
    </section>
  );
}




