import "./CommonTopics.css";
import { Link } from "react-router-dom";
import calendar from "./../../assets/calendar.svg";
import arrow1 from "./../../assets/arrow1.svg";
import user from "./../../assets/user.svg";
function CommonTopics({ id, image, badge, title, namePerson, date, pargraph }) {
    return (
        <>
            <Link to={`/${id}`}>
                <div className="oneTopic">
                    <div className="imag">
                        <img src={image} />
                        <span className="badge">{badge}</span>
                    </div>
                    <div className="text">
                        <h1>
                            {title}
                        </h1>
                        <div className="namePerson">
                            <span>
                                <img className="ps-1" src={user} alt="notFound" />
                                {namePerson}
                            </span>
                            <span className="ps-3">
                                <img className="px-1" src={calendar} alt="notFound" />
                                {date}
                            </span>
                        </div>
                        <p>{pargraph}...</p>
                        <span className="arrow">
                            <span>اقرأ المزيد</span>
                            <img src={arrow1} alt="notFound" />
                        </span>
                    </div>
                </div>
            </Link>
        </>

    )
}
export default CommonTopics;