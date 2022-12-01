const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click",()=>{
    numero++;
    contador.innerHTML = numero;
    restoNumero()
});

restar.addEventListener("click",()=>{
    if(numero == 0){}
    else {
        numero--;
        contador.innerHTML = numero;
        restoNumero()
    }
});

reset.addEventListener("click", ()=>{
    numero = 0
    contador.innerHTML = numero;
    restoNumero()
});

function restoNumero(){
    let restoNumero = numero
    localStorage.getItem('contador',restoNumero)
    
}


/*LocalStorage: Guarda Cadena de texto, clave => valor
//SET => Guardando
//GET => Obetener
 //const nombre = 'Nico';
 //localStorage.setItem('miNombre',nombre)*/
