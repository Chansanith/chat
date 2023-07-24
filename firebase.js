firebase.initializeApp({
  apiKey: "AIzaSyC0dcHIWZHM8bgqCy-VtHnhdi6xZ4AUCHQ",
  authDomain: "chat-app-481d2.firebaseapp.com",
  projectId: "chat-app-481d2",
  storageBucket: "chat-app-481d2.appspot.com",
  messagingSenderId: "282153294471",
  appId: "1:282153294471:web:dd62013c1ddc99ceecb622",
  measurementId: "G-E4RMPSGS00"
});
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
