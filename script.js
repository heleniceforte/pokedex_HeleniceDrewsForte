function returnResponse(response){
    return response.json()
}

function itemFor(item, index){

    const listPokemon =
    document.getElementById("poke-list")

    const line =
    document.createElement("li")

    const imagePokemon =
    document.createElement("img")

    imagePokemon.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+(index + 1)+ ".png"

    const namePokemon =
    document.createElement("p")

    namePokemon.innerHTML =
    item.name

    const numberPokemon =
    document.createElement("span")

    numberPokemon.innerHTML =
    "#" + (index + 1)

    line.appendChild(imagePokemon)
    line.appendChild(namePokemon)
    line.appendChild(numberPokemon)

    listPokemon.appendChild(line)

}

function jsonResponse(json){

    json.results.forEach(itemFor)

}

function loadPokemonList(){

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    .then(returnResponse)
    .then(jsonResponse)

}

const search =
document.getElementById("search")

search.addEventListener("keyup", function(){

    const pokemonName =
    document.querySelectorAll("#poke-list p")

    pokemonName.forEach(function(name){

        if(
            !name.innerHTML
            .toLowerCase()
            .includes(search.value.toLowerCase())
        ){

            name.parentElement.style.display = "none"

        }
        else{

            name.parentElement.style.display = "flex"

        }

    })

})
