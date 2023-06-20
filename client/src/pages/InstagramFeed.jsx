import { SideNavbar } from "../components/SideNavbar";
import { InstaPosts } from "../components/InstaPosts";
import { StoriesBar } from "../components/StoriesBar";
import { Header } from "../components/Header/Header";

export const InstagramFeed = () => {
    return (
        <div className="max-h-screen w-[100%] overflow-hidden">
            <Header />
            <div className="flex">
                <SideNavbar />
                <div className="w-full">
                    <StoriesBar />
                    <InstaPosts />
                </div>
            </div>
        </div>
    );
};
