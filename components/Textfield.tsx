import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props: any) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-helperText"
        type={props?.type}
        label={props?.fieldName}
        defaultValue={props?.value}
        onChange={(e: any) => {
          props.change(props?.fieldName, e.target.value);
        }}
      />
    </Box>
  );
}
