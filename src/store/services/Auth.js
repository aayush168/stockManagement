import firebase from "../../firebase/init"

export function login(payload) {
  return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(err => {
    throw 'Invalid Email or Password'
  })
}

export function signUpUser(payload) {
  console.log(payload)
  return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch(err => {
    throw err
  })
}
