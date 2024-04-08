import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData,} from "react-router-dom";
import News from "./News";

const Home = () => {


    const news = useLoaderData();
    console.log(news);


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                  {/* news container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <News
                        key={aNews._id}
                        news ={aNews}
                        > </News>)
                    }
                </div>

                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>


        </div>
    );
};

export default Home; 