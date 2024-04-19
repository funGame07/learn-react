import { useEffect, useState, createContext } from "react"
import FormFunction from "./FormFunction"

export const LoginContext = createContext()

function Login(){
    return(
        <FormFunction action="login" />
    )
}

export default Login