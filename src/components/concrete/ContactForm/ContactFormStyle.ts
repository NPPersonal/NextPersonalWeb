import createStyles from "@material-ui/core/styles/createStyles"

type StyleProps = {
    textColor:string,
    fieldBgColor:string,
    fieldFocusColor:string,
    fieldBorderColor:string,
}
export default createStyles({
    root:(props:StyleProps)=>({
        '& input':{
            color: props.textColor,
        },
        '& .MuiOutlinedInput-root':{
            backgroundColor:props.fieldBgColor
        },
        '& input:valid:focus + fieldset':{
            borderColor: props.fieldFocusColor,
            boxShadow: `0 0 4px 0 ${props.fieldFocusColor}`
        },
        '& input:valid:hover + fieldset':{
            borderColor: props.fieldFocusColor,
        },
        '& input:valid + fieldset':{
            borderColor: props.fieldBorderColor,
        },
        '& textarea':{
            color: props.textColor,
        },
        '& textarea:valid:focus + fieldset':{
            borderColor: props.fieldFocusColor,
            boxShadow: `0 0 4px 0 ${props.fieldFocusColor}`
        },
        '& .MuiOutlinedInput-root:hover fieldset':{
            borderColor: props.fieldFocusColor,
        },
        '& .MuiOutlinedInput-root fieldset':{
            borderColor: props.fieldBorderColor,
        }
    })
})