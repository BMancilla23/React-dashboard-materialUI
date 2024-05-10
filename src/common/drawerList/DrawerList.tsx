import { Box, Drawer, Link, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';

interface MenuItems {
  path: string;
  icon: JSX.Element;
  name: string;
}

interface Props {
  openDrawer: boolean;
  handleToggle: () => void;
  navItems: MenuItems[];
}


export const DrawerList: FC<Props> = ({ openDrawer, handleToggle, navItems }) => {
  return (
    <>
      <Drawer open={openDrawer} onClose={handleToggle} anchor='left'>
        <Box sx={{ width: 250, height: '100vh', backgroundColor: theme => theme.palette.primary.main }}><List>
          {
            navItems.map(({ name, icon, path }, index) => (
              <ListItemButton sx={{ '&:hover': { color: theme => theme.palette.info.main } }} key={index} >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {icon}
                </ListItemIcon>
                <ListItemText>
                  <Link color='inherit' underline='none' href={path}>{name}</Link>
                </ListItemText>
              </ListItemButton>
            ))
          }
        </List></Box>
      </Drawer>

    </>
  );
};