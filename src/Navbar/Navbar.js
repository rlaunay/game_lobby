import AuthButtons from './../AuthButtons/AuthButtons';

const Navbar = (props) => (
	<nav className="navbar">
		<div className="navbar-brand">Game lobby</div>
		<div className="navbar-menu">
			<div className="navbar-start"></div>
			<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
						<AuthButtons
							signIn={props.signIn}
							signOut={props.signOut}
						/>
					</div>
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;
