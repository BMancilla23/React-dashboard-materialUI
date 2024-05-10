import { Container, Grid } from '@mui/material';
import { FC } from 'react';
import { ChartItem } from './ChartItem';

interface Props { }

interface ChartData {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

const donutData: ChartData = {
  series: [44, 55, 41],
  options: {
    chart: {
      type: "donut",
      // add this by typing
      foreColor: "grey",
    },
    fill: {
      colors: ["#35B8E0", "#6658DD", "#FF8ACC"],
    },
    stroke: {
      colors: ["#313844"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ["Ventas en tienda", "Descargar Ventas", "Ventas por correo"],
    legend: {
      position: "bottom",
    },
  },
}

const barData: ChartData = {
  series: [
    {
      name: "Beneficio Neto",
      data: [65, 45, 75, 35, 30, 85],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      // add this by typing
      foreColor: "grey",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        /*   endingShape: "rounded", */
      },
    },
    dataLabels: {
      /* foreColor: "#FFF", */
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    fill: {
      opacity: 1,
    },
    // remove  it tooltip
    grid: {
      show: false,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
  },
}

const lineData: ChartData = {
  series: [
    {
      name: "Ventas",
      data: [50, 60, 10, 60, 80, 30],
    },
    {
      name: "Ganancia",
      data: [0, 40, 80, 20, 40, 60],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      //add
      foreColor: "grey",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
    },
    //add it
    grid: {
      show: false,
    },
    /*  xaxis: {
       axisTicks: {
         show: false,
       },
       axisBorder: {
         show: false,
       },
       labels: {
         show: true,
       },
     }, */
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
  },
}

export const Charts: FC<Props> = () => {
  return (
    <Container maxWidth={'xl'} sx={{ marginY: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} >
          <ChartItem title={'Ventas diarias'} data={donutData} type={'donut'} />
        </Grid>
        <Grid item xs={12} md={4} >
          <ChartItem title={'Estadística'} data={barData} type={'bar'} />
        </Grid>
        <Grid item xs={12} md={4} >
          <ChartItem title={'Ingresos Totales'} data={lineData} type={'line'} />
        </Grid>
      </Grid>
    </Container>
  );
};
