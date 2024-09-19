let listaNombreGastos = [];
let listaDescripcionesGastos = []; 
let listaValoresGastos = [];

function clickBoton() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let descripcionGasto = document.getElementById("descripcionGasto").value;
  let valorGasto = Number(document.getElementById("valorGasto").value); // Convertir a número

  console.log(nombreGasto);
  console.log(descripcionGasto);
  console.log(valorGasto);

  if (valorGasto > 150) {
    alert("Advertencia: El gasto registrado supera los 150 USD.");
  }

  listaNombreGastos.push(nombreGasto);
  listaDescripcionesGastos.push(descripcionGasto);
  listaValoresGastos.push(valorGasto);

  console.log(listaNombreGastos);
  console.log(listaDescripcionesGastos);
  console.log(listaValoresGastos);

  actualizarListaGastos();
}

function actualizarListaGastos() {
  const listaElementos = document.getElementById("listaDeGastos");
  const totalElementos = document.getElementById("totalGastos");

  let htmlLista = "";
  let totalGastos = 0;

  listaNombreGastos.forEach((elemento, posicion) => {
    const valorGasto = Number(listaValoresGastos[posicion]);
    const descripcionGasto = listaDescripcionesGastos[posicion];
    htmlLista += `<li><strong>${elemento}:</strong> <span>${descripcionGasto}</span> - <strong>USD ${valorGasto.toFixed(2)}</strong> 
    <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`;
    // Calculamos el total de gastos
    totalGastos += valorGasto;
  });

  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function limpiar() {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("descripcionGasto").value = ""; 
  document.getElementById("valorGasto").value = "";
}

function eliminarGasto(posicion) {
  listaNombreGastos.splice(posicion, 1);
  listaDescripcionesGastos.splice(posicion, 1); 
  listaValoresGastos.splice(posicion, 1);
  actualizarListaGastos();
}
