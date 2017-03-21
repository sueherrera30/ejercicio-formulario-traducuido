function translate(){
var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];// escoge el primer elemento del array
var button = document.getElementsByClassName("btn")[0];//igual con indice 0, elige primer elemento.
title.innerHTML = "Por favor incia sesión";
email.placeholder = "Correo Electronico";
password.placeholder ="Contraseña";
remember.innerHTML ="Recordar Datos";
button.innerHTML ="Iniciar Sesión";
}
translate();


function mostrar(){
  var email = document.getElementById('inputEmail').value;
  var contra =document.getElementById('inputPassword').value;
  var titulo=document.getElementById("titulo");
  var correo =document.getElementById("correo");
  var password =document.getElementById("contra");
  titulo.innerHTML= "Datos del formulario";
  correo.innerHTML ="El correo electronico ingresado es: " +email;
  password.innerHTML = "La contraseña ingresada es :" + contra;

}
