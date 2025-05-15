// Arreglos para almacenar la información de los gastos
let listaNombreGastos = [];
let listaDescripcionesGastos = [];
let listaValoresGastos = [];
let gastoEnEdicion = null; // Índice del gasto que se está editando

/**
 * Maneja el clic del botón principal.
 * Agrega o actualiza un gasto luego de validar todos los campos.
 * No permite campos vacíos ni valores no válidos.
 * @returns {void}
 */
function clickBoton() {
  const nombreGasto = document.getElementById("nombreGasto").value.trim();
  const descripcionGasto = document
    .getElementById("descripcionGasto")
    .value.trim();
  const valorGastoInput = document.getElementById("valorGasto").value.trim();
  const valorGasto = Number(valorGastoInput);

  // Validación: campos vacíos
  if (!nombreGasto || !descripcionGasto || !valorGastoInput) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validación: nombre y descripción con al menos 3 caracteres
  if (nombreGasto.length < 3) {
    alert("El nombre del gasto debe tener al menos 3 caracteres.");
    return;
  }

  if (descripcionGasto.length < 3) {
    alert("La descripción debe tener al menos 3 caracteres.");
    return;
  }

  // Validación: valor numérico positivo
  if (isNaN(valorGasto) || valorGasto <= 0) {
    alert("El valor del gasto debe ser un número mayor a cero.");
    return;
  }

  // Advertencia si el valor excede cierto monto
  if (valorGasto > 2500) {
    alert("Advertencia: El gasto registrado supera los $2,500 MXN.");
  }

  if (gastoEnEdicion !== null) {
    // Actualizar un gasto existente
    listaNombreGastos[gastoEnEdicion] = nombreGasto;
    listaDescripcionesGastos[gastoEnEdicion] = descripcionGasto;
    listaValoresGastos[gastoEnEdicion] = valorGasto;

    gastoEnEdicion = null;
    document.getElementById("botonFormulario").textContent = "Agregar Gasto";
  } else {
    // Agregar un nuevo gasto
    listaNombreGastos.push(nombreGasto);
    listaDescripcionesGastos.push(descripcionGasto);
    listaValoresGastos.push(valorGasto);
  }

  actualizarListaGastos();
}

/**
 * Recorre las listas y genera el HTML de la lista de gastos.
 * Calcula y muestra el total mensual formateado con comas.
 * @returns {void}
 */
function actualizarListaGastos() {
  const listaElementos = document.getElementById("listaDeGastos");
  const totalElementos = document.getElementById("totalGastos");

  let htmlLista = "";
  let totalGastos = 0;

  listaNombreGastos.forEach((nombre, index) => {
    const valor = listaValoresGastos[index];
    const descripcion = listaDescripcionesGastos[index];

    htmlLista += `
      <li>
        <strong>${nombre}:</strong>
        <span>${descripcion}</span> -
        <strong>MXN $${formatearMoneda(valor)}</strong>
        <button class="editar-gasto" onclick="editarGasto(${index});">Editar</button>
        <button class="eliminar-gasto" onclick="eliminarGasto(${index});">Eliminar</button>
      </li>
    `;

    totalGastos += valor;
  });

  listaElementos.innerHTML = htmlLista;
  totalElementos.textContent = formatearMoneda(totalGastos);
  limpiar();
}

/**
 * Limpia todos los campos del formulario.
 * @returns {void}
 */
function limpiar() {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("descripcionGasto").value = "";
  document.getElementById("valorGasto").value = "";
}

/**
 * Elimina un gasto de las listas según su índice.
 * @param {number} index - Índice del gasto a eliminar.
 * @returns {void}
 */
function eliminarGasto(index) {
  listaNombreGastos.splice(index, 1);
  listaDescripcionesGastos.splice(index, 1);
  listaValoresGastos.splice(index, 1);
  actualizarListaGastos();
}

/**
 * Carga los datos de un gasto en el formulario para su edición.
 * @param {number} index - Índice del gasto a editar.
 * @returns {void}
 */
function editarGasto(index) {
  document.getElementById("nombreGasto").value = listaNombreGastos[index];
  document.getElementById("descripcionGasto").value =
    listaDescripcionesGastos[index];
  document.getElementById("valorGasto").value = listaValoresGastos[index];

  gastoEnEdicion = index;
  document.getElementById("botonFormulario").textContent = "Actualizar Gasto";
}

/**
 * Formatea un número como moneda mexicana con comas.
 * @param {number} valor - Cantidad a formatear.
 * @returns {string} - Valor formateado como "1,500.00"
 */
function formatearMoneda(valor) {
  return valor.toLocaleString("es-MX", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
