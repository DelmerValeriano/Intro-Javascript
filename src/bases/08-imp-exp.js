//exportar e importar 

//import {heroes} from './data/heroes';
//import heroes,{owner} from '../data/heroes';
import heroes from '../data/heroes';

/*
const getHeroesById = (id) =>{
    return heroes.find((heroe)=>{
        if(heroe.id===id){
            return true;
        }else{
            return false;
        }
    });
}
*/

export const getHeroesById = (id) =>{
    return heroes.find((heroe) =>heroe.id === id);
}

//console.log(getHeroesById(2));
//find solo retorna uno, con filter retorna mas de uno
export const getHeroesByOwner = (owner) => heroes.filter((heroe) =>heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(owner);