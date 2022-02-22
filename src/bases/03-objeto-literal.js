const persona={
    nombre:'delmer',
    apellido:'valeriano',
    edad:'23',
    direccion:{
        ciudad:'tegucigalpa',
        zipp:'55633',
        lat:'5562221',
    },
};
const persona2 = {...persona};
persona2.nombre='Jesus';

console.log(persona);
console.log(persona2);