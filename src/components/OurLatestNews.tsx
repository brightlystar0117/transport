// const data = [
//     {
//         imgUrl: ''
//     }
// ]

import SubText from "./subtext";

const OurLatestNews = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <SubText key={'blog'} content={'Our blog'}/>
                <div className="font-myRubic font-semibold text-[35px] mx-auto text-heading">
                    Our Latest News
                </div>
            </div>
        </div>
    )
}
export default OurLatestNews;