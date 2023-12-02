const firebaseConfig = {
    apiKey: "AIzaSyBpgD6LrojOkAv6mDRZmbQVHgrKjxzZX4Y",
    authDomain: "webappmailing-4bfca.firebaseapp.com",
    databaseURL: "https://webappmailing-4bfca-default-rtdb.firebaseio.com",
    projectId: "webappmailing-4bfca",
    storageBucket: "webappmailing-4bfca.appspot.com",
    messagingSenderId: "998211276007",
    appId: "1:998211276007:web:eb4c4c4a763d1dea972642",
    measurementId: "G-9889GG09K1"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
// Alert to indicate that the script has been executed
alert('JavaScript executed successfully!');