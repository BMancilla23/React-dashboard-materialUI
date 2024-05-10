import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { data } from '../../../data/users';

interface Props { }

export const Users: FC<Props> = () => {
  return (
    <Container maxWidth={'xl'} sx={{ marginBottom: 8 }}>
      <Grid container spacing={4}>
        {
          data.map(({ title, email, user, cover }, index) => (

            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ backgroundColor: theme => theme.palette.primary.main }}>
                <CardContent>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} columnGap={2}>
                    <Box maxWidth={'30%'} width={70} height={70}>
                      <Avatar sx={{ width: '100%', height: '100%' }} src={cover}></Avatar>
                    </Box>
                    <Box width={'70%'}>
                      <Typography variant='h6' component={'h3'}>
                        {title}
                      </Typography>
                      <Typography marginBottom={2} component={'p'} fontWeight={'lighter'}>
                        {email}
                      </Typography>
                      <Typography component={'span'}>
                        {user}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};