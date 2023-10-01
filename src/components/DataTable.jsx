import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({rows,columns}) {
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5,10,15,20]}
      />    
  );
}