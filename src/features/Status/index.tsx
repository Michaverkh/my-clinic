import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import { FC } from "react";
import { Box, Tooltip, styled } from "@mui/material";
import { EAppointment } from "shared/enums/enums";

const GreenBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #90C782 0%, #5FB651 100%);",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const RedBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #FE9BAE 0%, #FF7494 100%)",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const OrangeBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #DCB171 0%, #D09734 100%)",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const BlueBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #5DC5F8 0%, #00B1EB 100%)",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const GrayBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#A3A3A3",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

export const Status: FC<{ status: string[] }> = ({ status }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {status.includes(EAppointment.Missing) && (
        <Tooltip title="Частичные назначения" key={EAppointment.Missing}>
          <BlueBox>
            <ArrowDownwardIcon color="info" fontSize="small" />
          </BlueBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Standard) && (
        <Tooltip title="Соответствует стандарту" key={EAppointment.Standard}>
          <GreenBox>
            <CheckIcon color="info" fontSize="small" />
          </GreenBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Possible) && (
        <Tooltip title="Дополниельные назначения" key={EAppointment.Possible}>
          <RedBox>
            <ArrowUpwardIcon color="info" fontSize="small" />
          </RedBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Excess) && (
        <Tooltip title="Не разработан стандарт" key={EAppointment.Excess}>
          <GrayBox>
            <CloseIcon color="info" fontSize="small" />
          </GrayBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Changed) && (
        <Tooltip title="Замены" key={EAppointment.Changed}>
          <OrangeBox>
            <SwapHorizIcon color="info" fontSize="small" />
          </OrangeBox>
        </Tooltip>
      )}
    </Box>
  );
};
