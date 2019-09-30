import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Projects from '../components/projects/Projects';
import SoloProjects from '../components/projects/SoloProjects';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './tab.css';

function TabPanel(props) {
  const { children } = props;

  return (
    <Box p={4}>{children}</Box>
  );
}



export default function TabBar() {
  const [value, setValue] = useState(0);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={styles.tabbar}>
      
      <Tabs className={styles.tabs} indicatorColor="" value={value} onChange={handleChange} active={value}>
        <Tab className={styles.name} label="Collab Projects" />
        <Tab className={styles.name} label="Solo Projects" />
        <Tab className={styles.name} label="About Me" />
      </Tabs>
      
      <SwipeableViews className={styles.view} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel className={styles.panel} value={value} index={0}>
          {Projects}
        </TabPanel>
        <TabPanel className={styles.theTabs} value={value} index={1}>
          {SoloProjects}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Sidebar}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
