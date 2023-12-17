import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';
import { getFunctions } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDVqHmIy9qnx50aLpHDBT8A8mtMNOqEWBU',
	authDomain: 'bored-app-f31ec.firebaseapp.com',
	projectId: 'bored-app-f31ec',
	storageBucket: 'bored-app-f31ec.appspot.com',
	messagingSenderId: '239940423467',
	appId: '1:239940423467:web:cbe13c9dbe065fa174bf6e',
	measurementId: 'G-BGPNDCKLXP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);

export {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
};
