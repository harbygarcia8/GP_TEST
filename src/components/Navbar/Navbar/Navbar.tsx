
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = ({}) => {
	return (
		<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Application
          </Typography>
        </Toolbar>
      </AppBar>
	);
};

export default Navbar;
