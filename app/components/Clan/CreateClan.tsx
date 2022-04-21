import { Form } from "remix";

function CreateClan({ users }: { users: [any] }) {
	return (
		<Form method="post">
			<label htmlFor="clan-name-input">Clan Name: </label>
			<input type="text" id="clan-name-input" name="clan-name" />
			{users.map((user) => (
				<div key={user._id}>
					<p>{user.username}</p>
					<label htmlFor={user._id}>Add Member</label>
					<input
						type="checkbox"
						id={user._id}
						name="member"
						value={user._id}
					/>
					{console.log("Create Clan", user._id)}
				</div>
			))}
			<button type="submit">Create Clan</button>
		</Form>
	);
}
export default CreateClan;
