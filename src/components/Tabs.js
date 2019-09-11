import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Projects from '../components/projects/Projects';
import Sidebar from '../components/sidebar/Sidebar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box p={4}>{children}</Box>
    
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      <AppBar>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About Me" />
          <Tab label="Collab Projects" />
          <Tab label="Personal Projects" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          {Sidebar}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Projects}
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
        Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
