
import { AppBar, Container } from '@mui/material';
import { FC, useState } from 'react';
import { Head } from '../head/Head';
import { MenuItemList } from './MenuItemList';
import { DashboardOutlined, GridViewOutlined, InvertColorsOutlined, StyleOutlined, SupportOutlined } from '@mui/icons-material';
import { DrawerList } from '../drawerList/DrawerList';

interface Props {

}

const navItems = [
  {
    path: '/',
    icon: <DashboardOutlined className='navIcon active' />,
    name: 'Dasboard'
  },
  {
    path: '/',
    icon: <InvertColorsOutlined className='navIcon' />,
    name: 'UI Elements'
  },
  {
    path: '/',
    icon: <GridViewOutlined className='navIcon' />,
    name: 'Apps'
  },
  {
    path: '/',
    icon: <SupportOutlined className='navIcon' />,
    name: 'Components'
  },
  {
    path: '/',
    icon: <StyleOutlined className='navIcon' />,
    name: 'Pages'
  }

]

export const Header: FC<Props> = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleToggle = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <AppBar sx={{ backgroundColor: theme => theme.palette.primary.main, boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.08)' }} position='sticky'>
      <Container sx={{ paddingY: '18px' }} maxWidth={'xl'}>
        <Head handleToggle={handleToggle} />
        <MenuItemList navItems={navItems} />
        <DrawerList openDrawer={openDrawer} handleToggle={handleToggle} navItems={navItems} />
      </Container>
    </AppBar >
  )
};
