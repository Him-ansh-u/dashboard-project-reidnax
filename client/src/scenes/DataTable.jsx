import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
const DataTable = () => {
  const { data } = useContext(AppContext);
  return (
    <Table sx={{ p: "10px 20px 10px 20px" }}>
      <TableHead>
        <TableRow>
          <TableCell>Months in 2022</TableCell>
          <TableCell align='right'>Websites Revenue</TableCell>
          <TableCell align='right'>Tools Revenue</TableCell>
          <TableCell align='right'>BugFix Revenue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, key) => {
          return <TableComponent item={item} key={key} />;
        })}
      </TableBody>
    </Table>
  );
};
export default DataTable;

const TableComponent = (props) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {props.item.month}
      </TableCell>

      <TableCell align='right'>{props.item.website}</TableCell>
      <TableCell align='right'>{props.item.tools}</TableCell>
      <TableCell align='right'>{props.item.bugFixes}</TableCell>
    </TableRow>
  );
};
