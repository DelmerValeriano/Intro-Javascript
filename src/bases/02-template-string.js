const nombre = "Delmer";
const apellido = "Valeriano";
//let nombreCompleto = nombre + ' ' +apellido;

let nombreCompleto =`${nombre} ${apellido}`;

function  getsaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getsaludo(nombreCompleto)}`);