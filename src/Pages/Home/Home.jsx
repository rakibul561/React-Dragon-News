import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-4xl">news comming soon...</h2>
                     </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
    
            
        </div>
    );
};

export default Home; 