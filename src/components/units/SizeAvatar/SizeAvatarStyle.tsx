import Avatar from "@mui/material/Avatar";
import { SxProps, Theme } from "@mui/material/styles";

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
        boxShadow: `0px 0px 6px 1px ${ringColor}`,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
