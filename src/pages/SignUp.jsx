import Layout  from "../components/layouts/Layout"
import SignUpForm from "../components/fragments/SignUpForm"
import { useEffect, useState, createContext } from "react"

export const SignUpContext = createContext()

function Login({}){
    const [submit, setSubmit] = useState(0)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usernameErr, setUsernameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')


    function preventDef(e){
        e.preventDefault()
        setSubmit(submit + 1)
    }

    async function loginApi(){
        const response = await fetch('http://localhost:3000/signup',{
            method: 'POST',
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })

        const data = await response.json()
        setUsernameErr(data.username)
        setEmailErr(data.email)
        setPasswordErr(data.password)
        if(data.success === true){
            location.assign('/protected')
        }
    }   

    useEffect(() =>{
        if(submit) loginApi()
        console.log(submit)
    }, [submit])

    const sendContext = {
        preventDef,
        setUsername,
        setEmail,
        setPassword,
        usernameErr,
        emailErr,
        passwordErr
    }

    return(
        <SignUpContext.Provider value={sendContext}>
            <Layout action='/signup' title='Sign Up'>
                <SignUpForm /> 
            </Layout>
        </SignUpContext.Provider>
        
    )
}

export default Login