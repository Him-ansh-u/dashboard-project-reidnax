import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../App";
const Topbar = () => {
  const { setData, setToken, setUser, setIsAuth, currentPage } =
    useContext(AppContext);
  const logout = () => {
    setData(null);
    setToken(null);
    setUser(null);
    setIsAuth(false);
  };
  return (
    <Box
      width='96%'
      m='10px 20px 0px 20px '
      pb='5px'
      borderBottom='1px #949494 solid'
      display='flex'
      justifyContent='space-between'
      alignContent='center'>
      <Typography mt='10px' fontSize='20px'>
        {currentPage}
      </Typography>
      <Box>
        <TextField
          size='small'
          placeholder='Search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AiOutlineSearch />
              </InputAdornment>
            ),
          }}
          variant='outlined'
        />
        <IconButton onClick={logout} sx={{ ml: "5px" }}>
          <AiOutlineLogout />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;
