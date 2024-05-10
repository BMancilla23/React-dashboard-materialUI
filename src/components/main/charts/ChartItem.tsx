import { MoreVertOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartData {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

interface Props {
  title: string;
  data: ChartData;
  type: "area" | "line" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
}

export const ChartItem: FC<Props> = ({ title, data, type }) => {
  return (
    <Card sx={{ height: '100%', backgroundColor: theme => theme.palette.primary.main }}>
      <CardContent>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h6'>{title}</Typography>
          <MoreVertOutlined />
        </Box>
        <Box><ReactApexChart options={data.options} series={data.series} type={type} height={350}></ReactApexChart></Box>
      </CardContent>
    </Card>
  );
};
