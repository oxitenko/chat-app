import {useEffect, useRef, useState} from "react";
import Message from "./Message";
import {query, collection, orderBy, onSnapshot} from "firebase/firestore"
import {db} from "../firebase";
import MessageForm from "./MessageForm";

const style = {
    main: "flex flex-col p-[10px] pb-[70px] pt-[50px]"
}
const Chat = () => {

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('time'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    return (<>
        <main className={style.main}>
            {messages &&
                messages.map((message) => (
                    <Message key={message.id} message={message}/>
                ))}
        </main>
        <MessageForm scroll={scroll}/>
        <span ref={scroll}></span>
    </>);
};

export default Chat;