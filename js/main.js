//Poder consultar y extraer saldo de un cajero


let saldoTotal = 30000;
let seguir = true;

while (seguir) {
  let opcion = prompt(`Seleccione la siguiente operación: 
                1. CONSULTAR SALDO
                2. EXTRAER DINERO
                3. SALIR`);

  switch (opcion) {
    case "1":
      consultarSaldo();
      break;
    case "2":
      extraccion();
      break;
    case "3":
      salir();
      seguir = false;
      break;
    default:
      alert("Ingrese una opción correcta");
      break;
  }
}

function consultarSaldo() {
  alert("Su saldo actual es $" + saldoTotal);
}

function salir() {
  alert("¡NO SE OLVIDE DE RETIRAR LA TARJETA! GRACIAS.");
}

function extraccion() {
  let opcionCorrecta = false;
  let dineroIngresado;
  while (opcionCorrecta === false) {
    dineroIngresado = Number(
      prompt(`¿Cuanto quiere retirar? Solo puede ingresar:
                                        $2500 
                                        $4000 
                                        $10000`)
    );
    console.log(dineroIngresado);
    if (
      dineroIngresado === 2500 ||
      dineroIngresado === 4000 ||
      dineroIngresado === 10000
    ) {
      opcionCorrecta = true;
      saldoTotal -= dineroIngresado;
      console.log(saldoTotal);
    } else {
      alert("El monto es invalido, pruebe de nuevo");
    }
  }

  alert(
    "Usted extrajo $" + dineroIngresado + ". Su saldo restante es $" + saldoTotal
  );
}
