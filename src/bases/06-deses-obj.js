// desestructuracion de objetos
//asiganacion desestructurante

const persona={
    nombre:'delmer',
    edad:23,
    clave:'Iroman',
    rango:'Soldado',
};

//asignacion desestructurante
//const {nombre,edad,clave} = persona;
//console.log(nombre,edad,clave);

const UseContext = ({nombre,edad,clave, rango='Capitan'})=>{

    //console.log(nombre,edad,clave,rango);

    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:142356,
            lng:-15.665
        }
    }

}
const  {nombreClave,anios,latlng:{lat,lng}} = UseContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
