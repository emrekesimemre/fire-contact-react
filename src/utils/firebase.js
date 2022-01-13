import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDKKzVkWXHA0SNt1pgvAH4oPJcMTtrQkYc',
  authDomain: 'firecontact-510c0.firebaseapp.com',
  databaseURL: 'https://firecontact-510c0-default-rtdb.firebaseio.com',
  projectId: 'firecontact-510c0',
  storageBucket: 'firecontact-510c0.appspot.com',
  messagingSenderId: '603043511741',
  appId: '1:603043511741:web:1c5b783785684cc994a6d4',
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
