import React from "react";
import NavBar from "./components/NavBar"
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import StartPage from "./components/StartPage";

const style = {
    appContainer: "max-w-[728px] mx-auto text-center min-h-full",
    sectionContainer: "flex flex-col mt-10 bg-gray-100 static"
}

function App() {

    const [loginUser] = useAuthState(auth);

    return (
        <div className={style.appContainer}>
            <section className={style.sectionContainer}>
                <NavBar/>
                {loginUser ? <Chat /> : <StartPage/>}
            </section>
        </div>
    );
};

export default App;
