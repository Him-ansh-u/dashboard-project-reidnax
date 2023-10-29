import { useState } from "react";
import { useContext } from "react";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineMenu, AiFillDatabase } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const SidebarComponent = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isMobileCollapsed, setIsMobileCollapsed] = useState(true);

  return (
    <Box height='100vh'>
      <Box height='100%'>
        <Sidebar position='fixed' collapsed={isCollapsed}>
          <Menu iconShape='square'>
            <Box
              height='100vh'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'>
              <Box>
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <AiOutlineMenu /> : undefined}
                  style={{
                    margin: "5px 0 5px 0",
                  }}>
                  {!isCollapsed && (
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      ml='5px'>
                      <BiSolidDashboard />
                      <Typography>Dashboard</Typography>
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <AiOutlineMenu />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
                <Box paddingLeft={isCollapsed ? undefined : "0%"}>
                  <Item
                    title='Analytics'
                    to='/analytics'
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    icon={<SiSimpleanalytics />}
                  />
                  <Item
                    title='Data'
                    to='/data'
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    icon={<AiFillDatabase />}
                  />
                </Box>
              </Box>
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </Box>
  );
};

export default SidebarComponent;

const Item = ({ title, to, icon, currentPage, setCurrentPage }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={currentPage === title}
        onClick={() => setCurrentPage(title)}
        style={{
          backgroundColor: currentPage === title ? "blue" : "transparent",
          color: currentPage === title ? "white" : "#333",
        }}
        icon={icon}>
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};
