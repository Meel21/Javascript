const recargo3= 1.2;
const recargo6= 1.4;
const recargo12=1.6;


let cantidadDinero =prompt("Por favor,digite la cantidad de dinero")
let cantidadCuotas =prompt ("Digite las cuotas (3,6,o 12 cuotas)")

function calcularMostrar (recargo){
    let total =cantidadDinero*recargo;
    let valorCuota = total/ cantidadCuotas;
    console.log ("total",total);
    for(let i = 1 ; i <= cantidadCuotas; i++) {
        console.log (`Cuota nro ${i}:
        $ ${valorCuota.toFixed(2)}`);
    }
}

while (!cantidadDinero && !cantidadCuotas){
    alert ("No ingreso nada.Intentar nuevamente")
    cantidadDinero =prompt ("Por favor,digite la cantidad de dinero")
    cantidadCuotas =prompt ("Digite la cantidad de cantidadCuotas. (3,6,12 cuotas)")


}

while (isNaN (Number(cantidadDinero))){
    alert("Usted no ingreso un numero,reintentelo")
    cantidadDinero= prompt ("Por favor,digite la cantidad de dinero")}

if (cantidadCuotas ==3){
    calcularMostrar (recargo3);

}else if (cantidadCuotas ==6){
    calcularMostrar (recargo6);

} else if (cantidadCuotas == 12){
    calcularMostrar (recargo12);
} else{
    console.log ("No se ingreso valor correcto");
}