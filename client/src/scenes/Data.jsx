import { Box } from "@mui/material";
import SidebarComponent from "../components/SidebarComponent";
import DataTable from "./DataTable";
import Topbar from "../components/Topbar";
const Data = () => {
  return (
    <Box display='flex'>
      <SidebarComponent />
      <Box width='100%'>
        <Topbar />
        <DataTable />
      </Box>
    </Box>
  );
};

export default Data;
