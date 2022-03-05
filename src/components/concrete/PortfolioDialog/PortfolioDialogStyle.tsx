import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { SxProps, Theme } from "@mui/material/styles";

export type PFDialogProps = React.ComponentProps<typeof Dialog> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  paperColor: string;
};

export const PFDialog = ({
  sx = [],
  children,
  paperColor,
  ...rest
}: PFDialogProps) => (
  <Dialog
    sx={[
      {
        "& .MuiDialog-paper": {
          backgroundColor: paperColor,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Dialog>
);

type CloseButtonProps = React.ComponentProps<typeof IconButton> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  closeBtnColor: string;
};

export const CloseButton = ({
  sx = [],
  children,
  closeBtnColor,
  ...rest
}: CloseButtonProps) => (
  <IconButton
    sx={[
      {
        color: closeBtnColor,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </IconButton>
);
