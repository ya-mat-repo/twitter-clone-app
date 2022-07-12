import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyDN7MzCFh-yVIi1K4vbHpfMbOcrYJIut3w',
  // authDomain: 'twitter-clone-app-a996d.firebaseapp.com',
  // projectId: 'twitter-clone-app-a996d',
  // storageBucket: 'twitter-clone-app-a996d.appspot.com',
  // messagingSenderId: '1080302124358',
  // appId: '1:1080302124358:web:3433c913b02d98266c7947',

  // twitter-clone-app2
  apiKey: 'AIzaSyC3w-T-tPkDHTFW7SSxbMKQIWS0LmOxg1E',
  authDomain: 'twitter-clone-app2.firebaseapp.com',
  projectId: 'twitter-clone-app2',
  storageBucket: 'twitter-clone-app2.appspot.com',
  messagingSenderId: '996950258624',
  appId: '1:996950258624:web:8cfe07ca37afbcfcc78e25',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
