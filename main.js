// const variedades = [
//     { variedad: "espresso", precio: 20, stock: 10 },
//     { variedad: "latte", precio: 25, stock: 15 },
//     { variedad: "cappuccino", precio: 30, stock: 8 },
//     { variedad: "americano", precio: 18, stock: 20 },
//     { variedad: "mocha", precio: 28, stock: 12 },
// ];


// const variedadSeleccionada = prompt("Ingrese la variedad de café que desea, puede ser: Espresso, Latte, Cappuccino, Americano, Mocha").toLowerCase();
// const variedadEncontrada = variedades.find(v => v.variedad === variedadSeleccionada);

// if (variedadEncontrada) {
//     const cantidad = parseInt(prompt(`¿Cuántas unidades de ${variedadSeleccionada} desea? (Stock disponible: ${variedadEncontrada.stock})`), 10);
//     if (cantidad > 0 && cantidad <= variedadEncontrada.stock) {
//         const total = cantidad * variedadEncontrada.precio;
//         alert(`El total a pagar por ${cantidad} unidades de ${variedadSeleccionada} es $${total}. Gracias por su compra.`);
//         variedadEncontrada.stock -= cantidad;
//     } else {
//         alert("Cantidad inválida o stock insuficiente.");
//     }
// } else {
//     alert("Variedad de café no disponible.");
// }


// SIMULADOR DE COMPRA DE CAFÉ ☕

const cafesDisponibles = [
  { nombre: "Espresso", precio: 800 },
  { nombre: "Latte", precio: 950 },
  { nombre: "Capuccino", precio: 1000 },
  { nombre: "Americano", precio: 750 }
];


function mostrarMenu() {
  let mensaje = "Nuestros cafés disponibles:\n";
  for (let i = 0; i < cafesDisponibles.length; i++) {
    mensaje += `${i + 1}. ${cafesDisponibles[i].nombre} - $${cafesDisponibles[i].precio}\n`;
  }
  return mensaje;
}


function calcularTotal(pedidos) {
  let total = 0;
  for (let i = 0; i < pedidos.length; i++) {
    total += pedidos[i].precio;
  }
  
  if (total >= 3000) {
    alert("¡Felicitaciones! Obtuviste un 10% de descuento por tu compra.");
    total = total * 0.9;
  }
  return total;
}


alert("¡Bienvenido a El Café Hermanos ☕!\nSimulador de compra de café.");

let continuarCompra = true;
let pedidos = [];

while (continuarCompra) {
  
  let opcion = prompt(mostrarMenu() + "\nIngresá el número del café que querés comprar:");


  let indice = parseInt(opcion) - 1;

  if (indice >= 0 && indice < cafesDisponibles.length) {
    let cafeElegido = cafesDisponibles[indice];
    pedidos.push(cafeElegido);
    alert(`Agregaste un ${cafeElegido.nombre} a tu pedido.`);
  } else {
    alert("Opción inválida. Por favor elegí un número del 1 al 4.");
  }

  continuarCompra = confirm("¿Querés agregar otro café?");
}

if (pedidos.length > 0) {
  let totalFinal = calcularTotal(pedidos);

  let resumen = "Tu pedido:\n";
  for (let i = 0; i < pedidos.length; i++) {
    resumen += `- ${pedidos[i].nombre}: $${pedidos[i].precio}\n`;
  }

  resumen += `\nTotal a pagar: $${totalFinal.toFixed(2)}`;
  alert(resumen);
  console.log("Pedido final:", pedidos, "Total:", totalFinal);
} else {
  alert("No realizaste ninguna compra. ¡Te esperamos la próxima!");
}
