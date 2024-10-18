import CommonHead from '../components/commonHead/CommonHead';
import data  from "./../mock-api/data.js";
import CommonLeftSide from "./../components/commonLeftSide/CommonLeftSide";
import CommonTopics from "./../components/commonTopics/CommonTopics";
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Accounting() {
    const { latesttopics } = data;
    const [metaData, setMetaData] = useState({})
    async function getMetaData() {
        try {
            const res = await axios.get("https://elhana.sintac.shop/api/categories");
            setMetaData(res.data);
        } catch (error) {

            console.log("Error:", error);
        }
    }

    useEffect(() => {
        getMetaData();
    }, []);
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
        <HelmetProvider>
            <Helmet>
                <title>{metaData.title}</title>
                <meta name="description" content={metaData.description} />
                <meta name="keywords" content={metaData.kays} />
            </Helmet>
            <div className='d-flex row'>
                <div className='col-lg-8 col-12 mb-5'>
                    <CommonHead headTitle={"قسم المحاسبة"} />
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
        </HelmetProvider>

    )
}
export default Accounting;