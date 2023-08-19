
import { FormCard } from "../components/FormCard";
import React from "react";
import { Box } from "@mui/material";
export default function Home() {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em",
        backgroundColor: "#0E4D92",
        minHeight: "100vh",
      }}
    >
      <FormCard />
    </Box>
  );
}
