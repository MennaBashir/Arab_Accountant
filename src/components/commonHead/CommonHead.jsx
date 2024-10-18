import "./CommonHead.css";
function CommonHead({ headTitle }) {
    return (
        <div className="commonHead mb-4">
            <h1>
                <span>{headTitle}</span>
                <span></span>
            </h1>
        </div>
    )
}
export default CommonHead;