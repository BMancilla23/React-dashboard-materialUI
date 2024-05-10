import { DarkMode, LightMode, Menu, NotificationsNoneOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useThemeContext } from '../../theme/ThemeContextProvider';
import { SearchBox } from './SearchBox';
import { UserMenu } from './UserMenu';

interface Props {
  handleToggle: () => void;
}

export const Head: FC<Props> = ({ handleToggle }) => {

  /*  const { toggleColorMode } = useColorMode() */
  const { mode, toggleColorMode } = useThemeContext();

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(e.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} maxWidth={'xl'}>

      <Box sx={{ display: 'flex' }}>
        <Typography variant='h5'>AdminTo</Typography>
      </Box>
      <Box sx={{ display: 'flex' }} alignItems={'center'} columnGap={2}>

        <SearchBox />

        <IconButton color='info' aria-label='notifications' className='iconHead'>
          <NotificationsNoneOutlined sx={{ color: theme => theme.palette.text.primary }} />
        </IconButton>

        <UserMenu handleMenuOpen={handleMenuOpen} menuAnchorEl={menuAnchorEl} handleMenuClose={handleMenuClose} />
        <IconButton sx={{ color: theme => theme.palette.text.primary }} onClick={toggleColorMode}>
          {/* <Settings /> */}
          {
            mode === 'dark' ? <LightMode /> : <DarkMode />
          }
        </IconButton>
        <IconButton onClick={handleToggle} sx={{ display: { md: 'block', lg: 'none' } }}>
          <Menu></Menu>
        </IconButton>
      </Box>
    </Box>
  )
}
