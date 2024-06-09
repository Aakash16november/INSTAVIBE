import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Messages from "./Messages";




const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<Messages/>
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;