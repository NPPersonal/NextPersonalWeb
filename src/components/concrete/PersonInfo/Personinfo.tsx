import React from 'react';
import LinkTo from '../../units/LinkTo/LinkTo';
import ListItems from '../../units/ListItems/ListItems';

type PersoninfoProps = React.ComponentProps<typeof React.Component> & {
    personName: string,
    age: string,
    location: string,
    email:string,
    emailColor?: string,
    color?: string,
}
const Personinfo:React.FC<PersoninfoProps> = (props:PersoninfoProps) => {
    const {
        personName,
        age,
        location,
        email,
        emailColor = 'blue',
        color = 'black'
        
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
        itemColor={color}
        items={items}
        />
    );
};

export default Personinfo;