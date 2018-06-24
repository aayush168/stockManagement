import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD4NKrGzeNfYmVxdZIl4QGmLUJR-iBY4lw',
  authDomain: 'stockmanagement-d7de1.firebaseapp.com',
  databaseURL: 'https://stockmanagement-d7de1.firebaseio.com',
  projectId: 'stockmanagement-d7de1',
  storageBucket: 'stockmanagement-d7de1.appspot.com',
  messagingSenderId: '476042849499'
}

firebase.initializeApp(config)

export default firebase