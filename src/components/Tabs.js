import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Projects from '../components/projects/Projects';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './tab.css';

function TabPanel(props) {
  const { children } = props;

  return (
    <Box p={4}>{children}</Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node
};


export default function TabBar() {
  const [value, setValue] = React.useState(0);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={styles.tabbar}>
      
      <Tabs className={styles.tabs} indicatorColor="" value={value} onChange={handleChange} active={value}>
        <Tab className={styles.name} label="About Me" />
        <Tab className={styles.name} label="Collab Projects" />
        <Tab className={styles.name} label="Personal Projects" />
      </Tabs>
      
      <SwipeableViews className={styles.view} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel className={styles.panel} value={value} index={0}>
          {/* {Sidebar} */}{Projects}
        </TabPanel>
        <TabPanel className={styles.theTabs} value={value} index={1}>
          {Projects}
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
