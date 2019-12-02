import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCaAsSbxkHIO4-Xa2qrp1t9aAwx6W0rmL4',
  authDomain: 'project01-73515.firebaseapp.com',
  databaseURL: 'https://project01-73515.firebaseio.com',
  projectId: 'project01-73515',
  storageBucket: 'project01-73515.appspot.com',
  messagingSenderId: '1097940410069',
  appId: '1:1097940410069:web:ed73782cf95ece7cb28c5c',
  measurementId: 'G-Z9YXF931ZT'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
