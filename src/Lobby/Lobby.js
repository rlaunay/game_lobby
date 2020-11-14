const Lobby = (props) => {
	return (
		<div className="container is-fluid">
			{props.lobby.map((m) => {
				return (
					<article className="tile is-child notification">
						<p className="title">
							{m.displayName} -{' '}
							{m.ready ? 'Ready 🎮' : 'Not Ready ❌'}
						</p>
					</article>
				);
			})}
		</div>
	);
};

export default Lobby;
