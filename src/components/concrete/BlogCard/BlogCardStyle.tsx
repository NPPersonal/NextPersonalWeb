import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { SxProps, Theme } from "@mui/material/styles";
// import createStyles from "@mui/styles/createStyles";
import React from "react";

// type StyleProps = {
//   width: string | number;
//   contentHeight: string | number;
// };
// export default createStyles({
//   card: (props: StyleProps) => ({
//     width: props.width,
//   }),
//   headerContent: {
//     width: "100%",
//   },
//   headerTitle: {
//     textOverflow: "ellipsis",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%",
//   },
//   content: (props: StyleProps) => ({
//     height: props.contentHeight,
//     overflow: "scroll",
//   }),
//   actions: {
//     display: "flex",
//     justifyContent: "center",
//   },
// });

export type BCardProps = React.ComponentProps<typeof Card> & {
  children?: React.ReactNode;
  width: string | number;
  sx?: SxProps<Theme>;
};
export const BCard = ({ sx = [], children, width, ...rest }: BCardProps) => (
  <Card
    sx={[
      {
        width: width,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Card>
);

type BCardHeaderProps = React.ComponentProps<typeof CardHeader> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};
export const BCardHeader = ({
  sx = [],
  children,
  ...rest
}: BCardHeaderProps) => (
  <CardHeader
    sx={[
      {
        width: "100%",
        "& .MuiCardHeader-title": {
          textOverflow: "ellipsis",
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </CardHeader>
);

type BCardMediaProps = React.ComponentProps<typeof CardMedia> & {
  sx?: SxProps<Theme>;
};
export const BCardMedia = ({ sx = [], ...rest }: BCardMediaProps) => (
  <CardMedia
    sx={[
      {
        height: 0,
        paddingTop: "56.25%",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);

type BCardContentProps = React.ComponentProps<typeof CardContent> & {
  children?: React.ReactNode;
  contentHeight: string | number;
  sx?: SxProps<Theme>;
};
export const BCardContent = ({
  sx = [],
  children,
  contentHeight,
  ...rest
}: BCardContentProps) => (
  <CardContent
    sx={[
      {
        height: contentHeight,
        overflow: "scroll",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </CardContent>
);

type BCardActionsProps = React.ComponentProps<typeof CardActions> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};
export const BCardActions = ({
  sx = [],
  children,
  ...rest
}: BCardActionsProps) => (
  <CardActions
    sx={[
      {
        display: "flex",
        justifyContent: "center",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </CardActions>
);
