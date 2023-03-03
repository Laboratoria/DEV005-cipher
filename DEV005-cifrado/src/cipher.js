const cipher ={
  encode: function (desplazamiento,palabra) {
    let respuesta = ""
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    for (let i = 0; i < palabra.length; i++) {
      const ascii = palabra[i].charCodeAt();
      if ((ascii >= 65 && ascii <= 90)) {
        respuesta += String.fromCharCode((ascii - 'A'.charCodeAt(0) + desplazamiento) % 26
          + 'A'.charCodeAt(0));
      } else if (ascii >= 97 && ascii <= 122) {
        respuesta += String.fromCharCode((ascii - 'a'.charCodeAt(0) + desplazamiento) % 26
          + 'a'.charCodeAt(0));
      } else {
        respuesta += palabra[i]
      }
    }
    return respuesta;
  },
  decode: function (desplazamiento,palabra) {
    let respuesta = ""
    desplazamiento = desplazamiento  * (-1)
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    for (let i = 0; i < palabra.length; i++) {
      const ascii = palabra[i].charCodeAt();
      if ((ascii >= 65 && ascii <= 90)) {
        respuesta += String.fromCharCode((ascii - 'A'.charCodeAt(0) + desplazamiento) % 26
          + 'A'.charCodeAt(0));
      } else if (ascii >= 97 && ascii <= 122) {
        respuesta += String.fromCharCode((ascii - 'a'.charCodeAt(0) + desplazamiento) % 26
          + 'a'.charCodeAt(0));
      } else {
        respuesta += palabra[i]
      }
    }
    console.log('ver:', respuesta);
    return respuesta;
  }
};


export default cipher;

// function VaciarCajas ( )  {
//   document.getElementById("textooriginal").value = "";
//   document.getElementById("espaciado").value = "";
//   document.getElementById("result").value = "";
// }
// function VaciarCajasD() {
//   document.getElementById("textodescifrado").value = "";
//   document.getElementById("espaciadod").value = "";
//   document.getElementById("resultd").value = "";
// }


