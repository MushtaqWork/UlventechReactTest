import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButton(props: any) {
  return (
    <Button variant="contained" type="submit" onClick={props.submitHandler}>
      Submit
    </Button>
  );
}
