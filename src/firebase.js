import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCE-UVa26lKS9iXVXVg7C1wvyAZp81dFU0',
	authDomain: 'todo-3707a.firebaseapp.com',
	projectId: 'todo-3707a',
	storageBucket: 'todo-3707a.appspot.com',
	messagingSenderId: '222621263272',
	appId: '1:222621263272:web:40f7d4a91de5eaa0e2299d',
	measurementId: 'G-GZLLVN8TLY',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
