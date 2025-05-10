//asszinkron programozás
// new Promise() -- ez is egy eseményfigyelő, késleltetés
console.log('Első sor');
console.log('Második sor');
//kavefozes(true).then((valasz) => {console.log(valasz)})
const valasz = await kavefozes(true)
console.log(valasz)
kaveKeszitHaVanViz()

//kavefozes().then((valasz) => {console.log(valasz);
//})
//.catch((hiba) => {console.log(hiba)});
//console.log('Negyedik sor');

function kavefozes(vanViz){
    return new Promise((resolve, reject) => {   //resolve-sikeres kérés, reject-hibás kérés
    const idozito = setTimeout(() => {       //{}-mit csináljak, mennyi ideig (2mp)
            if(vanViz){
                resolve('Lefőtt a kávé')
            }else{
                reject('Nincs víz a kávéfőzőben!')
            }

            clearInterval(idozito)      //ha végzett a programfutás, leállítjuk az időzítőt
        }, 2000) 
    })

}

async function kaveKeszitHaVanViz(){
    const valasz = await kavefozes(true)
    if (valasz && valasz === 'kávé') {
        console.log(valasz)
    }
    console.log(valasz)
}

/*{
    pokemon = 'Ditto'
}*/
const dittoAPI = 'https://pokeapi.co/api/v2/pokemon/ditto'  //ez egy végpont

fetch(dittoAPI).then(async (response) => {        //fetch képes mghívni egy api-t
                    const pokemon = await response.json()     //status/válasz: 200 -sikeres
                    console.log(pokemon)
                    const pokemonKepe = pokemon.sprites.front_default
                    const kep = document.createElement("img")
                    kep.src = pokemonKepe
                    document.body.append(kep)
                })
               .catch((hiba) => {
                    console.log("Hiba történt", hiba)         //404 hiba üzenet, nem találta meg
               }) 
               .finally(() => {
                    console.log("Megtörtént a poke Api hívása")
               })