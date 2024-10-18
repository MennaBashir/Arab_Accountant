import CommonHead from '../components/commonHead/CommonHead';
import data  from "./../mock-api/data.js";
import CommonLeftSide from "./../components/commonLeftSide/CommonLeftSide";
import CommonTopics from "./../components/commonTopics/CommonTopics";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
function Organizations() {
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
        <div className='d-flex row'>
            <div className='col-lg-8 col-12'>
                <CommonHead headTitle={"منظمات ومؤسسات مهنية"} />
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
                        )
                    })
                }
                <Pagination onChange={handlePagination} color="primary"
                    count={Math.ceil(latesttopics.length / pageSize)} variant="outlined" shape="rounded" />

            </div>
            <div className='col-lg-4 col-12'>
                <CommonLeftSide />
            </div>
        </div>

    )
}
export default Organizations;