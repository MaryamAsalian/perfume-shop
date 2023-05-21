const password = document.querySelector(".password");
const username = document.querySelector(".username");
const usernamemsg = document.querySelector(".username-msg");
const passwordmsg = document.querySelector(".password-msg");
const loginbtn = document.querySelector(".btn");
const loginstatus = document.querySelector(".login-status");

loginbtn.addEventListener("click", logIn);



function logIn() {
//   event.PreventDefult();

const usernamevalid = username.value;
const passwordvalid = password.value;



  if (passwordvalid.length === 0) {
    passwordmsg.innertext = "please enter password";

  }
 
  else if (passwordvalid.length <= 4) {
    passwordmsg.innerText = "your password is tooshort";

  }

  if (usernamevalid.length === 0) {
    usernamemsg.innerText = "please enter username";

  }
  if (
    !usernamevalid.match 
    (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
    usernamemsg.innerText = "please entervalid username";
   
  }
  else loginstatus.innerText="sucsses"
}