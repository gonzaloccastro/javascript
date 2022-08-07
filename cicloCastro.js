//certijo inicial
alert("Para reservar debes ser mayor de 18 años\no venir con una persona adulta.");
let respuestaEdad = parseInt(prompt("¿Cuántos años tenes?"));
if(respuestaEdad>=18){alert("Muy bien!\nAhora sí podemos tomarte la reserva.:)")}else{alert("Debes venir en compañía de una persona mayor a 18 años.");};
// Array Reservas
const reservas = [];
//Datos Reservas
let nombreIngresado = prompt("Primero ingresá un nombre para la reserva.");
if(nombreIngresado == "") {alert("VOLVÉ A EMPEZAR.\n\nEl nombre ingresado no es válido");};
//Datos contacto
let telefonoIngresado = prompt("Ingresar un teléfono de contacto.\n(XXX)-XXX-XXXX");
if(telefonoIngresado == ""){alert("VOLVÉ A EMPEZAR.\n\nEl número ingresado no es válido")};
//Nombre Personas
let personas = parseInt(prompt("¿Para cuánta gente es la reserva?\nExpresar en números."));
const listaPersonas = [];
do{let entrada = prompt("Cómo se llama esta persona?");
    listaPersonas.push(entrada);
    console.log(listaPersonas.length);
 }while(listaPersonas.length != personas);
 //Día
let diaIngresado = prompt("Ingresar un día para la reserva.\nRecordar que abrimos de miércoles a domingos");
if(diaIngresado == ""){alert("VOLVÉ A EMPEZAR.\n\nEl día ingresado no es válido")};
let horaIngresada = parseInt(prompt("Ingrese hora de llegada.\nRecordar que puede ser entre las 20 y las 24."));
if((horaIngresada<20)||(horaIngresada>24)){alert("VOLVÉ A EMPEZAR.\n\nRecordá que recién abrimos a las 20hs y ya después de las 24hs no podemos tomar reservas.")};
//Resumen Datos Reserva
let resumenReserva = "Detalle de tu reserva: "+"<br>"+"<br>"+"A nombre de: "+nombreIngresado+"<br>"+"Participantes: "+listaPersonas.join(", ")+"<br>"+"Contacto: "+telefonoIngresado+"<br>"+"Día de reserva: "+diaIngresado+"<br>"+"Hora de reserva: "+horaIngresada+"hs"+"<br>";
document.write(resumenReserva);

