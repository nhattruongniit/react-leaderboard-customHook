import React from 'react';

export function useTable({ url, initialPerPage = 10 }) {
  const [dataSource, setDataSource] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialPerPage);

  React.useEffect(() => {
    fetch(`${url}?_limit=${rowsPerPage}&_page=${page}`)
      .then(response => response.json())
      .then(json => setDataSource(json))
  }, [page, rowsPerPage, url]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    dataSource,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  }
}