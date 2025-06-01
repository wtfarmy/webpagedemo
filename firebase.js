const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(res => {
    document.querySelector('#auth-buttons').innerHTML = `
      <button onclick="googleLogout()">Logout</button>
    `;
  });
}

function googleLogout() {
  auth.signOut().then(() => {
    location.reload();
  });
}