import { Link } from "react-router-dom"
import Submit from "../elements/Submit"

function Layout({children, action, title}){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="min-w-80 h-fit border-2 rounded-lg border-gray-400 py-6 px-5 shadow-lg shadow-lime-100">
                <h1 className="text-2xl font-bold text-lime-500 ps-2">{title}</h1>
                <form action={action} method="post">
                    {children}
                    <Submit />
                </form>
            </div>
            <Navigation action={action}/>
        </div>
    )
}


function Navigation({action}){
    //todo : conditional rendering
    return(
        <div className="max-w-xs flex flex-col items-center mt-2">
            <span className="block text-center text-neutral-500"> Already have an account?</span>
            <Link to="/login" className="italic underline text-lime-400">Login</Link>
        </div>
    )
}

export default Layout