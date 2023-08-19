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
  useMediaQuery,
  useTheme,
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

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Card
      sx={ laptop ? {
        width: "65%",
        height: "480px",
        marginTop: "20px",
        padding: "2em",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      } : {
        padding: '1em',
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "120px" }}>
        <img src="./citycar-logo-sinfondo.png" />
      </Box>
      <Typography
        sx={ laptop ? {
          fontSize: "1.2em",
          textAlign: "center",
          textTransform: "uppercase",
        } : {
          fontSize: '1em',
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Completar los datos del formulario
      </Typography>
      <Box sx={ laptop ? { width: "90%", margin: "10px auto", display: "flex" } : {}}>
        <Box sx={ laptop ? { width: "60%" }: {}}>
          <Box sx={ laptop ? { } : { paddingLeft: '50px', marginTop: '10px' }}>
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
              sx={ laptop ? { margin: "0px 15px" } : {margin: '10px 0px'}}
              name="value"
              onChange={handleChange}
              value={dataForm.value}
            />
          </Box>
          <Box sx={ laptop ? { margin: "20px 0px" } : {margin: '10px auto', paddingLeft: '50px' }}>
            <Typography sx={{ marginBottom: "15px" }}>
              CUOTAS (completar sólo uno)
            </Typography>
            <TextField
              label="Cantidad"
              size="small"
              name="feeAmount"
              onChange={handleChange}
              value={dataForm.feeAmount}
              disabled={dataForm.feeValue !== '' ? true : false}
            />
            <TextField
              label="Valor de cuota"
              size="small"
              sx={ laptop ? { margin: "0px 15px" } : {margin: '10px 0px'}}
              name="feeValue"
              onChange={handleChange}
              value={dataForm.feeValue}
              disabled={dataForm.feeAmount !== '' ? true : false}
            />
          </Box>
        </Box>
        <Box sx={ laptop ? { width: "40%" } : {}}>
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
