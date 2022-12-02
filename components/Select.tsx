import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props: any) {
  const [age, setAge] = React.useState(props.value);

  const handleChange = (title: any, value: any) => {
    setAge(title as string);
    props.change(title, value);
  };

  return (
    <Box sx={{ minWidth: "100%", marginLeft: "9px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-select-small">{props.fieldName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={props.fieldName}
          defaultValue={age}
          onChange={(e: any) => handleChange(props.fieldName, e.target.value)}
        >
          {props.options?.map((option: any, index: any) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
