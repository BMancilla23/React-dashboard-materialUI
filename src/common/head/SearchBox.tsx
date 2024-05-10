import { SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, InputBase } from '@mui/material';
import { FC } from 'react';

interface Props { }

export const SearchBox: FC<Props> = () => {
  return (
    <Box sx={{ backgroundColor: theme => theme.palette.secondary.main, display: { xs: 'none', md: 'none', lg: 'block' } }} borderRadius={10} paddingX={2}>
      <InputBase color='info' placeholder='Search...' />
      <IconButton aria-label='search' className='iconHead'>
        <SearchOutlined />
      </IconButton>
    </Box>
  );
};
