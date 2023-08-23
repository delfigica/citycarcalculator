import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const FinancingCard = ({ setDataForm, dataForm, setshowFinancing }) => {

    const handleReturn = () => {
        setDataForm({
          name: "",
          value: "",
          instalmentValue: "",
          instalmentVehicleName: "",
          feeValue: "",
          feeAmount: "",
        });
        setshowFinancing(false);
      };

      const clickBoard = () => {
        let value =
          dataForm.instalmentValue.length !== 0
            ? `Entrega $${dataForm.instalmentValue}`
            : "";
        let vehicle =
          dataForm.instalmentVehicleName.length !== 0
            ? `(${dataForm.instalmentVehicleName})`
            : "";
        let finance = `*Financiamiento por ${dataForm.name}*
        ${value} ${vehicle}
        Valor de cuota: $${dataForm.feeValue}
        Cuotas a abonar: ${dataForm.feeAmount}`;
        navigator.clipboard.writeText(finance);
      };

      const theme = useTheme();
      const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "120px" }}>
              <img src="./citycar-logo-sinfondo.png" alt='logo City Car' />
            </Box>
          </Box>
          <Box sx={laptop ? { margin: "20px 50px" } : { margin: "5px 10px" }}>
            <Typography sx={{ fontSize: "1.3em" }}>
              Financiamiento por {dataForm?.name}
            </Typography>
            <Box sx={{ display: "flex" }}>
              {dataForm.instalmentValue.length !== 0 && (
                <Typography>Entrega ${dataForm.instalmentValue} </Typography>
              )}
              {dataForm.instalmentVehicleName.length !== 0 && (
                <Typography sx={{ marginLeft: "5px" }}>
                  {" "}
                  ({dataForm.instalmentVehicleName})
                </Typography>
              )}
            </Box>
            <Typography>Valor de cuota: ${dataForm.feeValue}</Typography>
            <Typography>Cuotas a abonar: {dataForm.feeAmount}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <IconButton onClick={clickBoard}>
              <ContentCopyIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{ margin: "0px 10px" }}
              onClick={handleReturn}
            >
              Volver
            </Button>
          </Box>
        </Box>
  )
}

export default FinancingCard