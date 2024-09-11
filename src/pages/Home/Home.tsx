"use client";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({ }) => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;

  const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id)
  const filterPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id)
  const handleChange = (person: Person) => {
    setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person]);
  }

  
  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => <>{
        <Checkbox 
          size="small"
          onChange={() => handleChange(params.row.id)}
          checked={findPerson(params.row)}/>
      }</>
        ,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => params.value,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => params.value,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => params.value,
    },
    {
      field: "levelOfHappiness",
      headerName: "Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => params.value,
    },
  ];

  return (

    <DataGrid
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={5}
      rowsPerPageOptions={[pageSize]}
      rows={People}
      getRowId={(row) => row.id}
    />

  );
};

export default Home;
