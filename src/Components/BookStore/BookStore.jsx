import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Reviews from '../bookProfile/Reviews';
import Orders from './Orders';
import StoreBooks from './StoreBooks';
import './bookStore.css'

function BookStore(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
BookStore.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '80%', margin:'auto' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{ bgcolor: '#f1f1f1' }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Books" {...a11yProps(2)} />

        </Tabs>
      </Box>
      <BookStore value={value} index={0}>
        <h2 className="text-center" style={{color:'var(--hot-pink)',fontFamily:'var(--bebas-font)'}}>My Orders</h2>
        <Orders />
      </BookStore>
      <BookStore value={value} index={1}>
        <h2 className="text-center h1" style={{color:'var(--hot-pink)',fontFamily:'var(--bebas-font)'}}> Reviews</h2>
        <Reviews />
      </BookStore>
      <BookStore value={value} index={2}>
        <h2 className="text-center" style={{color:'var(--hot-pink)',fontFamily:'var(--bebas-font)'}}>My Books</h2>
        <StoreBooks />
      </BookStore>
    
    </Box>
  );
}





