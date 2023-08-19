"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export const FormCard = () => {
  const [handingOver, setHandingOver] = useState("false");

  const changeHandingOver = (e) => {
    setHandingOver(e.target.value);
  };

  const [dataForm, setDataForm] = useState({
    name: "",
    value: "",
    instalmentValue: "",
    instalmentVehicleName: "",
    feeValue: "",
    feeAmount: "",
  });

  const handleChange = (e) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card
      sx={{
        width: "65%",
        height: "480px",
        marginTop: "20px",
        padding: "2em",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "120px" }}>
        <img src="./citycar-logo-sinfondo.png" />
      </Box>
      <Typography
        sx={{
          fontSize: "1.2em",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Completar los datos del formulario
      </Typography>
      <Box sx={{ width: "90%", margin: "10px auto", display: "flex" }}>
        <Box sx={{ width: "60%" }}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>
              Información sobre el vehículo
            </Typography>
            <TextField
              label="Vehículo"
              size="small"
              name="name"
              onChange={handleChange}
              value={dataForm.name}
            />
            <TextField
              label="Valor vehículo"
              size="small"
              sx={{ margin: "0px 15px" }}
              name="value"
              onChange={handleChange}
              value={dataForm.value}
            />
          </Box>
          <Box sx={{ margin: "20px 0px" }}>
            <Typography sx={{ marginBottom: "15px" }}>
              CUOTAS (completar sólo uno)
            </Typography>
            <TextField
              label="Cantidad"
              size="small"
              name="feeAmount"
              onChange={handleChange}
              value={dataForm.feeAmount}
            />
            <TextField
              label="Valor de cuota"
              size="small"
              sx={{ margin: "0px 15px" }}
              name="feeValue"
              onChange={handleChange}
              value={dataForm.feeValue}
            />
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ textTransform: "uppercase" }}>Entrega</Typography>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={handingOver}
              onChange={changeHandingOver}
            >
              <Box sx={{ display: "flex " }}>
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel value="true" control={<Radio />} label="Si" />
              </Box>
            </RadioGroup>
          </Box>
          {handingOver === "true" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                label="Vehículo (nombre)"
                size="small"
                name="instalmentVehicleName"
                onChange={handleChange}
                value={dataForm.instalmentVehicleName}
              />
              <TextField
                label="Capital en total"
                size="small"
                sx={{ marginTop: "20px" }}
                name="instalmentValue"
                onChange={handleChange}
                value={dataForm.instalmentValue}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Button sx={{ marginTop: "15px" }} variant="contained">
        Armar presupuesto
      </Button>
    </Card>
  );
};
