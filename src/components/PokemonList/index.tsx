import PokemonCard from 'components/PokemonCard'
import { useQuery } from 'react-query'
import { getPokemon } from 'services/getPokemon'
import { getPokemons } from 'services/getPokemons'
import * as S from './styles'

function Pokemon({ name }: { name: string }) {
  const { data, isLoading, isError } = useQuery(
    ['pokemon', name],
    () => getPokemon(name),
    {
      staleTime: 1000 * 60 * 1 // 1 minute
    }
  )

  if (isLoading) {
    return <S.LoadingCard>Loading</S.LoadingCard>
  }

  if (isError) {
    return <S.LoadingCard>Error</S.LoadingCard>
  }

  return (
    <PokemonCard
      name={data?.name || ''}
      types={data?.types || []}
      image={data?.sprites.other['official-artwork'].front_default || ''}
    />
  )
}

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
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </S.ListContent>
    </S.Wrapper>
  )
}

export default PokemonList
