function validation(e){
    e.preventDefault();

const Email = document.getElementById('Email').value;

const Password = document.getElementById('Password').value


if (Email === ""){
    document.getElementById("message").innerHTML = "Please Enter Your Email!"

    document.getElementById("message"). style.color= "red"
}

else if (Password === ""){
    document.getElementById("message").innerHTML = "Please Enter Your Password!"

    document.getElementById("message").style.color= "red"
}

else {
    document.getElementById("message").innerHTML = "Login Succesful!"

    document.getElementById("message").style.color= "green"
}

}