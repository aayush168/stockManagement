import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyD4NKrGzeNfYmVxdZIl4QGmLUJR-iBY4lw',
  authDomain: 'stockmanagement-d7de1.firebaseapp.com',
  databaseURL: 'https://stockmanagement-d7de1.firebaseio.com',
  projectId: 'stockmanagement-d7de1',
  storageBucket: 'stockmanagement-d7de1.appspot.com',
  messagingSenderId: '476042849499'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true }) // fireStore setting

export default firebaseApp