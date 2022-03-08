import Avatar from "@mui/material/Avatar";
import { SxProps, Theme } from "@mui/material/styles";
// import createStyles from '@mui/styles/createStyles';

// type StyleProps = {
//     size: number | string,
//     ringColor: string,
//     ringWidth: number,
// }
// export default createStyles({
//     root:(props:StyleProps)=>({
//         width: props.size,
//         height: props.size,
//         border: `${props.ringWidth}px solid ${props.ringColor}`
//     })
// })

type PersonAvaterProps = React.ComponentProps<typeof Avatar> & {
  size: number | string;
  ringColor: string;
  ringWidth: number;
  sx?: SxProps<Theme>;
};
export const PersonAvatar = ({
  sx = [],
  size,
  ringColor,
  ringWidth,
  ...rest
}: PersonAvaterProps) => (
  <Avatar
    sx={[
      {
        width: size,
        height: size,
        border: `${ringWidth}px solid ${ringColor}`,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
