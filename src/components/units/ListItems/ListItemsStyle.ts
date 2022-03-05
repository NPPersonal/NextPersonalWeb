import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

type ItemProps = {};

export const Item = styled(ListItem)<ItemProps>(({ theme }) => ({
  borderColor: theme.palette.primary.dark,
}));
