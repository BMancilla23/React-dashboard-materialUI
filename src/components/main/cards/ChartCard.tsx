import { MoreVertOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartData {
  series: number[];
  options: ApexCharts.ApexOptions
}

interface Props {
  title: string;
  chartData: ChartData;
  value: number;
  subTitle: string;
}

export const ChartCard: FC<Props> = ({ title, chartData, value, subTitle }) => {
  return (
    <Card sx={{ backgroundColor: theme => theme.palette.primary.main }}>
      <CardContent>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h6'>{title}</Typography>
          <MoreVertOutlined />
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <ReactApexChart options={chartData.options} series={chartData.series} type='radialBar' height={150} />
          </Box>
          <Box>
            <Typography variant='h4'>{value}</Typography>
            <Typography>{subTitle}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};