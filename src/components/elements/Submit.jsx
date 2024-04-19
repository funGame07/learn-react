import { useContext } from "react"
import { SignUpContext } from "../../pages/SignUp"

function Submit(){
    const {preventDef} = useContext(SignUpContext)
    const submitStyle = 'border rounded-md py-1 px-4 mt-3 mb-4 bg-lime-400 font-semibold' 

    return(
        <input 
        type="submit" 
        value='Submit'
        className={submitStyle} 
        onClick={(e) => preventDef(e)}/>
    )
}

export default Submit