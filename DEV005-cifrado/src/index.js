import cipher from  './cipher.js';




//Llamar elementos del DOM usando selectores del DOM
const btnEnviar = document.getElementById('btn-enviar')
const btnBorrar = document.getElementById('btn-borrar')
const btndescifrar= document.getElementById('btn-descifrar')
const btnborrar2 =document.getElementById('btn-borrar2')

//funciones

function cifrarMsjTest() {
  //console.log('hola soy la función cifrarMsjTest')  
  const palabra = document.getElementById("textooriginal").value;
  const desplazamiento = document.getElementById("espaciado").value;
  const palabracifrada = cipher.encode(desplazamiento,palabra);
  document.getElementById("result").value = palabracifrada;
  
}


function descifrarMsjTest() {
  const palabra = document.getElementById("textodescifrado").value;
  // const desplazamiento = (-1)* (document.getElementById("espaciadod").value);
  const desplazamiento = document.getElementById("espaciadod").value
  const palabracifrada = cipher.decode(desplazamiento,palabra);
  document.getElementById("resultd").value = palabracifrada;
}

function vaciarCajastest(){ 
  document.getElementById("textooriginal").value = '';
  document.getElementById("result").value = '';
  document.getElementById("espaciado").value = '';
}
function vaciarCajastestd(){ 
  document.getElementById("textodescifrado").value='';
  document.getElementById("resultd").value='';
  document.getElementById("espaciadod").value='';
}

//Eventos del DOM
btnEnviar.addEventListener('click', cifrarMsjTest)
btnBorrar.addEventListener('click', vaciarCajastest)
btndescifrar.addEventListener('click',descifrarMsjTest)
btnborrar2.addEventListener('click',vaciarCajastestd)


//export default cipher;
// export { CifrarMsjTest, DescifrarMsjTest,VaciarCajastest, VaciarCajastestd}

//console.log(cipher)