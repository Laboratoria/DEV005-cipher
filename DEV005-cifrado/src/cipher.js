//const cipher = {
  // ...
//};

function CifrarMsj() {
  var palabra = document.getElementById("textooriginal").value;
  var desplazamiento = document.getElementById("espaciado").value;
  var respuesta = ""
  desplazamiento = (desplazamiento%26 + 26) % 26;
  for ( var i = 0; i < palabra.length ; i++) {
    var ascii = palabra[i].charCodeAt();
    if ((ascii >= 65 && ascii <= 90)) {
      respuesta += String.fromCharCode((ascii - 'A'.charCodeAt(0) + desplazamiento)%26 
        + 'A'.charCodeAt(0)) ;
    } else if(ascii >= 97 && ascii <= 122){
        respuesta += String.fromCharCode((ascii-'a'.charCodeAt(0) + desplazamiento) % 26 
       + 'a'.charCodeAt(0));
    } else {
        respuesta += palabra[i]
    }
 }
 alert(respuesta);
 return respuesta;
}

//export default cipher;

