import Whatdo from "./Whatdo";
import OurLatestNews from "@/components/OurLatestNews";

const HomePage = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="">
                <Whatdo />
                <OurLatestNews />
            </div>
        </div>
    )
}
export default HomePage;