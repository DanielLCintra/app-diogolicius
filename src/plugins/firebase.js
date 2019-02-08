import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDN5I4wAGppvLRJdoNC5_On70C-QtdbgKQ',
  authDomain: 'diogolicious-99d60.firebaseapp.com',
  databaseURL: 'https://diogolicious-99d60.firebaseio.com',
  projectId: 'diogolicious-99d60',
  storageBucket: 'diogolicious-99d60.appspot.com',
  messagingSenderId: '721959751205'
}

const connection = firebase.initializeApp(config)

const DB = connection.database()
const AUTH = connection.auth()

export default function install(Vue, { router }) {
  AUTH.onAuthStateChanged((user) => {
    if (!user) {
      router.push({ name: 'auth.index' })
    }
  })

  Object.defineProperties(Vue.prototype, {
    $db: {
      get() {
        return DB
      }
    },
    $auth: {
      get() {
        return AUTH
      }
    }
  })
}
