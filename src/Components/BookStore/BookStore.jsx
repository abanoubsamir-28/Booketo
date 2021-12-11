import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Reviews from '../bookProfile/Reviews';
import Orders from './Orders';
import UploadBookForm from './../Forms/UploadBook/UploadBookForm'
import StoreBooks from './StoreBooks';
// import logo from './../../assets/navbarFooter/svg (1).svg'
import './bookStore.css'
import { Link } from 'react-router-dom';

function BookStore(props) {

  // eslint-disable-next-line

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
  // eslint-disable-next-line
  const [logged, setlogged] = useState(true);
  function makefalse() {
    setlogged(false)
  }
  return (
    <Box sx={{ width: '80%', margin: 'auto' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{ bgcolor: '#f1f1f1', padding: '10px', color: 'var(--dark-brown)' }} value={value} onChange={handleChange} aria-label="basic tabs example">
          {/* <img src={logo} alt="logo" className="me-auto"/> */}
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Books" {...a11yProps(2)} />
          <Tab label="Upload Book" {...a11yProps(3)} />
          <Link to="/login" className="ms-auto btn btn-borde rounded-pill mt-2" onClick={makefalse}>Log Out</Link>
        </Tabs>
      </Box>
      <BookStore value={value} index={0}>
        <h2 className="text-center mb-3 fw-bold" style={{ color: 'var(--hot-pink)', fontFamily: 'var(--bebas-font)' }}>Orders</h2>
        <Orders />
      </BookStore>
      <BookStore value={value} index={1}>
        <h2 className="text-center mb-3 fw-bold" style={{ color: 'var(--hot-pink)', fontFamily: 'var(--bebas-font)' }}> Reviews</h2>
        <Reviews />
      </BookStore>
      <BookStore value={value} index={2}>
        <h2 className="text-center mb-3 fw-bold" style={{ color: 'var(--hot-pink)', fontFamily: 'var(--bebas-font)' }}>Books</h2>
        <StoreBooks />
      </BookStore>
      <BookStore value={value} index={3}>
        <h2 className="text-center mb-3 fw-bold" style={{ fontFamily: 'var(--nunito-font)' }}>Upload Books</h2>
        <UploadBookForm />
      </BookStore>

    </Box>
  );
}





