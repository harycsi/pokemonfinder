const OPTIONS = {
    api: 'https://pokeapi.co/api/v2/pokemon/'
}

const components = {
    button: 'search-button',
    input: 'search-input',
    container: 'pokemon-container'
}

document.getElementById(components.button).addEventListener('click',async () => {
    const data = await getPokemonByName(document.getElementById(components.input).value)
    createPokemonImage(data);
})

async function getPokemonByName(pokemonName){
    const response = await fetch(`${OPTIONS.api}${pokemonName}`)
    const data = await response.json()  //az adatot stringből objektummá alakítja át
    return data;
}

function createPokemonImage(data){
    const pokemonImg = data.sprites.front_default;
    const img = document.createElement('img');
    img.src = pokemonImg;
    document.getElementById(components.container).append(img)
}