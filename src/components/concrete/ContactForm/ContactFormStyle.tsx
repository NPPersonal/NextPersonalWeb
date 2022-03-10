import { SxProps, Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

type FormTextFieldProps = React.ComponentProps<typeof TextField> & {
  textColor: string;
  fieldBgColor: string;
  fieldFocusColor: string;
  fieldBorderColor: string;
  sx?: SxProps<Theme>;
};
export const FormTextField = ({
  sx = [],
  textColor,
  fieldBgColor,
  fieldFocusColor,
  fieldBorderColor,
  ...rest
}: FormTextFieldProps) => (
  <TextField
    sx={[
      {
        "& .MuiInputBase-root": {
          color: textColor,
          backgroundColor: fieldBgColor,
        },
        "& .MuiInputBase-root fieldset": {
          borderColor: fieldBorderColor,
        },
        "& .MuiInputBase-input:valid:focus ~ fieldset": {
          borderColor: fieldFocusColor,
          boxShadow: `0 0 4px 0 ${fieldFocusColor}`,
        },
        "& .MuiInputBase-input:valid:hover ~ fieldset": {
          borderColor: fieldFocusColor,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
