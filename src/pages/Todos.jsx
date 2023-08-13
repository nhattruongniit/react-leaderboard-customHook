import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

// components
import SimpleTable from '../components/SimpleTable';

// hooks
import { useTable } from '../hooks/useTable';

const tableHeader = [
  { label: 'Id' },
  { label: 'Title' },
  { label: 'Completed' },
]

export default function Todos() {
  const { dataSource, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useTable({
    url: 'https://jsonplaceholder.typicode.com/posts',
    initialPerPage: 20
  });

  return (
    <>
       <SimpleTable 
        tableHeader={tableHeader}
        dataSource={dataSource}
        renderRow={(item) => {
          return (
            <TableRow
              key={item.id}
            >
              <TableCell component="th" scope="row">
               {item.id}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.completed ? 'Completed' : 'New'}</TableCell>
            </TableRow>
          )
        }}
      />

      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
