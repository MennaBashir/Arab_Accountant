import './BarAnimation.css';
import Badge from 'react-bootstrap/Badge';
import data from "./../../mock-api/data.js";
import rocket from "./../../assets/rocket.svg";
import { Link } from "react-router-dom";
function BarAnimation() {
    const { latestnews } = data;
    return (
        <div className='latest'>
            <div className='imag'>
                <img src={rocket} alt='notFound' />
                اخر الأخبار
            </div>
            <div className='bar'>
                <div className='animated-text'>
                    <ul>
                        {
                            latestnews.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <Link to={`/${el.id}`}>
                                            <img src={el.image} alt='notFound' />
                                            <Badge>{el.badge}</Badge>
                                            <span>{el.title}</span>
                                        </Link>
                                    </li>
                                )
                            })

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default BarAnimation;