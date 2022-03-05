import Box from "@mui/material/Box";
import List from "@mui/material/List";
import useTheme from "@mui/styles/useTheme";
import React from "react";
import { Item } from "./ListItemsStyle";

type ItemProps = {
  label: React.ReactNode;
  value: React.ReactNode;
};

export type ListItemProps = React.ComponentProps<typeof List> & {
  items: ItemProps[];
  disableGutters?: boolean;
  divider?: boolean;
  dividerColor?: string;
};

/**
 * Component ListItems
 *
 * Display a list of item vertically
 *
 * Divider between each items
 *
 * Enable/disable divider
 * Customizable divider color
 *
 * Wrapped Material-UI `List`
 * https://material-ui.com/components/lists/#lists
 *
 * @param {ListItemProps} props
 * @returns
 */
const ListItems: React.FC<ListItemProps> = (props: ListItemProps) => {
  const {
    items,
    divider = false,
    dividerColor = "grey",
    disableGutters = true,
    ...rest
  } = props;

  const theme = useTheme();
  return (
    <List {...rest}>
      {items.map((item, i) => {
        return (
          <Item
            key={i}
            theme={theme}
            disableGutters={disableGutters}
            divider={divider ? i !== items.length - 1 : false}
          >
            <Box display="flex" alignItems="center">
              {item.label}
              {item.value}
            </Box>
          </Item>
        );
      })}
    </List>
  );
};

export default ListItems;
