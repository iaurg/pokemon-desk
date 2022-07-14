import PokemonCard from 'components/PokemonCard'
import { useList } from 'context/useList'
import * as S from './styles'

function HandList() {
  const { list, removePokemon } = useList()

  return (
    <S.Wrapper>
      <h1>HandList</h1>
      <S.ListContent>
        {list.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            handleRemove={removePokemon}
            {...pokemon}
          />
        ))}
      </S.ListContent>
    </S.Wrapper>
  )
}

export default HandList
