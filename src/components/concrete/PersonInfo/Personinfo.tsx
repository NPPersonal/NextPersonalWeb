import React from 'react';
import LinkTo from '../../units/LinkTo/LinkTo';
import ListItems from '../../units/ListItems/ListItems';

type PersoninfoProps = React.HtmlHTMLAttributes<HTMLElement> & {
    personName: string,
    age: string,
    location: string,
    email:string,
    emailColor?: string,
}
const Personinfo:React.FC<PersoninfoProps> = (props:PersoninfoProps) => {
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

export default Personinfo;