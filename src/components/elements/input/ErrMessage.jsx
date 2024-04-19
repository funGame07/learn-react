import { useContext } from "react"
import { SignUpContext } from "../../../pages/SignUp"

function ErrMessage({name}){
    const {usernameErr, emailErr, passwordErr} = useContext(SignUpContext)
    const errStyle = 'block text-sm text-red-500'

    const ErrMessage =  name === 'username' ? usernameErr :
                        name === 'email' ? emailErr :
                        passwordErr

    return(
        <span 
        className={errStyle}>
            {ErrMessage}
        </span>
    )
}

export default ErrMessage