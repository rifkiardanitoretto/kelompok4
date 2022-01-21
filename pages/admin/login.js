import { useState } from "react";
import FormSignIn from "../../components/admin/Form-Login";
import FormSignUp from "../../components/admin/Form-SignUp";

const HalamanLogin = () => {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div align='center'>
            {isLogin ? <FormSignIn/>:<FormSignUp/>}
            {isLogin ? (
            <a>Don't have an account yet? <a href='#'onClick={() => setIsLogin(false)}>Sign Up</a></a>
            ):(
            <a>Already have an account? <a href='#'onClick={() => setIsLogin(true)}>Sign In</a></a>
            )}
        </div>
    )
}
export default HalamanLogin