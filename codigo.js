/*
////////
JUEGO DE PIEDRA PAPEL O TIJERA USANDO CONDICIONALES IF, ELSE IF
////////

// Las Variables que voy a utizliar
const piedra = 1;
const papel = 2;
const tijera = 3;

// Aquí decido con que varible quiero jugar
let variableMia = parseInt(prompt("Escribe el número: \n1 = piedra\n2 = papel\n3 = tijera"));

// Valido lo que se introduce en el "prompt" de lo contrario vuelve a preguntar
while (variableMia > 3 || isNaN(variableMia)) {
    variableMia = parseInt(prompt("NO ESCRIBISTE EL NÚMERO CORRECTO\nEscribe nuevamente el número: \n1 = piedra\n2 = papel\n3 = tijera"));
}

// Aquí se aplica la variable de la máquina al azar (random)
let variableMaquina = (max, min) => variableMaquina = Math.floor(Math.random() * (max - min)) + min;
variableMaquina(1,4);

// A JUGAR !!!
console.log(variableMia, variableMaquina);
const jugar = (usuario, computadora) => {
    const empatePiedra = usuario == piedra && computadora == piedra;
    const empatePapel = usuario == papel && computadora == papel;
    const empateTijera = usuario == tijera && computadora == tijera;
    if (empatePiedra) {
        console.log("::: Empataste con Piedra:::");
        document.write("::: Empataste con Piedra:::");
    } else if (empatePapel) {    
        console.log("::: Empataste con Papel:::");
        document.write("::: Empataste con Papel:::");
    } else if (empateTijera) {  
        console.log("::: Empataste con Tijera:::");
        document.write("::: Empataste con Tijera:::");
    } else if (usuario == piedra && computadora == papel) {
        console.log("Piedra" + " VS " + "Papel" + "\nPerdiste :(");
        document.write("Piedra" + " VS " + "Papel" + "<br/><br/><h2>Perdiste :(</h2>");
    } else if (usuario == piedra && computadora == tijera) {
        console.log("Piedra" + " VS " + "Tijera" + "---¡Ganaste!---");
        document.write("Piedra" + " VS " + "Tijera" + "<br/><br/><h2>---Ganaste!---</h2>");
    } else if (usuario == papel && computadora == piedra) {
        console.log("Papel" + " VS " + "Piedra" + "\n---¡Ganaste!---");
        document.write("Papel" + " VS " + "Piedra" + "<br/><br/><h2>---¡Ganaste!---</h2>");
    } else if (usuario == papel && computadora == tijera) {
        console.log("Papel" + " VS " + "Tijera" + "\nPerdiste :(");
        document.write("Papel" + " VS " + "Tijera" + "<br/><br/><h2>Perdiste :(</h2>");
    } else if (usuario == tijera && computadora == piedra) {
        console.log("Tijera" + " VS " + "Piedra" + "\nPerdiste :(");
        document.write("Tijera" + " VS " + "Piedra" + "<br/><br/><h2>Perdiste :(</h2>");
    } else {
        console.log("Tijera" + " VS " + "Papel" + "\n---¡Ganaste!---");
        document.write("Tijera" + " VS " + "Papel" + "<br/><br/>---¡Ganaste!---</h2>");
    }
}
jugar(variableMia, variableMaquina);
*/

//////////
// JUEGO DE PIEDRA PAPEL O TIJERA USANDO SWITCH
//////////

// Las Variables que voy a utizliar
let piedra = 1, papel = 2, tijera = 3;
// Aquí decido con que varible quiero jugar
let variableMia = parseInt(prompt("Escribe el número: \n1 = piedra\n2 = papel\n3 = tijera"));

// Valido lo que se introduce en el "prompt" de lo contrario vuelve a preguntar
while (variableMia > 3 || isNaN(variableMia)) {
    variableMia = parseInt(prompt("NO ESCRIBISTE EL NÚMERO CORRECTO\nEscribe nuevamente el número: \n1 = piedra\n2 = papel\n3 = tijera"));
}

// Aquí se aplica la variable de la máquina al azar (random)
let variableMaquina = (max, min) => variableMaquina = Math.floor(Math.random() * (max - min)) + min;
variableMaquina(1,4);

const empatar = variableMia == variableMaquina;
const ganar = (variableMia == piedra && variableMaquina == tijera) ||
              (variableMia == papel && variableMaquina == piedra) ||
              (variableMia == tijera && variableMaquina == papel);
const perder = (variableMia == piedra && variableMaquina == papel) || 
               (variableMia == papel && variableMaquina == tijera) ||
               (variableMia == tijera && variableMaquina == piedra);
             
// A JUGAR !!!
console.log(variableMia, variableMaquina);
    
const resultado = empatar || ganar || perder;

switch (resultado) {
    case empatar:
        console.log("¡Empataron!");
        break;
    case ganar:
        console.log("¡¡¡BIEN¡¡¡ - !!!GANASTE!!!");
        break;
    default:
        console.log("Lo siento, perdiste");
}

    

