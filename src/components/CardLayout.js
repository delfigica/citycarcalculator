"use client";
import { useState } from "react";
import {
  Card,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FinancingCard from "./FinancingCard";
import { FormCard } from "./FormCard";

export const CardLayout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    value: "",
    instalmentValue: "",
    instalmentVehicleName: "",
    feeValue: "",
    feeAmount: "",
  });

  const [showFinancing, setshowFinancing] = useState(false);

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Card
      sx={
        laptop
          ? {
              width: "65%",
              height: "480px",
              marginTop: "20px",
              padding: "2em",
            }
          : {
              padding: "1em",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }
      }
    >
      {showFinancing ? (
        <FinancingCard
          setDataForm={setDataForm}
          dataForm={dataForm}
          setshowFinancing={setshowFinancing}
        />
      ) : (
        <FormCard
          setDataForm={setDataForm}
          dataForm={dataForm}
          setshowFinancing={setshowFinancing}
        />
      )}
    </Card>
  );
};
