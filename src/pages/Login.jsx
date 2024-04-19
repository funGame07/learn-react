import { useEffect, useState, createContext } from "react"
import Layout from "../components/layouts/Layout"
import LoginForm from "../components/fragments/LoginForm"

export const LoginContext = createContext()

function Login({}){
    const [submit, setSubmit] = useState(0)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')


    function preventDef(e){
        e.preventDefault()
        setSubmit(submit + 1)
    }

    async function loginApi(){
        const response = await fetch('http://localhost:3000/login',{
            method: 'POST',
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()
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
        setEmail,
        setPassword,
        emailErr,
        passwordErr,
        preventDef
    }

    return(
        <LoginContext.Provider value={sendContext}>
            <Layout action='/login' title="Login">
                <LoginForm />
            </Layout>
        </LoginContext.Provider>
        
    )
}

export default Login