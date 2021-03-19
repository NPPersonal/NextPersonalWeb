import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React from 'react';

type ItemProps = {
    label: React.ReactNode,
    value: React.ReactNode,
}

type ListItemProps = React.ComponentProps<typeof List> & {
    items: ItemProps[],
    itemColor?: string,
}
const ListItems:React.FC<ListItemProps> = (props:ListItemProps) => {
    const {
        items,
        itemColor = 'black',
        ...rest
    } = props;

    return (
       <List {...rest}>
           {items.map((item, i)=>{
               return (
                <ListItem key={i} divider>
                    <Box color={itemColor}>
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