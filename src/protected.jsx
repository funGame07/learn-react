import { useEffect } from "react"


function Protected(){
    async function isAuth(){
        const response = await fetch('http://localhost:3000/protected', {
            credentials: 'include'
        })
        const data = await response.json()
        if(!data.success){
            location.assign('/login')
        }
    }

    useEffect(()=>{
        isAuth()
    }, [])

    return <h1>Welcome to Protected Route</h1>
}

export default Protected