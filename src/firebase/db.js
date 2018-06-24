import firebase from './init';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

export default db;