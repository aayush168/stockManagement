import firebase from '@/firebase/init';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

export default db;