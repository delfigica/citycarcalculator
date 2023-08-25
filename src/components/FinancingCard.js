import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Image from "next/image";

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

  let value =
    dataForm.instalmentValue.length !== 0
      ? `Entrega $ ${dataForm.instalmentValue}`
      : "";
  let vehicle =
    dataForm.instalmentVehicleName.length !== 0
      ? `(${dataForm.instalmentVehicleName})`
      : "";
      console.log(value, vehicle)
  let finance = `*Financiación por ${dataForm.name.trim()}*` +
  (value ? `\n${value} ${vehicle}` : '') +
  `\nValor de cuota: $ ${dataForm.feeValue}` +
  `\nCuotas a abonar: ${dataForm.feeAmount}`
    const clickBoard = () => {
    navigator.clipboard.writeText(finance);
  };

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "120px" }}>
          <Image src="https://raw.githubusercontent.com/delfigica/citycarcalculator/main/public/images/citycar-logo-sinfondo.png" width={120} height={120} />
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
        <a href={`https://api.whatsapp.com/send?text=${finance}`}>
        <IconButton >
          <WhatsAppIcon />
        </IconButton>
        </a>
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
  );
};

export default FinancingCard;
