export function getAuthenticatedUser(user) {
	return {
		email: user.email,
		uid: user.uid,
		displayName: user.displayName,
		photoUrl: user.photoURL,
	};
}
