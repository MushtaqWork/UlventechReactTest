import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";

export default function TextArea(props: any) {
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
        label={props.fieldName}
        defaultValue={props?.value}
        minRows={5}
        style={{ width: "100%" }}
        multiline={true}
        onChange={(e: any) => {
          props.change(props.fieldName, e.target.value);
        }}
      />
    </Box>
  );
}
