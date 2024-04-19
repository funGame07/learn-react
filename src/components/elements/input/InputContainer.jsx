import Input from "./Input"
import Label from "./Label"
import ErrMessage from "./ErrMessage"

function InputContainer({type, name, placeholder, title}){
    return(
        <div className="mb-4">
            <Label htmlFor={name} title={title}/>
            <Input type={type} name={name} placeholder={placeholder}/>
            <ErrMessage name={name}/>
        </div>
    )
}

export default InputContainer