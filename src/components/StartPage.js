const style = {
    startContainer: "h-[80vh] flex items-center",
    startHeader: "text-3xl center",
    footer: "bg-black h-20 w-full max-w-[728px]"
}
const StartPage = () => {
    return (
        <>
            <div className={style.startContainer}>
                <h1 className={style.startHeader}>Are you talking to yourself? <br/> Now online in our chat! This is
                    progress</h1>
            </div>
            <div className={style.footer}></div>
        </>
    );
};

export default StartPage