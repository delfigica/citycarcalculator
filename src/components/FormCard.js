"use client";
import { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Image from "next/image";

export const FormCard = ({ setDataForm, dataForm, setshowFinancing }) => {
  const [handingOver, setHandingOver] = useState("false");

  const changeHandingOver = (e) => {
    setHandingOver(e.target.value);
  };

  const handleChange = (e) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let capital =
      dataForm.instalmentValue === "" ? 0 : parseInt(dataForm.instalmentValue);
    let percentage = (dataForm.feeValue * 100) / (dataForm.value - capital);
    let totalValue = parseInt(dataForm.value) - capital;
    if (dataForm.value.length !== 0) {
      if (dataForm.feeValue.length !== 0) {
        if (percentage < 2.5) {
          let amount =
            (totalValue * 0.4 + totalValue) / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        } else if (percentage === 3) {
          let amount =
            (totalValue * 0.3 + totalValue) / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        } else if (percentage > 3 && percentage < 5.1) {
          let amount =
            (totalValue * 0.25 + totalValue) / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        } else if (percentage > 5.1 && percentage < 8.1) {
          let amount =
            (totalValue * 0.15 + totalValue) / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        } else if (percentage > 8.1 && percentage < 10.1) {
          let amount =
            (totalValue * 0.1 + totalValue) / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        } else if (percentage > 10.1) {
          let amount = totalValue / parseInt(dataForm.feeValue);
          setDataForm((prev) => {
            return { ...prev, feeAmount: Math.ceil(amount) };
          });
        }
      } else if (dataForm.feeAmount.length !== 0) {
        if (parseInt(dataForm.feeAmount) >= 42) {
          let value =
            (totalValue * 0.4 + totalValue) / parseInt(dataForm.feeAmount);
          console.log("value: ", totalValue);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        } else if (
          parseInt(dataForm.feeAmount) >= 30 &&
          parseInt(dataForm.feeAmount) < 42
        ) {
          let value =
            (totalValue * 0.3 + totalValue) / parseInt(dataForm.feeAmount);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        } else if (
          parseInt(dataForm.feeAmount) >= 24 &&
          parseInt(dataForm.feeAmount) < 30
        ) {
          let value =
            (totalValue * 0.25 + totalValue) / parseInt(dataForm.feeAmount);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        } else if (
          parseInt(dataForm.feeAmount) >= 18 &&
          parseInt(dataForm.feeAmount) < 24
        ) {
          let value =
            (totalValue * 0.15 + totalValue) / parseInt(dataForm.feeAmount);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        } else if (
          parseInt(dataForm.feeAmount) >= 12 &&
          parseInt(dataForm.feeAmount) < 18
        ) {
          let value =
            (totalValue * 0.1 + totalValue) / parseInt(dataForm.feeAmount);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        } else if (parseInt(dataForm.feeAmount) < 12) {
          let value = totalValue / parseInt(dataForm.feeAmount);
          setDataForm((prev) => {
            return { ...prev, feeValue: Math.round(value) };
          });
        }
      }
    }
    setshowFinancing(true);
  };

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box sx={{ width: "120px" }}>
        <Image
          src="https://raw.githubusercontent.com/delfigica/citycarcalculator/main/public/images/citycar-logo-sinfondo.png"
          width={120}
          height={120}
        />
      </Box>
      <Typography
        sx={
          laptop
            ? {
                fontSize: "1.2em",
                textAlign: "center",
                textTransform: "uppercase",
              }
            : {
                fontSize: "1em",
                textAlign: "center",
                textTransform: "uppercase",
              }
        }
      >
        Completar los datos del formulario
      </Typography>
      <Box
        sx={
          laptop ? { width: "90%", margin: "10px auto", display: "flex" } : {}
        }
      >
        <Box sx={laptop ? { width: "60%" } : {}}>
          <Box sx={laptop ? {} : { paddingLeft: "50px", marginTop: "10px" }}>
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
              sx={laptop ? { margin: "0px 15px", width: '190px' } : { margin: "10px 0px", width: '190px' }}
              name="value"
              onChange={handleChange}
              value={dataForm.value}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={
              laptop
                ? { margin: "20px 0px" }
                : { margin: "10px auto", paddingLeft: "50px" }
            }
          >
            <Typography sx={{ marginBottom: "15px" }}>
              CUOTAS (completar sólo uno)
            </Typography>
            <TextField
              label="Cantidad"
              size="small"
              name="feeAmount"
              onChange={handleChange}
              value={dataForm.feeAmount}
              disabled={dataForm.feeValue !== "" ? true : false}
            />
            <TextField
              label="Valor de cuota"
              size="small"
              sx={laptop ? { margin: "0px 15px", width: '190px'  } : { margin: "10px 0px", width: '190px'  }}
              name="feeValue"
              onChange={handleChange}
              value={dataForm.feeValue}
              disabled={dataForm.feeAmount !== "" ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={laptop ? { width: "40%" } : {}}>
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
                sx={{ marginTop: "20px", width: '190px' }}
                name="instalmentValue"
                onChange={handleChange}
                value={dataForm.instalmentValue}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          sx={{ margin: "15px auto" }}
          variant="contained"
          onClick={handlerSubmit}
        >
          Armar presupuesto
        </Button>
      </Box>
    </Box>
  );
};
