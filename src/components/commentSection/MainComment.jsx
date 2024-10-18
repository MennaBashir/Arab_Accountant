import "./styles.css";
import Comments from "./components/Comments";
import UserInput from "./components/UserInput";
import CommonHead from "../commonHead/CommonHead";
function MainComment() {
    return (
        <>
            <CommonHead headTitle={"أضف تعليق"} />
            <main className="comments">
                <div className="content-container">
                    <Comments />
                    <UserInput />
                </div>
            </main>
        </>
    )
}

export default MainComment