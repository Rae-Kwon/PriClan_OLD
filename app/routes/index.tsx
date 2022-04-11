import LoginLogoutButton from "~/components/LoginLogoutButton";
import RegisterButton from "~/components/RegisterButton";

function Home() {
	return (
		<div>
			<h1>Welcome to PriClan</h1>
			<LoginLogoutButton />
			<RegisterButton />
		</div>
	);
}
export default Home;
