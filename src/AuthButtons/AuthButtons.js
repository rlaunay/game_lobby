import { AuthCheck } from 'reactfire';

const AuthButtons = (props) => {
	return (
		<AuthCheck
			fallback={
				<button className="button is-primary" onClick={props.signIn}>
					Sign In
				</button>
			}
		>
			<button className="button is-info" onClick={props.signOut}>
				Sign Out
			</button>
		</AuthCheck>
	);
};

export default AuthButtons;
