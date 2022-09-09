
let temp = parseInt(prompt('ingrese la temperatura en C°'));

while( temp >= 20 ){
    let mensaje = `la temperatura es de ${temp}`;
    alert(mensaje);
    if(temp < 50){
        alert("temperatura optima");
    }
    else if(temp < 80){
        alert("temperatura alta,cuidado");
    }
    else if(temp < 100){
        alert("temperatura en niveles dañinos para el equipo, apagando sistema");
        break;
}

    temp = parseInt(prompt('ingrese la temperatura en C°'));
}