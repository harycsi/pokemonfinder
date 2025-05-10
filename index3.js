const OPTIONS = {
    api: 'https://pokeapi.co/api/v2/pokemon/'
}

const components = {
    button: 'search-button',
    input: 'search-input',
    container: 'pokemon-container'
}

document.getElementById(components.button).addEventListener('click',async () => {
    createPokemonImage(await getPokemonByName(document.getElementById(components.input).value));
})

document.getElementById(components.input).addEventListener('input', () => {
    if (document.getElementById(components.input).value.length > 0) {
        document.getElementById(components.button).disabled = false
    } else {
        document.getElementById(components.button).disabled = true
    }
})

async function getPokemonByName(pokemonName){
    return (await fetch(`${OPTIONS.api}${pokemonName}`)).json()     //az adatot stringből objektummá alakítja át
}

function createPokemonImage(data){
    document.getElementById(components.container).append(
        Object.assign(document.createElement('img'),{
            src: data.sprites.front_default,
        })
    );
}