import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
    navigation: "bg-slate-900 h-20 flex justify-between items-center p-4 fixed inset-x-auto top-0 w-full max-w-[728px]",
    header: "text-white text-3xl"
}

const NavBar = () => {

    const [loginUser] = useAuthState(auth);

    return (
        <div className={style.navigation}>
            <h1 className={style.header}>
                Lonely's Habits
            </h1>
            {
                loginUser ? <LogOut/> : <SignIn/>
            }
        </div>
    );
};

export default NavBar
