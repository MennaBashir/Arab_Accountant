import "./LatestNews.css";
import { Card } from 'react-bootstrap';
import user from "./../../assets/user.svg";
import calendar from "./../../assets/calendar.svg";
import arrow from "./../../assets/arrow.svg";
import data from "./../../mock-api/data.js";
import { Link } from "react-router-dom";
function LatestNews() {
  const { latestnews } = data;
  return (
    <div className="latestNews">
      {
        latestnews.map((el) => {
          return (
            <Card className="card-latest" key={`1${el.id}`}>
              <Link to={`/${el.id}`}>
                <Card.Img variant="top" src={el.image} alt="notFound" />
                <span className="badge cardBadge">{el.badge}</span>
                <Card.Body>
                  <Card.Title className="cardTitle">{el.title}</Card.Title>
                  <Card.Text className="cardText">
                    <span>
                      {el.namePerson}
                      <img className="ps-1" src={user} alt="notFound" />
                    </span>
                    <span className="ps-3">
                      <img className="pe-1" src={calendar} alt="notFound" />
                      {el.date}
                    </span>
                  </Card.Text>
                  <br />
                  <span className="cardFooter">
                    <img src={arrow} alt="notFound" />
                    <span>اقرأ المزيد</span>
                  </span>
                </Card.Body>
              </Link>
            </Card>
          )
        })

      }
    </div>
  );
}
export default LatestNews