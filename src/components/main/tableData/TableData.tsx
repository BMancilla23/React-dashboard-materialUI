import { Container, Grid } from '@mui/material';
import { FC } from 'react';
import { InboxCard } from './InboxCard';
import { RecentProjectsCard } from './RecentProjectsCard';

interface Props { }

export const TableData: FC<Props> = () => {
  return (
    <Container maxWidth={'xl'} sx={{ marginBottom: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} >
          <InboxCard />
        </Grid>
        <Grid item xs={12} sm={12} md={8} >
          <RecentProjectsCard />
        </Grid>
      </Grid>
    </Container>
  );
};
