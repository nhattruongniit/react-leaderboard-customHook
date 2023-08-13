/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

      
export default function SimpleTable({ tableHeader = [], dataSource, renderRow }) {
  console.log('SimpleTable: ', dataSource)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((header, index) => (
                <TableCell key={index}>{header.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {dataSource && dataSource.length > 0 && dataSource.map(renderRow)} */}
            {dataSource && dataSource.length > 0 && dataSource.map(item => renderRow(item))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
