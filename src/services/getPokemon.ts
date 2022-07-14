import { AxiosResponse } from 'axios'
import { api } from 'services/api'

export type PokemonType = {
  slot: number
  type: {
    name: string
  }
}

export type Pokemon = {
  name: string
  types: PokemonType[]
  image: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export async function getPokemon(name = ''): Promise<Pokemon> {
  const { data }: AxiosResponse<Pokemon> = await api.get(`/pokemon/${name}`)
  return data
}
