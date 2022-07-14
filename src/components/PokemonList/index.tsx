import PokemonCard from 'components/PokemonCard'
import { useQuery } from 'react-query'
import { getPokemons } from 'services/getPokemons'
import * as S from './styles'

function PokemonList() {
  const pokemons = useQuery(['pokemons'], () => getPokemons(), {
    staleTime: 1000 * 60 * 1 // 1 minutes
  })

  if (pokemons.isLoading) {
    return <S.Loading>Loading...</S.Loading>
  }

  if (pokemons.isError) {
    return <S.Error>Error when fetching pokemons</S.Error>
  }

  return (
    <S.Wrapper>
      <h1>PokemonList</h1>
      <S.ListContent>
        {pokemons.data?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </S.ListContent>
    </S.Wrapper>
  )
}

export default PokemonList
