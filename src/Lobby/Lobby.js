import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';

const Lobby = () => {
	const { email, displayName, uid } = useUser();
	const lobbyCollection = useFirestore().collection('lobby');
	const lobby = useFirestoreCollectionData(lobbyCollection);

	const userInLobby = lobby.find((m) => m.email === email);

	const joinLobby = async () => {
		await lobbyCollection
			.doc(uid)
			.set({ email, displayName, ready: false });
	};

	const leaveLobby = async () => {
		await lobbyCollection.doc(uid).delete();
	};

	const toggleReadiness = async (newReadiness) => {
		await lobbyCollection
			.doc(uid)
			.set({ ready: newReadiness }, { merge: true });
	};
	return (
		<div className="container is-fluid">
			{lobby.map((m) => {
				return (
					<article
						key={m.email}
						className="tile is-child notification"
					>
						<p className="title">
							{m.displayName} -{' '}
							{m.ready ? 'Ready 🎮' : 'Not Ready ❌'}
						</p>
					</article>
				);
			})}
			<div className="columns">
				{userInLobby && (
					<div className="column is-1">
						<button
							className="button is-primary"
							onClick={() => toggleReadiness(!userInLobby.ready)}
						>
							{userInLobby.ready ? 'Pas pret' : 'Ready!'}
						</button>
					</div>
				)}
				<div className="column is-1">
					{userInLobby ? (
						<button
							className="button is-primary"
							onClick={leaveLobby}
						>
							Quitter
						</button>
					) : (
						<button
							className="button is-primary"
							onClick={joinLobby}
						>
							Rejoindre
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Lobby;
