import React, { FC } from "react";
import { TextField } from "@mui/material";
import type { OutlinedTextFieldProps } from "@mui/material";

export interface IInputProps extends Omit<OutlinedTextFieldProps, "variant"> {}

export const InputBase: FC<IInputProps> = (props) => {
  return <TextField variant="outlined" {...props} />;
};
