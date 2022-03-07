import { SxProps, Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
// import createStyles from "@mui/styles/createStyles";

// type StyleProps = {
//   textColor: string;
//   fieldBgColor: string;
//   fieldFocusColor: string;
//   fieldBorderColor: string;
// };
// export default createStyles({
//   root: (props: StyleProps) => ({
//     "& input": {
//       color: props.textColor,
//     },
//     "& .MuiOutlinedInput-root": {
//       backgroundColor: props.fieldBgColor,
//     },
//     "& input:valid:focus + fieldset": {
//       borderColor: props.fieldFocusColor,
//       boxShadow: `0 0 4px 0 ${props.fieldFocusColor}`,
//     },
//     "& input:valid:hover + fieldset": {
//       borderColor: props.fieldFocusColor,
//     },
//     "& input:valid + fieldset": {
//       borderColor: props.fieldBorderColor,
//     },
//     "& textarea": {
//       color: props.textColor,
//     },
//     "& textarea:valid:focus + fieldset": {
//       borderColor: props.fieldFocusColor,
//       boxShadow: `0 0 4px 0 ${props.fieldFocusColor}`,
//     },
//     "& .MuiOutlinedInput-root:hover fieldset": {
//       borderColor: props.fieldFocusColor,
//     },
//     "& .MuiOutlinedInput-root fieldset": {
//       borderColor: props.fieldBorderColor,
//     },
//   }),
// });

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
