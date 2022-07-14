import HandList from 'components/HandList'
import PokemonList from 'components/PokemonList'
import Search from 'components/Search'
import * as S from './styles'

const Main = ({
  title = 'Pokedex',
  description = 'Search for pokemons and add into your hand'
}) => (
  <S.Wrapper>
    <S.Content>
      <S.Hand>
        <S.HandTitle>Your hand 👋</S.HandTitle>
        <HandList />
      </S.Hand>
      <S.Listing>
        <S.Title>{title} 👾</S.Title>
        <S.Description>{description}</S.Description>
        <Search />
        <PokemonList />
      </S.Listing>
    </S.Content>
  </S.Wrapper>
)

export default Main
