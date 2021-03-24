import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import React from 'react';
import LinkTo from '../../units/LinkTo/LinkTo';
import ListItems, { ListItemProps } from '../../units/ListItems/ListItems';

type ListItemsWithoutItemsProps = Omit<ListItemProps, 'items'>
type PersonInfoProps = React.HtmlHTMLAttributes<HTMLElement> & ListItemsWithoutItemsProps & {
    personName: string,
    age: string,
    location: string,
    email:string,
    emailColor?: string,
}

/**
 * Component PersonInfo
 * 
 * Display person info as list
 * 
 * Wrapped `ListItems` component
 * 
 * @param {PersonInfoProps} props 
 * @returns 
 */
const PersonInfo:React.FC<PersonInfoProps> = (props:PersonInfoProps) => {
    const {
        personName,
        age,
        location,
        email,
        emailColor = 'blue',
        ...rest
    } = props;

    const items = [
        {
            label: <Typography variant='h5'>Name: </Typography>,
            value: (
                <Box ml={1}>
                <Typography variant='h5'>{personName}</Typography>
                </Box>
            )
        },
        {
            label: <Typography variant='h5'>Age: </Typography>,
            value: (
                <Box ml={1}>
                    <Typography variant='h5'>{age}</Typography>
                </Box>
            )
        },
        {
            label: <Typography variant='h5'>From: </Typography>,
            value: (
                <Box ml={1}>
                    <Typography variant='h5'>{location}</Typography>
                </Box>
            )
        },
        {
            label: <Typography variant='h5'>E-mail: </Typography>,
            value: (
                <Box ml={1}>
                    <Typography variant='h5'>
                        <LinkTo linkTo={`mailto:${email}`} text={email} color={emailColor} />
                    </Typography>    
                </Box>
            )
        }
    ]
    return (
        <ListItems
        divider
        items={items}
        {...rest}
        />
    );
};

export default PersonInfo;