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
            label: 'Name: ',
            value: personName
        },
        {
            label: 'Age: ',
            value: age
        },
        {
            label: 'From: ',
            value: location
        },
        {
            label: 'E-mail: ',
            value: <LinkTo linkTo={`mailto:${email}`} text={email} color={emailColor} />
        }
    ]
    return (
        <ListItems
        items={items}
        {...rest}
        />
    );
};

export default PersonInfo;