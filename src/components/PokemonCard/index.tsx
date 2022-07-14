import { useQuery } from 'react-query'
import { getPokemon } from 'services/getPokemon'
import * as S from './styles'

export type PokemonCardProps = {
  name: string
}

function PokemonCard({ name }: PokemonCardProps) {
  const pokemon = useQuery(['pokemon', name], () => getPokemon(name), {
    staleTime: 1000 * 60 * 1 // 1 minutes
  })

  if (pokemon.isLoading) {
    return <S.Wrapper>Loading</S.Wrapper>
  }

  if (pokemon.isError) {
    return <S.Wrapper>Error</S.Wrapper>
  }
  console.log(pokemon.data)
  return (
    <S.Wrapper>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Types>
          {pokemon.data?.types.map(({ type: { name: typeName } }, index) => (
            <S.Type color={typeName} key={index}>
              {typeName}
            </S.Type>
          ))}
        </S.Types>
      </S.Content>
      <S.Image
        src={pokemon.data?.sprites.other['official-artwork'].front_default}
        alt={name}
      />
    </S.Wrapper>
  )
}

export default PokemonCard
