alert("¡Hola mujeres emprendedoras!");
function ask_name() {
  visiter_name = prompt("Nos podrías dar tu nombre: ")
  if(visiter_name != null && visiter_name != "")
    alert("Hola " + visiter_name +" te invitamos a ser emprendedora y a desarrollar tu autonomía económica.");
  else
    alert("No se ingreso nombre ...!")
}
var userPreference;

if (confirm("¿Deseas saber acerca de autonomía económica de las  mujeres?") == true) {
  userPreference = ask_name();
}
else {
  userPreference = "Cancelado!";
}

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById('time').innerHTML=today;
