import InputContainer from "../elements/input/InputContainer"

function SignUpForm(){
    return(
        <>
            <InputContainer type="text" name="username" placeholder="Enter Your Username" title="Username"/>
            <InputContainer type="email" name="email" placeholder="example@gmail.com" title="Email"/>
            <InputContainer type="password" name="password" placeholder="******" title="Password"/>
        </>
    )
}

export default SignUpForm