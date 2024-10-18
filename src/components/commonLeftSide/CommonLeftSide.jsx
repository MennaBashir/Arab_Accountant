import Ads from "./ads/Ads";
import FaqPosts from "./faqPosts/FaqPost";
import ContactUs from "./contactUs/ContactUs";

function CommonLeftSide() {
    return (
        <>
            <Ads />
            <FaqPosts />
            <ContactUs />
        </>
    )
}
export default CommonLeftSide;