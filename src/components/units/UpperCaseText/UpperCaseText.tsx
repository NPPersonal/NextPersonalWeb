import makeStyles from '@material-ui/core/styles/makeStyles';
import  Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import style from './UpperCaseTextStyle';

type UpperCaseTextProps = React.ComponentProps<typeof Typography>;

const UpperCaseText:React.FC<UpperCaseTextProps> = (props:UpperCaseTextProps) => {
    const {
        children,
        ...rest
    } = props;

    const classes = makeStyles(style)();

    return (
        <Typography className={classes.text} {...rest}>{children}</Typography>
    );
};

export default UpperCaseText;