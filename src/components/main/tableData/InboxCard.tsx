import { MoreVertOutlined } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { data } from '../../../data/users';

interface Props { }

export const InboxCard: FC<Props> = () => {
  return (
    <Card sx={{ backgroundColor: theme => theme.palette.primary.main }}>
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant='h6'>Bandeja de entrada</Typography>
          <MoreVertOutlined />
        </Stack>
        <List>
          {data.map(({ title, email, time, cover }, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ justifyContent: 'space-between' }}>
                <Avatar src={cover}></Avatar>
                <Stack direction={'column'}>
                  <ListItemText>{title}</ListItemText>
                  <ListItemText>{email}</ListItemText>
                </Stack>
                <Box>
                  <ListItemText>{time}</ListItemText>
                </Box>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};