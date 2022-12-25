import GoogleButton from "react-google-button";
import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth"
import {auth} from "../firebase";

const style = {
    buttonContainer: "flex justify-center"
}

const loginWithGoogle = () => {
   const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
    return (
        <div className={style.buttonContainer}>
            <GoogleButton onClick={loginWithGoogle}/>
        </div>
    );
};

export default SignIn