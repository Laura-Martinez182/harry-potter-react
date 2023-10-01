import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DetailDataContainer({object}) {   

  const renderRows = () => {
    const headers = Object.keys(object);
    
    const rowsComponent = headers.map((header) => {

      //Prevents error when a component has an object as child
      if (typeof object[header] === 'object' && !(object[header] instanceof Array)){
        return (<></>)
      }

      return(
      <TableRow>
        <TableCell>{header}</TableCell>
        <TableCell>{object[header]}</TableCell>
      </TableRow>)
    })

    return(rowsComponent)
  }

  return (
    <TableContainer component={Paper} sx={{width:"98%", height:"100%", marginLeft:"1%", marginRight:"1%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}