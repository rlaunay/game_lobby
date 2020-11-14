import firebase from 'firebase/app';
import {
	useAuth,
	AuthCheck,
	useFirestore,
	useFirestoreCollectionData,
	useUser,
} from 'reactfire';

import Navbar from './Navbar/Navbar';
import Lobby from './Lobby/Lobby';

const App = () => {
	const auth = useAuth();
	const signIn = async () => {
		await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};
	const signOut = async () => {
		await auth.signOut();
	};

	return (
		<>
			<Navbar signIn={signIn} signOut={signOut} />
			<AuthCheck fallback={<p>Tu n'est pas connecté...</p>}>
				<Lobby />
			</AuthCheck>
		</>
	);
};

export default App;
