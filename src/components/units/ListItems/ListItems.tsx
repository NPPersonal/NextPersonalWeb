import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React from 'react';
import style from './ListItemsStyle';
import makeStyles from '@material-ui/core/styles/makeStyles';

type ItemProps = {
    label: React.ReactNode,
    value: React.ReactNode,
}

export type ListItemProps = React.ComponentProps<typeof List> & {
    items: ItemProps[],
    divider?: boolean,
    dividerColor?: string,
}

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
const ListItems:React.FC<ListItemProps> = (props:ListItemProps) => {
    const {
        items,
        divider = true,
        dividerColor = 'grey',
        ...rest
    } = props;

    const classes = makeStyles(style)({
        dividerColor,
    });

    const listItemClasses = {
        divider: classes.divider,
    };

    return (
       <List {...rest}>
           {items.map((item, i)=>{
               return (
                <ListItem key={i} classes={listItemClasses} divider={divider?i!==items.length-1:false}>
                    <Box>
                        <Typography variant='h6' component='span'>{item.label}</Typography>
                        <Typography component='span'>{item.value}</Typography>
                    </Box>
                </ListItem>
               )
           })}
       </List>
    );
};

export default ListItems;