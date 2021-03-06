import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import { useFormik } from 'formik';
import React from 'react';
import ColorButton from '../../units/ColorButton/ColorButton';
import * as yup from 'yup';
import style from './ContactFormStyle';
import { sendContactMail } from '../../../utils/mail/SentMail';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgressColor from '../../units/LinearProgressColor/LinearProgressColor';
import TickMotion from '../../framer/TickMotion/TickMotion';
import CrossMotion from '../../framer/CrossMotion/CrossMotion';
import { useMediaQuery } from '@material-ui/core';


type ContactFormProps = React.ComponentProps<typeof Box> & {
    textColor?:string,
    fieldBgColor?:string,
    fieldFocusColor?:string,
    fieldBorderColor?:string,
};

/**
 * Component ContactForm
 * 
 * Display a contact form and manage form submission
 * 
 * Submission is using `/src/utils/mail/SentMail.ts`
 * 
 * @param {ContactFormProps} props 
 * @returns 
 */
const ContactForm:React.FC<ContactFormProps> = (props:ContactFormProps) => {
    const {
        textColor = 'white',
        fieldBgColor = 'grey',
        fieldFocusColor = 'lightblue',
        fieldBorderColor = 'black',
        ...rest
    } = props;

    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [submitState, setSubmitState] = React.useState<{
        submitted:boolean,
        error:any
    }>({
        submitted: false,
        error: undefined,
    });

    const valiationSchema = yup.object({
        name: yup
            .string()
            .required('Enter your name'),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Enter your email'),
        message: yup
            .string()
            .required('Enter your message')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: valiationSchema,
        onSubmit: ({name, email, message})=>{
            sendContactMail(email, name, message)
            .then(data=>{
                console.log(data);
                formik.setSubmitting(false);
                formik.resetForm({
                    values:{
                        name:'',
                        email:'',
                        message:''
                    }
                });
                setSubmitState({submitted:true, error:undefined});
            })
            .catch(error=>{
                console.log(error);
                formik.setSubmitting(false);
                setSubmitState({submitted:false, error:error});
            })
        },
    })

    const handleTryAgain = ()=>{
        setSubmitState({submitted:false, error:undefined})
    }

    const classes = makeStyles(style)({
        textColor,
        fieldBgColor,
        fieldFocusColor,
        fieldBorderColor
    })

    if(submitState.submitted && !submitState.error){
        return (
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box width={100} height={100}>
                    <TickMotion color={theme.palette.success.main} />
                </Box>
                <Box pt={2}>
                    <Typography variant='h5'>Thank you for getting in thouch with me</Typography>
                </Box>
            </Box>
        )
    }

    if(submitState.error){
        return (
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box width={100} height={100}>
                    <CrossMotion color={theme.palette.error.main} />
                </Box>
                <Box pt={2}>
                    <Typography variant='h5'>Looks like message did not send</Typography>
                </Box>
                <Box pt={2}>
                    <ColorButton
                    px={40}
                    disableRipple 
                    color={theme.palette.info.main} 
                    hoverColor={theme.palette.info.dark}
                    titleColor={theme.palette.secondary.contrastText}
                    onClick={handleTryAgain}
                    >
                        Try Again
                    </ColorButton>
                </Box>
            </Box>
        )
    }

    return (
       <Box {...rest}>
            <Typography variant='h4'>Send Me A Message</Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box ml={0} mt={2} mr={matchSM?0:2}>
                            <TextField
                            className={classes.root}
                            id='name' 
                            name='name'
                            value={formik.values.name} 
                            placeholder='Name' 
                            fullWidth 
                            variant='outlined' 
                            onChange={formik.handleChange} 
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box ml={0} mt={2} mr={0}>
                            <TextField 
                            className={classes.root}
                            id='email' 
                            name='email'
                            value={formik.values.email} 
                            placeholder='E-mail' 
                            fullWidth 
                            variant='outlined' 
                            onChange={formik.handleChange} 
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box ml={0} mt={2} mb={2} mr={0}>
                        <TextField 
                        className={classes.root}
                        id='message' 
                        name='message' 
                        value={formik.values.message}
                        placeholder='Message...' 
                        fullWidth 
                        variant='outlined' 
                        multiline rows={10} 
                        onChange={formik.handleChange} 
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display='flex' justifyContent='center'>
                            {formik.isSubmitting?
                                <LinearProgressColor 
                                barColor={theme.palette.info.main} 
                                barMaskColor={theme.palette.info.dark}
                                barWidth='100%'
                                />
                                :
                                <ColorButton
                                type='submit' 
                                px={40}
                                disableRipple 
                                color={theme.palette.info.main} 
                                hoverColor={theme.palette.info.dark}
                                titleColor={theme.palette.secondary.contrastText}
                                >Send</ColorButton>
                            }
                            
                        </Box>
                    </Grid>
                </Grid>
            </form>
       </Box>
    );
};

export default ContactForm;