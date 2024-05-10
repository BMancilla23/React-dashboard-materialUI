import { MoreVertOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { FC } from 'react';
import { TableRowData } from '../../../interfaces/tableData.type';

interface Props { }

const tableColumns = ['ID', 'Nombre del proyecto', 'Fecha de inicio', 'Fecha de vencimiento', 'Estado', 'Asignar'];

const rows: TableRowData[] = [
  { id: 1, ProjectName: "Adminto Admin v1", StartDate: "01/01/2017", DueDate: "26/04/2017", Status: "Released", Assign: "Coderthemes" },
  { id: 2, ProjectName: "Adminto Admin v1.1", StartDate: "01/01/2017", DueDate: "26/04/2017", Status: "Released", Assign: "Adminto admin" },
  { id: 3, ProjectName: "Adminto Admin v1.1", StartDate: "01/01/2017", DueDate: "26/04/2017", Status: "Pending", Assign: "Coderthemes" },
  { id: 4, ProjectName: "Adminto Frontend v1.1", StartDate: "01/01/2017", DueDate: "26/04/2017", Status: "Assign", Assign: "Adminto admin" },
  { id: 5, ProjectName: "Adminto Admin v1.3", StartDate: "01/01/2017", DueDate: "26/04/2017", Status: "Assign", Assign: "Coderthemes" }
];

export const RecentProjectsCard: FC<Props> = () => {
  return (
    <Card sx={{ backgroundColor: theme => theme.palette.primary.main, height: '100%' }}>
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant='h6'>Proyectos Recientes</Typography>
          <MoreVertOutlined />
        </Stack>
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {tableColumns.map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>{row.id}</TableCell>
                    <TableCell>{row.ProjectName}</TableCell>
                    <TableCell>{row.StartDate}</TableCell>
                    <TableCell>{row.DueDate}</TableCell>
                    <TableCell className='status'>{row.Status}</TableCell>
                    <TableCell>{row.Assign}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};