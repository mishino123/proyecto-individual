import Card from "../Card/Card";

function Cards({pokemons}){
    console.log(pokemons)
return(
<div>

{pokemons.map(pokemon=>(
    <div key={pokemon.id}>
        <Card
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.image}
        weight={pokemon.weight}
        type={pokemon.type}
        />
    </div>
    ))}


</div>


)
}

export default Cards;