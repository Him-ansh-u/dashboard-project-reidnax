import SidebarComponent from "../components/SidebarComponent";
import Topbar from "../components/Topbar";
import { Box } from "@mui/material";
import BarComponent from "./barchart";
const Analytics = () => {
  return (
    <Box display='flex'>
      <SidebarComponent />
      <Box width='100%'>
        <Topbar />
        <BarComponent />
      </Box>
    </Box>
  );
};

export default Analytics;
