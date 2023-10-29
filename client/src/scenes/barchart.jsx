import { Box, Typography, NativeSelect, FormControl } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { AppContext } from "../App";

const BarComponent = () => {
  const { data, setData, setIsLoading } = useContext(AppContext);

  const [selectedCompany, setSelectedCompany] = useState("all");
  const changeBarChart = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <Box m='10px 20px 0px 20px ' pb='5px' bgcolor=''>
      <Box
        display='flex'
        justifyContent='space-between'
        borderBottom='1px solid #333'>
        <Typography fontSize='20px'>Yearly Average sales by company</Typography>
        <FormControl>
          <NativeSelect
            defaultValue='all'
            onChange={changeBarChart}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}>
            <option value='all'>All</option>
            <option value='website'>Websites</option>
            <option value='tools'>Tools</option>
            <option value='bugFixes'>BugFixes</option>
          </NativeSelect>
        </FormControl>
      </Box>

      <BarChart
        sx={{ p: "0px", mt: "-10px" }}
        height={300}
        dataset={data}
        colors={["FF0000", "#9307CF", "#00f]}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={
          selectedCompany !== "all"
            ? [{ dataKey: `${selectedCompany}` }]
            : [
                { dataKey: "website" },
                { dataKey: "tools" },
                { dataKey: "bugFixes" },
              ]
        }
      />
    </Box>
  );
};

export default BarComponent;
