import LogInForm from "./LoginForm";
import { Box, Typography } from "@mui/material";
const Login = () => {
  return (
    <>
      <Box
        width='100%'
        height='50px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        color='#fff'
        bgcolor='blue'>
        <Typography fontSize='20px'>Reidnax</Typography>
      </Box>
      <LogInForm />
    </>
  );
};

export default Login;
