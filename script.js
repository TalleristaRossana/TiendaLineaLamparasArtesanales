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
  userPreference = "Save Cancelled!";
}
