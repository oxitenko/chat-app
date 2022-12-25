import {useState} from "react";
import {auth, db} from "../firebase";
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

const style = {
    form: "h-14 w-full max-w-[728px] flex text-xl bottom-0 fixed",
    msgInput: "w-full text-xl p-3 bg-gray-900 text-white outline-none border-none",
    subBtn: "w-[20%] bg-green-500"
}
const MessageForm = ({scroll}) => {

    const sendMessage = async (e) => {
        e.preventDefault(e)
        if(!msg) return
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: msg,
            name: displayName,
            uid,
            time: serverTimestamp()
        });
        setMsg("");
        scroll.current.scrollIntoView({behavior: "smooth"});
    };

    const [msg, setMsg] = useState("");

    return (<form onSubmit={sendMessage} className={style.form}>
        <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className={style.msgInput} type="text"
            placeholder="Tell me about everything"
        />
        <button className={style.subBtn} type="submit">Send</button>
    </form>);
};

export default MessageForm;