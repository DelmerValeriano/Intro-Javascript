//funciones
/*
const saludar = function (nombre){

    return `Hola,  ${nombre}`;
}
*/
//funciones flechas
const saludar2 =  (nombre)=>{

    return `Hola,  ${nombre}`;
}

const saludar3 =  (nombre)=> `Hola,  ${nombre}`;
const saludar4 =  ()=> `Hola, Mundo`;

//console.log(saludar('Goku'));
console.log(saludar2('vegueta'));
console.log(saludar3('vegueta'));
console.log(saludar4());


const getUser =() =>({
    uid:'Abcs12',
    username:'Eldemer.250',
});

console.log(getUser());


//Tarea
 
/*Original
function getUsuarioActivo(nombre){
    return{
        uid:'Abcs12',
        username:nombre,

    }
}
*/


//1.Tranformen a una funcion de flecha
const  getUsuarioActivo =(nombre)=>{
    return{
        uid:'Abcs12',
        username:nombre,

    }
}

//2. Tiene que retornar un objeto implicito

const  getUsuarioActivo1 =(nombre)=>
    ({
        uid:'Abcs12',
        username:nombre,

    });


//3 pruebas
const usuarioActivo = getUsuarioActivo('Delmer');
console.log(usuarioActivo);

const usuarioActivo1 = getUsuarioActivo1('Jesus');
console.log(usuarioActivo1);

