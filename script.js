// declaracion de variables
const Jlink = document.getElementById("jose_link");
const Klink = document.getElementById("kalef_link");
const jose_div = document.getElementById("jose");
const kaleff_div = document.getElementById("kaleff");
const suma_link= document.getElementById("suma_link")
const suma= document.getElementById("suma")
const A= document.getElementById("A")
const B= document.getElementById("B")
const sumar= document.getElementById("sumar")
const resultado=document.getElementById("resultado")

let text="asdasdasd"
let numerico=2342342
const arreglo=["hola", 1, false, text];
const objeto={}
const booleanos=true;

let indice=0;
const frutas=["manzana", "naranja", "pera", "fresa"]

// eventos

Jlink.addEventListener("click", () => {
  jose_div.style.display = "block";
  kaleff_div.style.display = "none";
});

Klink.addEventListener("click", () => {
  jose_div.style.display = "none";
  kaleff_div.style.display = "block";
});

suma_link.addEventListener("click", function(){
    suma.style.display="block"
})

sumar.addEventListener("click", ()=>{
    resultado.textContent=frutas[indice]
    indice=indice+1;


})