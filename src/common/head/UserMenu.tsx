import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  menuAnchorEl: null | HTMLElement;
  handleMenuClose: () => void;
}

export const UserMenu: FC<Props> = ({ handleMenuOpen, menuAnchorEl, handleMenuClose }) => {
  return (
    <Box display={'flex'} columnGap={1} alignItems={'center'}>
      <Avatar src="https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?cs=srgb&dl=pexels-edgar-serrano-1964970.jpg&fm=jpg" className='head__profile-image' alt="" />
      <Typography>Adev</Typography>
      <IconButton
        color='info'
        disableRipple
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenuOpen}
        sx={{
          padding: 0,
          '&:hover': {
            background: 'transparent'
          }
        }}
      >
        <KeyboardArrowDownOutlined sx={{ color: theme => theme.palette.text.primary }} />
      </IconButton>
      <Menu id='menu-appbar' anchorEl={menuAnchorEl} anchorOrigin={
        {
          vertical: "top",
          horizontal: 'right'
        }

      } keepMounted transformOrigin={{
        vertical: "top",
        horizontal: 'right'
      }} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose} >Profile</MenuItem>
        <MenuItem onClick={handleMenuClose} >My account</MenuItem>
        <MenuItem onClick={handleMenuClose} >Logout</MenuItem>
      </Menu>
    </Box>
  );
};