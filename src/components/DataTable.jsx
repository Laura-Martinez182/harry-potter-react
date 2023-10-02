import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns, rowClicked }) {
  return (
    <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: "#ae0001"
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 20 },
        },
      }}
      pageSizeOptions={[5, 10, 15, 20]}
      onRowClick={rowClicked}
    />
  );
}
