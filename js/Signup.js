const firebaseConfig = {
  apiKey: "AIzaSyAZfXY-ly6rGdCPzYJzvuD71olzP1O6WdQ",
  authDomain: "database2023-85f28.firebaseapp.com",
  projectId: "database2023-85f28",
  storageBucket: "database2023-85f28.appspot.com",
  messagingSenderId: "37672644668",
  appId: "1:37672644668:web:57cbeaa9159c964e75d339",
  measurementId: "G-PZMM403QE2"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailAddress = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();
  var confirmPassword = $('input[name="cpassword"]').val();
  console.log(username, email, password, cpassword);

  // Check if Password and Confirm Password fields are the same, if not, display an error message
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return;
  } 

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      console.log(user);
      user.updateProfile({
        displayName: username,
        //photoURL: "https://example.com/jane-q-user/profile.jpg"
        //email: emailAddress
        //textarea: "This is my bio"
      });
      console.log(user.displayName + "You are signed up");
      window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
