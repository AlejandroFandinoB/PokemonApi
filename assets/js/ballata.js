let lista = document.getElementById("listaPokemon")

const consultarPokemon= (id,num)=>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
           .then((response)=> response.json())
           .then((pokemon)=>{
               crearPokemon(pokemon,num)
           })   
}



const consultarPokemones=()=>{
    let primeroId= Math.round(Math.random()*150)
    let segundoId= Math.round(Math.random()*150)

    consultarPokemon(primeroId,1)
    consultarPokemon(segundoId,2)
};


const crearPokemon= (pokemon,num)=>{
    let html=""
    let item = lista.querySelector(`#pokemon-${num}`)
    
    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.other.dream_world.front_default)

    let nombre =  item.getElementsByTagName("h5")[0]
    nombre.innerHTML = `Nombre: ${pokemon.name}` 

    let orden = item.getElementsByTagName("p")[0]
    orden.innerHTML = `Orden: ${pokemon.order} `  

    let peso = item.getElementsByTagName("p")[1]
    peso.innerHTML = ` Peso: ${pokemon.weight} `

}



consultarPokemones()

