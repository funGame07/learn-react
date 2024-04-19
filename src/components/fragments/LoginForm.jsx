import InputContainer from "../elements/input/InputContainer";

function LoginForm(){
    return(
        <>
            <InputContainer type="email" name="email" placeholder="Enter Your Email" title="Email"/>
            <InputContainer type="password" name="password" placeholder="Enter Yout Password" title="Password"/>
        </>
    )
}

export default LoginForm