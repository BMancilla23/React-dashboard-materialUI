import { Container, Grid } from '@mui/material';
import { FC } from 'react';
import { ChartCard } from './ChartCard';
import { ProgressCard } from './ProgressCard';

interface Props { }

interface ChartData {
  series: number[];
  options: ApexCharts.ApexOptions;
}

export const Cards: FC<Props> = () => {

  const chartData: ChartData = {
    series: [58],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%"
          },
          dataLabels: {
            value: {
              show: false
            }
          }
        }
      },
      labels: ["58"],
      colors: ["#ff5b5b"]
    }
  }

  const chartData1: ChartData = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["80"],
      colors: ["#E9B251"],
    },
  }

  return (
    <Container sx={{ mt: 4 }} maxWidth={'xl'}>
      <Grid container spacing={4} >
        <Grid item xs={12} sm={6} md={3} >
          <ChartCard title={'Ingresos Totales'} chartData={chartData} value={256} subTitle={'Ingresos hoy'} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard title={'Análisis de ventas'} value={8451} progressValue={32} color='success' />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <ChartCard title={'Ingresos Totales'} chartData={chartData1} value={256} subTitle={'Ingresos hoy'} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard title={'Análisis de ventas'} value={8451} progressValue={32} color='warning' />
        </Grid>
      </Grid>
    </Container>
  );
};
