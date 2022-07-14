import React, { createContext, useContext, useEffect, useState } from 'react'
import { Pokemon } from 'services/getPokemon'
import { toast } from 'react-hot-toast'
type PokemonItem = Omit<Pokemon, 'sprites'>

export interface ListContextData {
  list: Pokemon[]
  addPokemon(pokemon: PokemonItem): void
  removePokemon(pokemon: PokemonItem): void
}

const ListContext = createContext<ListContextData>({} as ListContextData)

const ListProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<Pokemon[]>([])

  useEffect(() => {
    const pokemons = localStorage.getItem('pokemons')
    setList(pokemons ? JSON.parse(pokemons) : [])
  }, [])

  const addPokemon = (pokemon: PokemonItem) => {
    const pokemons = localStorage.getItem('pokemons')
    const pokemonsList = pokemons ? JSON.parse(pokemons) : []
    if (
      pokemonsList.find(
        (pokemonFind: Pokemon) => pokemonFind.name === pokemon.name
      )
    ) {
      return toast.error('Pokemon already in your hand')
    }

    if (pokemonsList.length >= 6) {
      return toast.error('You can only have 6 pokemons in your hand')
    }

    pokemonsList.push(pokemon)
    localStorage.setItem('pokemons', JSON.stringify(pokemonsList))
    setList(pokemonsList)
    toast.success('Pokemon added to your hand!')
  }

  const removePokemon = (pokemon: PokemonItem) => {
    const pokemons = localStorage.getItem('pokemons')
    const pokemonsList = pokemons ? JSON.parse(pokemons) : []

    const newPokemonsList = pokemonsList.filter(
      (findPokemon: PokemonItem) => findPokemon.name !== pokemon.name
    )

    localStorage.setItem('pokemons', JSON.stringify(newPokemonsList))
    setList(newPokemonsList)
  }

  return (
    <ListContext.Provider
      value={{
        list,
        addPokemon,
        removePokemon
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

function useList(): ListContextData {
  const context = useContext(ListContext)

  if (!context) {
    throw new Error('useList must be used with ListProvider')
  }

  return context
}

export { useList, ListProvider, ListContext }
