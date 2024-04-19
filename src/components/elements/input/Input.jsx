import { useContext } from "react"
import { SignUpContext } from "../../../pages/SignUp"


function Input({type, name, placeholder}){
    
    const {setUsername, setEmail, setPassword} = useContext(SignUpContext)

    const inputStyle = 'px-2 py-1 w-full border rounded-md focus:outline-none focus:ring focus:ring-lime-100 '

    const onChangeFunction =    name === 'username' ? setUsername : 
                                name === 'email' ? setEmail : 
                                setPassword


    return(
        <input 
        type={type} 
        className={inputStyle} 
        name={name} 
        id={name}
        placeholder={placeholder}
        onChange={(e) => onChangeFunction(e.target.value)} 
        required/>
    )
}
export default Input