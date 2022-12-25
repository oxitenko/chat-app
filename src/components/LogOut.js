import {auth} from "../firebase";

const style = {
    buttonOut: "bg-sky-500 px-4 py-2 hover:bg-sky-400"
}
const LogOut = () => {

    const signOut = () => {
        signOut(auth);
    }

    return (<button onClick={() => auth.signOut()} className={style.buttonOut}>
            Logout
        </button>)
};

export default LogOut;