//promesas

import {getHeroesById} from './bases/08-imp-exp';

 
// const promesas = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         //tarea
//         //importar el heroe
//         //resolve();
//         const heroe =getHeroesById(2);
//         //cuando lo encuentra resolve(heroe);
//         reject('No se encontro en heore');
//         //console.log(heroe);

//     }, 4000);

// });

// promesas.then((heroe)=>{
//     console.log('heroe de la promesa', heroe);
// })
// .catch((err)=>console.log(err));


const getHeroesByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            //tarea
            //importar el heroe
            //resolve();
            const p1 =getHeroesById(id);
            //cuando lo encuentra resolve(heroe);
            if (p1) {
                resolve(p1); 
            }else{
                reject('No se pudo encontrar el heroe');
            }
            //console.log(heroe);
    
        }, 3000);
    
    });
    
};

getHeroesByIdAsync(1)
    .then(console.log)
    .catch(console.warn);


