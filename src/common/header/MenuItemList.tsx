import { Box, MenuItem, Toolbar } from '@mui/material';
import { FC } from 'react';

interface MenuItems {
  path: string;
  icon: JSX.Element;
  name: string;
}

interface Props {
  navItems: MenuItems[];
}


export const MenuItemList: FC<Props> = ({ navItems }) => {
  return (
    <Toolbar sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }} >
      {
        navItems.map(({ path, icon, name }, index) => (

          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} key={index}>
            <MenuItem disableRipple href={path} sx={{
              textDecoration: 'none', display: 'flex', columnGap: 1, padding: 0, marginRight: 4, '&:hover': {
                color: '#5F7AA5',
                backgroundColor: 'transparent'
              }
            }}>
              {icon}
              {name}
            </MenuItem>
          </Box>
        ))
      }

    </Toolbar>
  );
};