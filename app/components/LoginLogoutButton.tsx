import { Link } from "remix";

function LoginLogoutButton ({ user }: any): JSX.Element {
    console.log(user)
	return (
		<>
			{user ? (
				<div>
					<form action="/logout" method="post">
						<button type="submit">Logout</button>
					</form>
				</div>
			) : (
				<Link to="/login">Login</Link>
			)}
		</>
	);
}

export default LoginLogoutButton;
