import { useContext } from "react"
import { MessageContext } from "../../pages/FormFunction"

function Submit(){
    const {preventDef} = useContext(MessageContext)
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