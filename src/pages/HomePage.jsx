import face from "./../assets/face.jpg";
import LatestNews from "./../components/latestNews/LatestNews";
import CommonHead from "../components/commonHead/CommonHead";
import CommonLeftSide from "./../components/commonLeftSide/CommonLeftSide";
import CommonTopics from "../components/commonTopics/CommonTopics";
import data  from "./../mock-api/data.js";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
function HomePage() {
    const { latesttopics } = data;
    const pageSize = 4;
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    });
    const handlePagination = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page + 1) * 2 * pageSize;
        setPagination({ ...pagination, from: from, to: to });
    }
    return (
        <div>
            <LatestNews />
            <div className='d-flex row'>
                <div className='col-lg-8 col-12'>
                    <div className="mb-4">
                        <a href={"https://www.facebook.com/DARElkhebrahOffice"} target="_blank">
                            <img className="mw-100" src={face} alt="notFound" />
                        </a>
                    </div>
                    <div className="mb-5">
                        <CommonHead headTitle={"آخر المواضيع"} />
                        {
                            latesttopics.slice(pagination.from, pagination.to).map((el) => {
                                return (
                                    <CommonTopics
                                        key={el.id}
                                        id={el.id}
                                        image={el.image}
                                        badge={el.badge}
                                        title={el.title}
                                        namePerson={el.namePerson}
                                        date={el.date}
                                        pargraph={el.pargraph}
                                    />
                                );

                            })
                        }
                        <Pagination onChange={handlePagination} color="primary"
                            count={Math.ceil(latesttopics.length / pageSize)} variant="outlined" shape="rounded" />

                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <CommonLeftSide />
                </div>
            </div>
        </div>
    )
}
export default HomePage;