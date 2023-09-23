import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiHomeAlt, BiBookAlt, BiMessage } from 'react-icons/bi';
import { BsClipboard, BsPerson } from 'react-icons/bs';
import { RiGroupLine } from 'react-icons/ri';
import { FiSettings, FiMoon } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

const drawerWidth = 260;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const menuItems = [
  {
    text: 'Home',
    icon: (
      <BiHomeAlt
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'home',
  },
  {
    text: 'Classes',
    icon: (
      <BsClipboard
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'classes',
  },
  {
    text: 'Course',
    icon: (
      <BiBookAlt
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'course',
  },
  {
    text: 'Chat',
    icon: (
      <BiMessage
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
  },
  {
    text: 'Students',
    icon: (
      <RiGroupLine
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
  },
  {
    text: 'Settings',
    icon: (
      <FiSettings
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
  },
];

function Sidebar({ onSelectComponent }) {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (key) => {
    setSelectedItem(key);
    onSelectComponent(key);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: 'transparent',
        }}>
        <Toolbar style={{ backgroundColor: 'white' }}>
          <Search
            style={{
              borderColor: 'grey',
              border: 'solid 1px rgba(114, 113, 113, 0.15) ',
            }}>
            <SearchIconWrapper style={{ borderColor: 'grey' }}>
              <SearchIcon style={{ color: 'grey' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'grey', borderColor: 'grey' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <FiMoon
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
            <IoMdNotificationsOutline
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
            <BsPerson
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar>
          <Typography variant="h6" style={{ marginBottom: '110px' }}>
            Logo
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => handleItemClick(index)} // Handle item click
              style={{
                color: selectedItem === index ? 'white' : 'black',
                backgroundColor:
                  selectedItem === index ? '#463DFF' : 'transparent',
                width: '75%',
                marginInline: 'auto',
                marginBottom: '26px',
              }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: { fontWeight: 'bold', fontSize: '20px' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}


export default Sidebar;
