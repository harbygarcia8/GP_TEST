"use client";
import { People } from "@/data/people";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({}) => {
  const pageSize = 5;
  const columns = [
	{
	  field: "name",
	  headerName: "Name",
	  flex: 1,
	  minWidth: 150,
	  renderCell: (params: GridRenderCellParams) => params.value,
	},
  ];

  return (
    <div>
      <DataGrid
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={People}
      />
    </div>
  );
};

export default Home;
