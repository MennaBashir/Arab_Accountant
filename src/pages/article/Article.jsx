import CommonLeftSide from "./../../components/commonLeftSide/CommonLeftSide";
import "./Article.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import share from "./../../assets/share-solid.svg";
import next from "./../../assets/forward.svg";
import prev from "./../../assets/backward.svg";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import {
    FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
    PinterestShareButton, PinterestIcon, LinkedinShareButton, LinkedinIcon
} from 'react-share';

import MainComment from "../../components/commentSection/MainComment";
function Article() {
    const { articleId } = useParams();
    const [topic, setTopic] = useState({});
    const [nextTopic, setNextTopic] = useState({});
    const [prevTopic, setPrevTopic] = useState({});
    const [maxId, setMaxId] = useState(0);
    const location = useLocation();
    const shareUrl = `${window.location.origin}${location.pathname}`;
    async function getPost() {
        try {
            const res = await axios.get(`https://elhana.sintac.shop/api/post/${articleId}`);
            setTopic(res.data);
        } catch (error) {

            console.log("Error:", error);
        }
    }
    async function getNextPrev() {
        try {
            const resNext = await axios.get(`https://elhana.sintac.shop/api/post/${Number(articleId) + 1}`);
            const resPrev = await axios.get(`https://elhana.sintac.shop/api/post/${Number(articleId) === 1 ? Number(articleId) : Number(articleId) - 1}`);
            setNextTopic(resNext.data);
            setPrevTopic(resPrev.data)
        } catch (error) {
            const resNext = await axios.get(`https://elhana.sintac.shop/api/post/${Number(articleId)}`);
            const resPrev = await axios.get(`https://elhana.sintac.shop/api/post/${Number(articleId) === 1 ? Number(articleId) : Number(articleId) - 1}`);
            setNextTopic(resNext.data);
            setPrevTopic(resPrev.data)
            setMaxId(Number(articleId))
        }
    }

    useEffect(() => {
        getNextPrev()
        getPost();
    }, [articleId]);
    return (
        <div className='d-flex row'>
            <div className='col-lg-8 col-12'>
                <div className="article">
                    <div className="bodyArticle">
                        {ReactHtmlParser(topic.content)}
                    </div>
                    <div className="shareArticle">
                        <p>شارك المقال
                            <img src={share} alt="noFound" />
                        </p>
                        <div className="icons">
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <PinterestShareButton url={shareUrl}>
                                <PinterestIcon size={32} round={true} />
                            </PinterestShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={32} round={true} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                    <div className="nextPrev">
                        <div className="next">
                            <Link to={`/${Number(articleId) === maxId ? Number(articleId) : Number(articleId) + 1}`}>
                                <div className="textnext">
                                    <img className="imgnext" src={next} alt="notFound" />
                                    <img src={nextTopic.img} alt="notFound" />
                                    <span> {nextTopic.sub_title}</span>
                                </div>

                            </Link>
                        </div>
                        <div className="prev">
                            <Link to={`/${Number(articleId) === 1 ? Number(articleId) : Number(articleId) - 1}`}>
                                <div className="textprev">
                                    <img src={prevTopic.img} alt="notFound" />
                                    <img className="imgprev" src={prev} alt="notFound" />

                                    <span> {prevTopic.sub_title}</span>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
                <MainComment />
            </div>
            <div className='col-lg-4 col-12'>
                <CommonLeftSide />
            </div>
        </div>

    )
}
export default Article;
