let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let nuevoSueldo : number = 0;
  let sueldoActual : number = Number(dato1.value);
  if ( 0 < sueldoActual && sueldoActual <= 15000 ) {
    nuevoSueldo = sueldoActual*1.2;
    console.log("Ud. tiene un aumento del 20% - Su nuevo sueldo es : " + nuevoSueldo);
  } else if ( 15001 < sueldoActual && sueldoActual <= 20000 ) {
    nuevoSueldo = sueldoActual*1.1;
    console.log("Ud. tiene un aumento del 10% - Su nuevo sueldo es : " + nuevoSueldo);
  } else if ( 20001 < sueldoActual && sueldoActual <= 25000 ) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud. tiene un aumento del 5% - Su nuevo sueldo es : " + nuevoSueldo);
  } else {
    nuevoSueldo = sueldoActual;
    console.log("Ud. no tiene aumento");
  };
});