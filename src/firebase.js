import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "https://chatbot.firebaseio.com",
  projectId: "chatbot",
  storageBucket: "chatbot.appspot.com",
  messagingSenderId: "123456789012",
  appId: "appId"
});

export const db = app.database();
export const usersRef = db.ref('analytics_ref');

export const errorMessages = {
  'auth/wrong-password': 'Contraseña incorrecta',
  'auth/invalid-email': 'Formato de correo incorrecto',
  'auth/email-already-in-use': 'Correo ya en uso',
  'auth/network-request-failed': 'No estas conectado a la red',
};
