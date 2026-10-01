// buscamos elemento por su id
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const btnModo = document.getElementById("btnModo");

// buscamos con un selector css
const btnSenal = document.querySelector(".btn-senal");
const mensaje = document.querySelector("#mensaje");
const estado = document.querySelector("#estado");

// evento 1: cambiar color y texto al hacer click
let archivoAbierto = false;

btnModo.addEventListener("click", function () {
  archivoAbierto = !archivoAbierto;

  // alterna la clase "oscuro" en el body
  document.body.classList.toggle("oscuro", archivoAbierto);

  if (archivoAbierto) {
    titulo.textContent = "Archivo clasificado: sin supervivientes";
    parrafo.textContent = "El registro se abre sin ceremonia. Hay nombres, fechas y una última anotación sin firmar: «Nadie vino a buscarnos». Los datos son todo lo que queda de ellos.";
    btnModo.textContent = "Cerrar el archivo";
    mensaje.textContent = "Archivo abierto.";
    estado.textContent = "ESTADO: LECTURA";
  } else {
    titulo.textContent = "Memorias de una ciudad vacía";
    parrafo.textContent = "Las torres siguen en pie, pero nadie recuerda quién las habitó. El viento cruza las calles y la maquinaria duerme entre la hierba. Aquí no queda nada que defender, y aun así seguimos observando.";
    btnModo.textContent = "Acceder al archivo";
    mensaje.textContent = "Archivo cerrado.";
    estado.textContent = "ESTADO: SIN SEÑAL";
  }
});

// evento 2: mensaje personalizado y alerta
btnSenal.addEventListener("click", function () {
  mensaje.textContent = "Señal enviada. Sin respuesta.";
  estado.textContent = "ESTADO: TRANSMITIENDO";
  alert("Transmisión enviada al vacío.\nNadie ha respondido todavía.");
});