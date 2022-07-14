import * as S from './styles'

/*
Poke API provide no search functionality, so this is a "trick" to get the search functionality.
*/

const Search = () => (
  <S.Wrapper>
    <input type="text" placeholder="Search for pokemons" />
  </S.Wrapper>
)

export default Search
