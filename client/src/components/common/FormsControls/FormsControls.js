
export const FormControl = ({input, meta, child, ...props}) => {
    let touchedAndError = meta.touched && meta.error;
    return (
        <>   
            {props.children}
            {touchedAndError && <div style={{color: "red"}}>{meta.error}</div>}
        </>
    )
}

export const TextArea = ({...props}) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <>
            <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
        </>
    )
}

export const Input = ({...props}) => { 
    const {input, meta, child, ...restProps} = props;
    return (
        <>
            <FormControl {...props}><input {...input} {...restProps} /></FormControl>
        </>
    )
}

