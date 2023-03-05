const cipher ={
  encode: function (desplazamiento,palabra) {
    let respuesta = ""
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    for (let i = 0; i < palabra.length; i++) {
      const ascii = palabra[i].charCodeAt();
      if ((ascii >= 65 && ascii <= 90)) {
        respuesta += String.fromCharCode((ascii - 'A'.charCodeAt(0) + desplazamiento) % 26
          + 'A'.charCodeAt(0));
      }  
      else {
        //respuesta += " ";
        throw new TypeError
      }
    }
    return respuesta;
  },
  decode: function (desplazamiento,palabra) {
    let respuesta = ""
    desplazamiento = desplazamiento  * (-1);
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    for (let i = 0; i < palabra.length; i++) {
      const ascii = palabra[i].charCodeAt();
      if ((ascii >= 65 && ascii <= 90)) {
        respuesta += String.fromCharCode((ascii - 'A'.charCodeAt(0) + desplazamiento) % 26
          + 'A'.charCodeAt(0));
      } 
      else {
        //respuesta += " ";
        throw new TypeError
      }
    }
    return respuesta;
  }
};
export default cipher;