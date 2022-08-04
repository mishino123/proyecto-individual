import Card from "../Card/Card";
import styles from "./Cards.module.css"; 
function Cards({pokemons}){
    // console.log(pokemons)
return(
<div className={styles.container}>
<div className={styles.cards}>

{pokemons.map(pokemon=>(
    <div key={pokemon.id}>
        <Card
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.image}
        weight={pokemon.weight}
        type={pokemon.type}
        attack={pokemon.attack}
        />
    </div>
    
    ))}


</div>

</div>
)
}

export default Cards;