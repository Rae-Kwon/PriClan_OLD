import { Link } from "remix";

function LoginLogoutButton({ user }: any): JSX.Element {
	console.log(user);
	return (
		<>
			{user ? (
				<div>
					<form action="/logout" method="post">
						<button type="submit">Logout</button>
					</form>
				</div>
			) : (
				<button>
					<Link to="/login">Login</Link>
				</button>
			)}
		</>
	);
}

export default LoginLogoutButton;
