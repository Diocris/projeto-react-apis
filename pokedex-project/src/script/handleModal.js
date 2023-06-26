
import { caughtPokemons } from "./caughtPokemons";


export const handleModal = (setter) => {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 5000);

}

export const caughtPokemon = (catchChange) => {
    setTimeout(() => {
        catchChange(true)
    }, 5100);
}


export const releasePokemon = (pokemon, setter, change, setChange, setIsCaught) => {

    const index = caughtPokemons.findIndex((caught) => {
        return caught.name === pokemon
    })


    setter(true)
    setTimeout(() => {
        caughtPokemons.splice(index, 1)
        setChange(change + 1)
        setter(false)
        if (setIsCaught) {
            setIsCaught(false)
        }

    }, 2000)
}

