import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";

import { FC } from "react";
import { EReceptions } from "widgets/tableWidget/data";
import { Box, Tooltip, styled } from "@mui/material";

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

export const Status: FC<{ status: EReceptions[] }> = ({ status }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {status.includes(EReceptions.PoorQuality) && (
        <Tooltip title="PoorQuality" key={EReceptions.PoorQuality}>
          <BlueBox>
            <ArrowDownwardIcon color="info" fontSize="small" />
          </BlueBox>
        </Tooltip>
      )}
      {status.includes(EReceptions.Standart) && (
        <Tooltip title="Standart" key={EReceptions.Standart}>
          <OrangeBox>
            <SwapHorizIcon color="info" fontSize="small" />
          </OrangeBox>
        </Tooltip>
      )}
      {status.includes(EReceptions.SubOptimal) && (
        <Tooltip title="SubOptimal" key={EReceptions.SubOptimal}>
          <RedBox>
            <ArrowUpwardIcon color="info" fontSize="small" />
          </RedBox>
        </Tooltip>
      )}
      {status.includes(EReceptions.Unverifiable) && (
        <Tooltip title="Unverifiable" key={EReceptions.Unverifiable}>
          <GrayBox>
            <CloseIcon color="info" fontSize="small" />
          </GrayBox>
        </Tooltip>
      )}
    </Box>
  );
};
