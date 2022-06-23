import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Link to="/">
        <Button
          sx={{ m: 1 }}
          variant="contained"
          color={location.pathname === "/users" ? "success" : "primary"}>
          Contacts
        </Button>
      </Link>
      <Link to="add">
        <Button
          sx={{ m: 1 }}
          variant="contained"
          color={location.pathname === "/users" ? "success" : "primary"}>
          Add Contact
        </Button>
      </Link>
    </Box>
  );
};

export default Body;
