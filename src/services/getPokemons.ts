import { AxiosResponse } from 'axios'
import { api } from 'services/api'

type Pokemon = {
  name: string
}

type Pokemons = {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

/*
I can make pagination here by iterating over next and previous links provided on returned data.
But by now I will just list some pokemons.
*/

export async function getPokemons(): Promise<Pokemons> {
  const { data }: AxiosResponse<Pokemons> = await api.get(`/pokemon?limit=150`)
  return data
}
