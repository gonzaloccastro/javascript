//certijo inicial
alert("Antes de reservar, debes responder un acertijo:\nTiene cuello, pero no cabeza.\n¿Qué es?");
let respuestaAdivinanza = prompt("Ingrese su respuesta en MAYÚSCULA");
while(respuestaAdivinanza != "BOTELLA"){respuestaAdivinanza=prompt("Ingrese otra respuesta en MAYÚSCULA");}{alert("Muy bien!\nAhora sí podemos tomarte la reserva.\n:)")};
//Datos Reservas
let nombreIngresado = prompt("Primero ingresá un nombre para la reserva.");
if(nombreIngresado == "") {alert("VOLVÉ A EMPEZAR.\n\nEl nombre ingresado no es válido");};
let telefonoIngresado = prompt("Ingresar un teléfono de contacto.\n(XXX)-XXX-XXXX");
if(telefonoIngresado == ""){alert("VOLVÉ A EMPEZAR.\n\nEl número ingresado no es válido")};
let diaIngresado = prompt("Ingresar un día para la reserva.\nRecordar que abrimos de miércoles a domingos");
if(diaIngresado == ""){alert("VOLVÉ A EMPEZAR.\n\nEl día ingresado no es válido")};
let horaIngresada = parseInt(prompt("Ingrese hora de llegada.\nRecordar que puede ser entre las 20 y las 24."));
if((horaIngresada<20)||(horaIngresada>24)){alert("VOLVÉ A EMPEZAR.\n\nRecordá que recién abrimos a las 20hs y ya después de las 24hs no podemos tomar reservas.")};
//Resumen Datos Reserva
let resumenReserva = "Detalle de tu reserva: "+"<br>"+"<br>"+"Nombre: "+nombreIngresado+"<br>"+"Contacto: "+telefonoIngresado+"<br>"+"Día de reserva: "+diaIngresado+"<br>"+"Hora de reserva: "+horaIngresada
document.write(resumenReserva);





