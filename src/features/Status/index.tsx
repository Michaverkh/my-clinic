import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";

import { FC } from "react";
import { Box, Tooltip, styled } from "@mui/material";
import { EAppointment } from "shared/enums/enums";

const RedBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FE9BAE",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const OrangeBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#DCB171",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

const BlueBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#5DC5F8",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});
const GrayBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#A3A3A3",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  margin: "4px",
});

export const Status: FC<{ status: string[] }> = ({ status }) => {
  console.log(JSON.stringify(status));
  return (
    <Box sx={{ display: "flex" }}>
      {status.includes(EAppointment.Excess) && (
        <Tooltip title="Excess" key={EAppointment.Excess}>
          <BlueBox>
            <ArrowDownwardIcon color="info" fontSize="small" />
          </BlueBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Standard) && (
        <Tooltip title="Standard" key={EAppointment.Standard}>
          <OrangeBox>
            <SwapHorizIcon color="info" fontSize="small" />
          </OrangeBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Missing) && (
        <Tooltip title="Missing" key={EAppointment.Missing}>
          <RedBox>
            <ArrowUpwardIcon color="info" fontSize="small" />
          </RedBox>
        </Tooltip>
      )}
      {status.includes(EAppointment.Possible) && (
        <Tooltip title="Possible" key={EAppointment.Possible}>
          <GrayBox>
            <CloseIcon color="info" fontSize="small" />
          </GrayBox>
        </Tooltip>
      )}
    </Box>
  );
};
