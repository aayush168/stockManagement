import firebase from '@/firebase/init';
import store from '@/store';
import db from '@/firebase/db';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    console.log(user)
    const setUser = {
      id: user.uid,
      username: user.email,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    store.commit('setUser', setUser);
    router.push('/home');
  } else {
    store.commit('setUser', null);
  }
});