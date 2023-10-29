import Login from "./scenes/Login/Login";
import Analytics from "./scenes/Analytics";
import Data from "./scenes/Data";
import { Box, CircularProgress } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Axios from "axios";

export const AppContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("Analytics");
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      Axios.get("http://localhost:5000/api/data").then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <Router>
      <AppContext.Provider
        value={{
          data,
          setData,
          user,
          setUser,
          token,
          setToken,
          currentPage,
          setCurrentPage,
          isAuth,
          setIsLoading,
          setIsAuth,
        }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/analytics'
            element={isAuth ? <Analytics /> : <Navigate to='/' />}
          />
          <Route
            path='/data'
            element={isAuth ? <Data /> : <Navigate to='/' />}
          />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
