//desestructuracion de arreglos
// con fn + f2 sobre una linea podemos cambiar los nombres de todas las referencias del mismo nombre del
const   personajes =['Goku','Vegeta','Trunks'];
const [, ,p3]=personajes;
console.log(p3);

const retonaArreglo =()=>{

    return[12345,'ABC'];

}
const [numero,letras]= retonaArreglo();
console.log(numero,letras);



//Tarea
//1. el primer valor del arr se llamara nombre 
//2. el segundo se llamara set nombre

const animes = (valor)=>{
    return[valor,()=>{console.log('Hola mundo')}];
};

const [nombre,setNombre1] = animes('Goku');
console.log(nombre);
setNombre1();


