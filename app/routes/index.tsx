import LoginLogoutButton from "~/components/Buttons/LoginLogoutButton";
import RegisterButton from "~/components/Buttons/RegisterButton";

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
