import Copyright from "../atoms/copyright";
import Box from "@material-ui/core/Box";
import React from "react";

const CopyrightComponent = () => {
  return (
    <Box mt={8}>
      <Copyright title={"Copyright © Arai & Umakatsu 2021"} />
    </Box>
  );
};

export default CopyrightComponent;
