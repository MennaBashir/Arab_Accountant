import { Link } from "react-router-dom";
import CommonHead from "../../commonHead/CommonHead";
import data from "./../../../mock-api/data.js";
import "./FaqPost.css";
function FaqPost() {
    const { postsfaq } = data;
    return (
        <div className="faqpost mb-5">
            <CommonHead headTitle={"المشاركات الشائعة"} />
            {postsfaq.map((el) => {
                return (
                    <Link to={`/${el.id}`} className="faq" key={el.id}>
                        <img src={el.imag} alt="notFound" />
                        <h1>{el.title}</h1>
                    </Link>

                )
            })}

        </div>
    )
}
export default FaqPost;