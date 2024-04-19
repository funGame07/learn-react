import Layout  from "../components/layouts/Layout"
import SignUpForm from "../components/fragments/SignUpForm"
import LoginForm from "../components/fragments/LoginForm"
import { useEffect, useState, createContext } from "react"

export const MessageContext = createContext()

function FormFunction({action}){
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

    async function fetchApi(){
        const response = await fetch(`http://localhost:3000/${action}`,{
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
        if(submit) fetchApi()
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

        // <MessageContext.Provider value={sendContext}>
        //     <Layout action='/login' title="Login">
        //         <LoginForm />
        //     </Layout>
        // </MessageContext.Provider>

        <MessageContext.Provider value={sendContext}>
            <Layout action='/signup' title='Sign Up'>
                <SignUpForm /> 
            </Layout>
        </MessageContext.Provider>
    )
}

export default FormFunction