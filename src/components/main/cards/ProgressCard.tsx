import { MoreVertOutlined, TrendingUp } from '@mui/icons-material';
import { Badge, Box, Card, CardContent, LinearProgress, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  title: string;
  value: number;
  progressValue: number;
  color: "default" | "success" | "warning" | "primary" | "secondary" | "error" | "info";
}

export const ProgressCard: FC<Props> = ({ title, value, progressValue, color }) => {
  return (
    <Card sx={{ backgroundColor: theme => theme.palette.primary.main, height: '100%' }}>
      <CardContent >
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant='h6'>{title}</Typography>
          <MoreVertOutlined />
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Badge sx={{ marginLeft: 4, color: '#FFFFFF' }} badgeContent={<Box sx={{ color: '#FFFFFF' }} display={'flex'}><Typography>{progressValue}%</Typography><TrendingUp /></Box>} color={`${color}`} />
          <Box>
            <Typography variant='h4' fontWeight={'semibold'}>{value}</Typography>
            <Typography>Ingresos hoy</Typography>
          </Box>
        </Box>
        <Box marginTop={5}>
          <LinearProgress color='success' valueBuffer={100} value={70} variant='determinate'>

          </LinearProgress>
        </Box>
      </CardContent>
    </Card>
  );
};