// function sub() {
// const user=document.getElementById("user").value;
// const pass=document.getElementById("pass").value;
// alert(`Username: ${user}
//        password: ${pass}`)
// console.log(user);
// }
function ValidateEmail()
{ const inputText=document.getElementById("user");
  const mk=document.getElementById("pass").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
        {
        alert("Valid email address!");
        if (mk.length >=8) alert("Valid password"); else 
        alert("You have entered an invalid password!"); 
        document.form1.text1.focus();
        return true;
        }
    else
        {
        alert("You have entered an invalid email address!");
        if (mk.length >=8) alert("Valid password"); else 
        alert("You have entered an invalid password!"); 
        document.form1.text1.focus();
        return false;
        }
}